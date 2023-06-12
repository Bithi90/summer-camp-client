/* eslint-disable react/no-unknown-property */

import useSelected from "../../../hooks/useSelected";

import MySelectedClassRow from "./MySelectedClassRow";


const MySelectedClasses = () => {

    const [selected] = useSelected();
    console.log(selected);

    const totalPrice = selected.reduce((sum, item) => parseFloat(item.Price) + parseFloat(sum), 0)

   

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
                        {
                            selected.map((item, index,) => <MySelectedClassRow
                                key={item._id}
                                item={item}
                                index={index}
                            ></MySelectedClassRow>)  
                        }
                        {/* row 1 */}
                        
                             {/* <tr>
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
                                    <Link price={item.Price} to={`/dashboard/payment/${item._id}`}><button className="btn bg-lime-700 btn-sm text-white">pay</button></Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item)} className="btn text-2xl btn-sm text-red-600"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr> */}
                        

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;