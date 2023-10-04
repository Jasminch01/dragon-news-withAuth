import { useLoaderData } from "react-router-dom";
import Header from "./Header/Header";
import Leftside from "./Leftside/Leftside";
import Navbar from "./Navbar/Navbar";
import News from "./News/News";
import Rightside from "./Rightside/Rightside";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="">
                    <Rightside categories = {categories}></Rightside>
                </div>
                <div className="md:col-span-2 relative">
                    <News></News>
                </div>
                <div className="">
                    <Leftside></Leftside>
                </div>
            </div>
        </div>
    );
};

export default Home;