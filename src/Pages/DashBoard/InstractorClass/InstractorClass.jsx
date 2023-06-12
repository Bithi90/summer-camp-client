/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const InstractorClass = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [], refetch } = useQuery(['class'], async () => {
        const result = await axiosSecure.get('/class')
        return result.data;
    })

    return (
        <div className="w-full ml-20">
            <h2>Total Class : {classes.length}</h2>
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
                           
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            classes.map((classes, index) => <tr
                                key={classes._id}
                                classes={classes}
                                index={index}
                            >
                                <td>{index}</td>
                                <td>
                                    <div className="flex items-center ">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classes.Image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2 className="font-bold">{classes.Name}</h2></td>
                                <td>
                                    <div className="text-sm font-bold">{classes.Instructor_name}</div>
                                </td>
                                <td className="font-bold"> ${classes.Price}</td>
                                <td>{classes.category}</td>
                                <td>{classes.Available_seats}</td>
                               
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstractorClass;