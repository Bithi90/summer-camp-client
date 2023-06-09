import SectionTitle from '../../../Component/SectionTitle';
import indoorImg from '../../../assets/images (15).jpg';
import outdoorImg from '../../../assets/maxresdefault.jpg';

const Category = () => {
    return (
        <div>
            <SectionTitle
             subHeading={"welcome to our"}
             heading={"HELLO SUMMER CAMP"}
            ></SectionTitle>
            <div className="flex justify-center gap-6 m-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={indoorImg} alt="Shoes" className="rounded-xl h-[300px] w-[400px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={outdoorImg} alt="Shoes" className="rounded-xl h-[300px] w-[400px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;