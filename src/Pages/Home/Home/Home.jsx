import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sports Academy | home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;