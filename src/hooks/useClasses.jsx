import { useEffect } from "react";
import { useState } from "react";

const useClasses = () =>{
    const [sports, setSports] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                setSports(data)
                setLoading(false)
            });
    }, [])

    return [sports, loading]
}
export default useClasses; 