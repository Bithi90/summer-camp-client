import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';


const Navber = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
   
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOption = <>
        <li className='text-amber-400 text-xl font-bold '><Link to='/'><a>Home</a></Link></li>
        <li className='text-amber-400 text-xl font-bold '><Link to='/instructors'><a>Instructors</a></Link></li>
        <li className='text-amber-400 text-xl font-bold '><Link to='/classes'><a>Classes</a></Link></li>
        <li className='text-amber-400 text-xl font-bold '>
            {
                isAdmin ? <Link to='/dashboard/manageUser'><a>Dashboard </a></Link> :
                <Link to='/dashboard/selectedClasses'><a>Dashboard </a></Link>
            }
            
        </li>


        {
            user ? <><button onClick={handleLogOut} className="btn btn-active  btn-ghost btn-xs mt-2 ">LogOut</button>
                <span>{user?.displayName}</span>
            </> :
                <>
                    <li className='text-amber-800 text-xl font-bold '><Link to='login'>Login</Link></li>
                </>
        }
    </>

    return (
        <div className="navbar fixed z-10  bg-opacity-20 max-w-screen-xl bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <div className='grid justify-items-center'>
                    <img className='h-[80px] w-[100px]' src={logo} alt="" />
                    <p className='text-orange-400 text-xl font-bold mb-2'>𝕊𝕡𝕠𝕣𝕥𝕤 𝔸𝕔𝕒𝕕𝕖𝕞𝕪</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    </> : <>
                        <Link to='/signup'><button className="btn btn-warning">Register</button></Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navber;