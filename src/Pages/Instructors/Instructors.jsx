
import { Helmet } from "react-helmet-async";
import useInstractor from "../../hooks/useInstractor";
import Instructor from "./Instructor";


const Instructors = () => {

    const [instractors] = useInstractor();
   

    return (
        <>
         <Helmet>
                <title>Sports Academy | Instractor</title>
            </Helmet>
        <div className="grid lg:grid-cols-3 g-10">
           {
            instractors.map(instractor =><Instructor
            key={instractor.Name}
            instractor={instractor}
            ></Instructor>)
           }
        </div>
        </>
    );
};

export default Instructors;