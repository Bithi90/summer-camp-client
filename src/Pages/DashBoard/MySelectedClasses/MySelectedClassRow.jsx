/* eslint-disable react/prop-types */

import { FaTrashAlt } from "react-icons/Fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useSelected from "../../../hooks/useSelected";


const MySelectedClassRow = ({ item, index }) => {
    const [, refetch] = useSelected();
    const { Image, Name, Price, Instructor_name} = item;

    const handleDelete = (item) => {
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
                fetch(`http://localhost:5000/selected/${item._id}`, {
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

        <tr>
            <td>{index}</td>
            <td>
                <div className="flex items-center ">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={Image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <h2 className="font-bold">{Name}</h2></td>
            <td>
                <div className="text-sm font-bold">Instructor Name : {Instructor_name}</div>
            </td>
            <td className="font-bold">Price : ${Price}</td>
            <th>
                <Link state={item}  to={`/dashboard/payment`}><button className="btn bg-lime-700 btn-sm text-white">pay</button></Link>
            </th>
            <th>
                <button onClick={() => handleDelete(item)} className="btn text-2xl btn-sm text-red-600"><FaTrashAlt></FaTrashAlt></button>
            </th>
        </tr>

    );
};

export default MySelectedClassRow;