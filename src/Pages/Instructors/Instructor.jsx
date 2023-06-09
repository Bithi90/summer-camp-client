/* eslint-disable react/prop-types */


const Instructor = ({instractor}) => {

    const {Name, Image, Email} = instractor;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={Image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{Name}</h2>
                <p>Email : {Email}</p>
                <div className="card-actions">
                    <button className="btn bg-lime-700 btn-success">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default Instructor;