import { FaPlus } from "react-icons/fa6";
import { Link, Outlet, useLocation } from "react-router-dom";

const Result = () => {
    const loc = useLocation().pathname;
    console.log(loc);


    return (
        <div className={loc === "/results" && `h-full flex-1 min-h-0 bg-slate-300 px-2 flex flex-col select-none`}>
            {loc === "/results" && <div className="flex justify-between pb-3 font-bold items-center mt-2">
                <Link to={"/results"} className=" text-lg ">Results</Link>
                <Link to={"/results/addresult"} className=" btn bg-blue-500 text-black text-lg "><FaPlus />Add result</Link>
            </div>}
            <div className="h-full min-h-0 flex flex-col bg-white rounded-t  p-2 ">
                {loc === "/results" && <form action="" className="flex items-center capitalize font-black">

                    {/* <div className="flex flex-col w-100   p-1 my-2 mr-4 rounded ">
                        <label htmlFor="search" className="pl-1  cursor-pointer">Search student</label>
                        <input id="search" type="search" className="border p-2 rounded bg-white w-full" placeholder=" 🔍 Search by name or rollno" />
                    </div> */}

                    <div className="flex-1 flex gap-2 h-full items-center my-6 capitalize">
                        <div className="border rounded p-2 px-4">Use <b>Add result</b> to enter or update marks.</div>
                    </div>
                </form>}
                <div className=" h-full min-h-0">
                    <Outlet />
                </div>


            </div>
        </div>
    )
}
export default Result