/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelected from "../../hooks/useSelected";
import { useState } from "react";


const Class = ({ sport }) => {
    const { Name, Image, Available_seats, Instructor_name, Price, _id } = sport;
    const [disabled, setDisabled] = useState(false);

    const { user } = useContext(AuthContext);
    const [, refetch] = useSelected();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = sport => {
        console.log(sport);
        if (user && user.email) {
            const selectedItem = { Name, Image, Available_seats, Instructor_name, Price, classItemId: _id, email: user.email }
            fetch('http://localhost:5000/selected', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItem)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added on the selected class',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setDisabled(true);
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please login to enroll the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card w-96 glass">
            <figure><img className="h-[200px] w-[300px]" src={Image} alt="car!" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title ">{Name}</h2>
                <p>Available seats : {Available_seats}</p>
                <p>Instructor name : {Instructor_name}</p>
                <p>Price : {Price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleSelect(sport)} disabled={disabled} className="btn bg-lime-700 btn-success">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Class;