import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const imgHostingToken=import.meta.env.VITE_ImgHostingToken;


const Addclass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset , formState:{errors} } = useForm();
    const imgHostingUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostingToken}`
   

    const onSubmit = data => {
        console.log(data);
       const formData = new FormData();
       formData.append('Image', data.Image[0])
       fetch(imgHostingUrl ,{
        method:'POST',
        body: formData
       })
       .then(res => res.json())
       .then(imgResponse => {
        console.log(imgResponse)
       })
        // console.log(formData);
        // formData.append('Image', data.Image[0])

        // fetch(imgHostingUrl, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgResponse => {
        //         if (imgResponse.success) {
        //             const imgURL = imgResponse.data.display_url;
        //             const { Name, Price, category  } = data;
        //             const newItem = { Name, Price: parseFloat(Price), category, Image: imgURL, Instractor_Name:user.displayName, Instractor_Email:user.email }
        //             console.log(newItem)
        //             axiosSecure.post('/class', newItem)
        //                 .then(data => {
        //                     console.log('after posting new class item', data.data)
        //                     if (data.data.insertedId) {
        //                         reset();
        //                         Swal.fire({
        //                             position: 'top-end',
        //                             icon: 'success',
        //                             title: 'Item added successfully',
        //                             showConfirmButton: false,
        //                             timer: 1500
        //                         })
        //                     }
        //                 })
        //         }
        //     })

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
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Image*</span>
                        </label>
                        <input type="file" {...register("Image", { required: true })} className="file-input file-input-bordered w-full " />
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