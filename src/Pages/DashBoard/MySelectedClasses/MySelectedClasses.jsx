/* eslint-disable react/no-unknown-property */
import { FaTrashAlt } from "react-icons/Fa";
import useSelected from "../../../hooks/useSelected";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MySelectedClasses = () => {

    const [selected, refetch] = useSelected();
    console.log(selected);

    const totalPrice = selected.reduce((sum, item) => parseFloat(item.Price) + parseFloat(sum), 0)

    const handleDelete =(item) =>{
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
                fetch(`http://localhost:5000/selected/${item._id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount>0){
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
            <div className="flex justify-evenly font-semibold text-2xl mb-10">
                <h1>Total selected Class : {selected.length}</h1>
                <h1>Total Price : ${totalPrice}</h1>

            </div>
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
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            selected.map((item , index) => <tr
                                key={item._id}
                                item={item}
                            >
                                <td>{index}</td>
                                <td>
                                    <div className="flex items-center ">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.Image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                  <h2 className="font-bold">{item.Name}</h2></td>
                                <td>
                                    <div className="text-sm font-bold">Instructor Name : {item.Instructor_name}</div>
                                </td>
                                <td className="font-bold">Price : ${item.Price}</td>
                                <th>
                                    <Link to='/dashboard/payment'><button className="btn bg-lime-700 btn-sm text-white">pay</button></Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item)} className="btn text-2xl btn-sm text-red-600"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;