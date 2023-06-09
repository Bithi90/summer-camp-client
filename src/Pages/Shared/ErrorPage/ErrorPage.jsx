import { Link } from "react-router-dom";
import errorImg from '../../../assets/404-Pages.jpg';


const ErrorPage = () => {
    return (
        <div className='fixed-top'>
            <img className='w-full' src={errorImg} alt="" />
            <Link to='/'><button className="btn btn-error absolute   right-[680px] bottom-[340px]">Go To Home</button></Link>
        </div>
    );
};

export default ErrorPage;