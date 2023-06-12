/* eslint-disable react/no-unknown-property */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageClass = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: pendingClasses = [], refetch } = useQuery(['pendingClass'], async () => {
        const result = await axiosSecure.get('/pendingClass')
        return result.data;
    })

    const handleApproved = pendingClass => {
        console.log(pendingClass._id);
        fetch(`http://localhost:5000/pendingClass/approved/${pendingClass._id}`,{
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const approvedData = { Name:pendingClass.Name, Image:pendingClass.Image, Available_seats:pendingClass.Available_seats, Instructor_name:pendingClass.Instructor_name, Price:pendingClass.Price, classItemId:pendingClass._id }
                if (data.modifiedCount) {
                    fetch('http://localhost:5000/class',{
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(approvedData)
                    })
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ' Class Approved successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });

                  
                }
            })
            
    }

    const handDenied = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/pendingClass/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className="w-full ml-20">
            <h2>manage class : {pendingClasses.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-lime-700 text-white">
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instractor Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Available_seats</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            pendingClasses.map((pendingClass, index) => <tr
                                key={pendingClass._id}
                                pendingClass={pendingClass}
                                index={index}
                            >
                                <td>{index}</td>
                                <td>
                                    <div className="flex items-center ">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={pendingClass.Image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2 className="font-bold">{pendingClass.Name}</h2></td>
                                <td>
                                    <div className="text-sm font-bold">{pendingClass.Instructor_name}</div>
                                </td>
                                <td className="font-bold"> ${pendingClass.Price}</td>
                                <td>{pendingClass.category}</td>
                                <td>{pendingClass.Available_seats}</td>
                                <td className="font-bold">
                                    {
                                        pendingClass.status === 'approved' ? 'Approved' :
                                                <p>{pendingClass.status}</p>
                                    }
                                </td>
                                <td>
                                    {
                                        pendingClass.status === 'Approved' ?<>
                                            <button disabled={true} className="btn  btn-sm">Approved </button>
                                        </> : 
                                        <button onClick={() => handleApproved(pendingClass)} className="btn bg-lime-700 btn-sm text-white">Approved</button>
                                    }
                                
                               
                                </td>

                                <th>
                                    <button onClick={() => handDenied(pendingClass._id)} className="btn bg-lime-700 btn-sm text-white">Denied</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;