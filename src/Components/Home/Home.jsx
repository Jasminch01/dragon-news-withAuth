import Header from "./Header/Header";
import Leftside from "./Leftside/Leftside";
import Navbar from "./Navbar/Navbar";
import News from "./News/News";
import Rightside from "./Rightside/Rightside";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border border-red-400">
                    <Rightside></Rightside>
                </div>
                <div className="border border-red-400 md:col-span-2">
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