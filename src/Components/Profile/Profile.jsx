import Addprofile from "./Addprofile"
import Display from "./Display.jsx";
import { useSelector } from "react-redux";

const Profile = () => {
    const data = useSelector((store)=>store?.user?.user);
    
    return (
        <div className="bg-black h-full w-full flex text-white shrink-0 ">
            <div className="w-95 flex flex-col shrink-0 overflow-auto scrollbar-none ">
                <div className="h-45  flex justify-center items-center ">
                    <div className="flex items-center gap-5 ">
                        <img src="/student.jpg" alt="studentImage" className=" size-30 mt-5 rounded-full" />
                        <div className="mt-10">
                            <div className="flex text-red-500">Admin</div>
                            <div className="capitalize ">{data?.name}</div>
                            <div className="text-blue-500 text-sm truncate">{data?.email}</div>
                        </div>
                    </div>
                </div>
                <div className=" flex-1 p-2"><Display /></div>
            </div>
            <div className="flex-1 border-l">
                <Addprofile />
            </div>
        </div>
    )
}
export default Profile
