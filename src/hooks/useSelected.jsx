import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useSelected = () => {

    const { user } = useContext(AuthContext);

    const { isLoading, refetch, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        queryFn: async  () =>{
            const result = await fetch(`http://localhost:5000/selected?email=${user?.email}`)
            return result.json();
        },
    })
    
    return [selected,refetch, isLoading]
}
export default useSelected;