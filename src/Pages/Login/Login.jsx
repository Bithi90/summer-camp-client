import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


import loginImg from '../../assets/loginImg.jpg'
import { useContext, useEffect,useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

    const [disabled , setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useContext(AuthContext);

    const from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        loadCaptchaEnginge(6); 
    }, [])

    const handleLogin = event  =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'Login successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
              navigate(from, {replace:true});
        })
    }

    const handleValidateCaptha = (e) =>{
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false);
        }
   
        else {
           setDisabled(true);
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='h-[700px] w-[800px]' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-3xl font-bold text-lime-800 text-center p-4'>Please Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptha} type="text" name='captcha' placeholder="type the captcha above" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled}  className="btn bg-lime-700 btn-success" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-2'>New Here? <Link to='/signUp'>Create a New Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
