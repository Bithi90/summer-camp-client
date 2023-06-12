import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";




const Addclass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset,  } = useForm();
    

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('Image', data.Image)
        const item = { Image: data.Image, Name: data.Name,category: data.category,Price:data.Price,Available_seats:data.Available_seats, Instructor_name:user.displayName ,status: 'pending'}
        fetch('http://localhost:5000/pendingClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(item)
        })
        .then(res=> res.json())
        .then(resData =>{
            if (resData.insertedId) {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })

       
    };
    return (
        <div className="w-full ml-20">
            <h2 className="flex justify-evenly font-semibold text-2xl mb-10">Add an Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Name"
                        {...register("Name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Indoor</option>
                            <option>Outdoor</option>

                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("Price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4">
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" {...register("Image", { required: true })} name="Image" placeholder="PhotoURL" className="input input-bordered" />

                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available seats*</span>
                        </label>
                        <input type="number" {...register("Available_seats", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <input className="btn btn-sm bg-lime-700 text-white mt-4" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default Addclass;