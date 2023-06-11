/* eslint-disable react/no-unknown-property */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/Fa";
import Swal from "sweetalert2";


const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const result = await fetch('http://localhost:5000/users')
        return result.json();
    })
    const [disabled, setDisabled] = useState(false);

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'admin created successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            setDisabled(true);
    }

    return (
        <div className="w-full ml-20">
            <h2 className="flex justify-evenly font-semibold text-2xl mb-10">All user : {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-lime-700 text-white">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                            <th>Make Admin</th>
                            <th>Make Instractor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                                user={user}
                            >
                                <td>{index + 1}</td>
                                {/* <td>
                                    <div className="flex items-center ">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.Image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td> */}
                                <td>
                                    <h2 className="font-bold">{user.name}</h2></td>
                                <td>
                                    <div className="text-sm font-bold"> {user.email}</div>
                                </td>
                                <td className="font-bold">
                                    {
                                        user.role === 'admin' ? 'Admin' :
                                            <p>Student</p>
                                    }</td>
                                <th>
                                    <button disabled={disabled} onClick={() => handleMakeAdmin(user._id)} className="btn bg-lime-700 btn-sm text-white">Make Admin</button>
                                </th>
                                <th>
                                    <button className="btn bg-lime-700 btn-sm text-white">Make Instractor</button>
                                </th>
                                <th>
                                    <button className="btn text-2xl btn-sm text-red-600"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;