import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/useClasses";
import Class from "./Class";


const Classes = () => {
    const [sports] = useClasses();
    return (
        <>
            <Helmet>
                <title>Sports Academy | Class</title>
            </Helmet>

            <div className="grid lg:grid-cols-3 g-10">
                {
                    sports.map(sport => <Class
                        key={sport._id}
                        sport={sport}
                    ></Class>)
                }
            </div>
        </>

    );
};

export default Classes;