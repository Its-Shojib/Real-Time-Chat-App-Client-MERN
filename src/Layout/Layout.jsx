import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 min-h-screen bg-white">
            <Outlet />
        </div>
    );
};

export default Layout;