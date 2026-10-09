import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "../../utils/Select.jsx";
import StudentData from "./StudentData.jsx";

const Students = () => {
    const [course, setCourse] = useState("All");
    const [search, setSearch] = useState("");

    return (
        <div className="h-full flex-1 min-h-0 bg-slate-300 px-2 flex flex-col select-none">
            <div className="flex justify-between pb-3 font-bold items-center mt-2">
                <div className="text-lg">Students</div>
                <Link to="/students/newstudent" className="btn bg-blue-500 text-black text-lg">
                    <FaPlus /> Add new student
                </Link>
            </div>
            <div className="h-full min-h-0 flex flex-col bg-white rounded-t p-2">
                <div className="my-5 flex items-center gap-4">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        className="border p-2 rounded bg-white flex-1 outline-none"
                        placeholder="Search by name, roll no, course or email"
                    />
                    <Select set={setCourse} label1="All courses" value1="All" value2="BBA" value3="BCA" value4="B.Tech" value5="MCA" />
                </div>
                <div className="h-full min-h-0">
                    <StudentData course={course} search={search} />
                </div>
            </div>
        </div>
    );
};

export default Students;
