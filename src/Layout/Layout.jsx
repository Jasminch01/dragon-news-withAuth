import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="font-popins w-[80%] mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;