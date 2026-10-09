import details from "../../Helper/SidebarData";
import { FaGraduationCap } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setmenu, setUserLogin } from "../../store/Slice.jsx";

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userLogout = () => {
        localStorage.removeItem("isLogin")
        dispatch(setUserLogin(false));
        navigate("/login", { replace: true });
    };

    return (
        <div className="text-sm h-full w-full p-4 flex flex-col gap-4 bg-indigo-700 text-gray-200 select-none">
            <div className="capitalize flex gap-3 items-center">
                <div className="border rounded-lg bg-white size-15 flex justify-center items-center">
                    <FaGraduationCap className="size-10 text-blue-700" />
                </div>

                <div className="flex-1 font-bold">
                    <span className="uppercase">Student</span> management system
                </div>
                <div className="cursor-pointer" onClick={()=>dispatch(setmenu())}>❌</div>
            </div>

            <hr />

            <div className="capitalize flex flex-col gap-2 overflow-auto scrollbar-none bg-indigo-700">
                {details.map((c, i) => (
                    <Link
                        key={i}
                        to={c.text === "logOut" ? "#" : c.link}
                        onClick={(e) => {
                            dispatch(setmenu())
                            if (c.text === "logOut") {
                                e.preventDefault();
                                userLogout();
                            }
                        }}
                        className="cursor-pointer hover:bg-blue-500 hover:text-white rounded-lg p-2 flex gap-5 items-center"
                    >
                        <div>{c.icon}</div>
                        <div>{c.text}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;