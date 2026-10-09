import { Link } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setmenu } from "../../store/Slice";

const Navbar = () => {
    const dispatch = useDispatch();
    const islogin = useSelector((store)=>store?.user?.login);
    const user = useSelector((store)=>store?.user?.user)
    return (
        <div className="bg-white/90 h-14 shrink-0 border px-4 text-black flex items-center justify-between select-none">
            <div className="flex items-center gap-3">
                <FiMenu onClick={() => dispatch(setmenu())} className="cursor-pointer" />
                <Link to="/" className="flex font-bold items-center "> Dashboard</Link>
            </div>
            {islogin ? <Link to={"/profile"} className="flex items-center gap-5 cursor-pointer">
                <div className="size-10 ">
                    <img src="/student.jpg" alt="user" className="h-full w-full rounded-full" />
                </div>
                <div>{user.name}</div>
            </Link> :
                <Link to={"/login"} className="flex btn">Login</Link>
            }
        </div>
    )
}
export default Navbar