import { Link } from "react-router-dom"
import Cards from "../../utils/Cards"
import { FaUsersLine } from "react-icons/fa6"
import { IoMdPersonAdd } from "react-icons/io"
import { FaBook } from "react-icons/fa"
import RecentStudent from "./RecentStudent"
import { useSelector } from "react-redux"
const Dashboard = () => {
    const studentdataLength = useSelector((store) => store.user.studentdata.length);
    const teachersdataLength = useSelector((store) => store.user.teachersdata.length);
    const coursesdataLength = useSelector((store) => store.user.coursesdata.length);
    const userName = useSelector((store) => store.user.user?.name) || "User";
    
    return (
        <div className="overflow-auto flex-1 flex flex-col bg-slate-300 select-none">

            <div className="h-fit p-2 text-blue-600">
                <div className=" bg-white rounded-sm flex justify-between items-center p-2">
                    <div className="pl-3">Welcome back, {userName}</div>
                    <Link to={"/students/newstudent"} className="bg-blue-600 font-semibold text-black h-9 w-35 cursor-pointer btn"> Add student</Link>
                </div>
                <div className="flex gap-4 mt-4 ">
                    <Link to={"/students"} className=" bg-white flex-1 p-2 pl-4 rounded"><Cards total={studentdataLength} info="all enrolled students" title="total students" icon={<FaUsersLine className="size-15 text-blue-700 bg-blue-300 rounded  p-3" />} /></Link>
                    <Link to={"/teachers"} className=" bg-white flex-1 p-2 pl-4 text-green-400 rounded text-gree"> <Cards total={teachersdataLength} info="all registered teachers" title="total teachers" icon={<IoMdPersonAdd className="size-15  bg-green-200  rounded  p-3" />} />  </Link>
                    <Link to={"/courses"} className=" bg-white flex-1 p-2 pl-4 text-purple-700 rounded"> <Cards total={coursesdataLength} info="all available courses" title="total courses" icon={<FaBook className="size-15 bg-purple-200 rounded  p-3" />} />  </Link>
                </div>
            </div>
            <div className="h-full flex-1 min-h-0">
                <RecentStudent />
            </div>
        </div>
    )
}
export default Dashboard