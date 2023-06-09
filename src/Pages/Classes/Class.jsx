/* eslint-disable react/prop-types */


const Class = ({sport}) => {
    const {Name, Image,Available_seats, Instructor_name, Price}  = sport;
    return (
        <div className="card w-96 glass">
            <figure><img className="h-[200px] w-[300px]" src={Image} alt="car!" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title ">{Name}</h2>
                <p>Available seats : {Available_seats}</p>
                <p>Instructor name : {Instructor_name}</p>
                <p>Price : {Price}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-lime-700 btn-success">Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default Class;