import { useState } from "react";
import { useEffect } from "react";
const useInstractor = () =>{
    const [instractors, setInstractors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/instractors')
            .then(res => res.json())
            .then(data => {
                setInstractors(data)
                setLoading(false)
            });
    }, [])

    return [instractors, loading]
}
export default useInstractor;