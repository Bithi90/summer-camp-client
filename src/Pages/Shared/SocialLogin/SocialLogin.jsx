import { useContext } from "react";
import { FcGoogle } from "react-icons/Fc";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });

                    })


            })
    }

    return (
        <div className="text-center">
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle text-3xl"><FcGoogle></FcGoogle></button>
        </div>
    );
};

export default SocialLogin;