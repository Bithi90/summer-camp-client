
import useInstractor from "../../hooks/useInstractor";
import Instructor from "./Instructor";


const Instructors = () => {

    const [instractors] = useInstractor();
   

    return (
        <div className="grid lg:grid-cols-3 g-10">
           {
            instractors.map(instractor =><Instructor
            key={instractor.Name}
            instractor={instractor}
            ></Instructor>)
           }
        </div>
    );
};

export default Instructors;