import { FaPlus } from "react-icons/fa6"
import TeachersData from "./TeachersData"
import { Link } from "react-router-dom"
const Teachers = () => {
    return (
        <div className="h-full flex-1 min-h-0 bg-slate-300 px-2 flex flex-col capitalize">
            <div className=" text-xl font-bold my-2 ">Teachers</div>
            <div className="h-full min-h-0 flex flex-col bg-white rounded-t  p-2">
                <div className="flex gap-5 items-center">
                    <Link to={"/teachers/newteacher"} className="btn bg-blue-500 text-black font-bold text-lg"><FaPlus />Add teachers</Link >
                    {/* <div className="flex flex-1  bg-white items-center  border pl-1 rounded ">
                        <label htmlFor="search" className="pl-1  cursor-pointer"><IoSearch className="h-full" /></label>
                        <input id="search" type="search" className="outline-none input bg-white w-full" placeholder="Search teacher by name , id or subject" />
                    </div> */}
                </div>
                <div className=" h-full min-h-0 mt-4">
                    <TeachersData />
                </div>
            </div>
        </div>
    )
}
export default Teachers