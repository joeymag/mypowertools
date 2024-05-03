import SideBar from "./SideBAR/page";


const Layout = ({ children }) => {
    return (
        <div className="flex items-start justify-between ">
            <div className="flex">
                <SideBar />
            </div>
            <div className="h-full w-full ">
                {children}
            </div>
        </div>
    );
};

export default Layout;