/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useMakeInstractor from "../hooks/useMakeInstractor";


const InstractorRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isInstractor, isInstractorLoading] = useMakeInstractor();
    const location = useLocation();

    if(loading || isInstractorLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isInstractor){
        return children;
    }
    return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default InstractorRoute;