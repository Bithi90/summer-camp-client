import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useMakeInstractor = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isInstractor, isLoading: isInstractorLoading } = useQuery({
        queryKey: ['isInstractor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instractor/${user?.email}`);
            return res.data.instractor;
        }
    })
    return [isInstractor, isInstractorLoading]
};

export default useMakeInstractor;