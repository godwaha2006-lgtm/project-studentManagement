import { FaPlus } from "react-icons/fa6"
import { Link } from "react-router-dom";
import CoursesData from "./CoursesData.jsx";

const Courses = () => {
    
    return (
        <div className="h-full flex-1 min-h-0 bg-slate-300 px-2 flex flex-col capitalize select-none" >
            <div className="flex justify-between pb-3 font-bold items-center mt-2">
                <div className=" text-lg ">Courses</div>
                <Link to={"/courses/newcourses"} className=" btn bg-blue-500 text-black text-lg "><FaPlus />Add new Course</Link>
            </div>
            <div className="h-full min-h-0 flex flex-col bg-white rounded-t  p-2 ">

                {/* <form action="" className="flex items-center capitalize font-black">

                    <div className="flex flex-col w-100   p-1 my-2 mr-4 rounded ">
                        <label htmlFor="search" className="pl-1  cursor-pointer">Search course</label>
                        <input id="search" type="search" className="border p-2 rounded bg-white w-full" placeholder=" 🔍 Search course by name or code" />
                    </div>

                    <div className="flex-1 flex gap-2  items-end capitalize">
                        <SelectInput label={"department"} title={"all course"} text1={"hyt"} text2={"BCA"} text3={"MCA"} text4={"MBA"} />
                        <SelectInput label={"status"} title={"all exam"} text1={"CSE"} text2={"BCA"} text3={"MCA"} text4={"MBA"} />
                        <div className="border rounded p-1 px-4 flex items-center gap-2"><CiFilter />Filter</div>
                        <div className="border rounded p-1 px-4 flex items-center gap-2">reset</div>
                    </div>
                </form> */}
                <div className=" h-full min-h-0">
                    <CoursesData />
                </div>
            </div>
        </div>
    )
}
export default Courses