import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useSelected = () => {

    const { user, loading } = useContext(AuthContext);
    
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, refetch, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        enabled: !loading,
        
        queryFn: async  () =>{
            const result = await axiosSecure.get(`/selected?email=${user?.email}`)
            console.log('res from axios', result);
            return result.data;
        },
    })
    
    return [selected,refetch, isLoading]
}
export default useSelected;