import useClasses from "../../hooks/useClasses";
import Class from "./Class";


const Classes = () => {
    const [sports] = useClasses();
    return (
        <div className="grid lg:grid-cols-3 g-10">
            {
                sports.map(sport => <Class
                key={sport._id}
                sport={sport}
                ></Class>)
            }
        </div>

    );
};

export default Classes;