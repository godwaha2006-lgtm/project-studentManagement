import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import Form from "./markattendence/Form.jsx";
import DataTable from "./markattendence/DataTable.jsx";

const MarkAttendence = () => {
    const students = useSelector((state) => state.user.studentdata);
    const navigate = useNavigate();
    const today = new Intl.DateTimeFormat("en-CA").format(new Date());
    const [filter, setFilter] = useState({ course: "All" });
    const [status, setStatus] = useState(() => students.map((student) => ({ ...student, attendanceToday: null })));

    const displayedIds = useMemo(
        () => status.filter((student) => filter.course === "All" || student.course === filter.course).map((student) => student.id),
        [status, filter.course]
    );

    const save = () => {
        const allMarked = displayedIds.every((id) => status.find((student) => student.id === id)?.attendanceToday);
        if (!allMarked) return false;
        navigate("/attendence");
        return true;
    };

    return (
        <div className="h-full flex flex-col min-h-0 overflow-auto scrollbar-none">
            <div className="flex flex-col shrink-0 w-full px-5 my-5">
                <div className="capitalize text-xl">Mark attendance</div>
                <Link to="/attendence" className="text-blue-500 cursor-pointer">Attendance</Link>
            </div>
            <Form set={setFilter} value={filter} save={status} setStatus={setStatus} students={students} today={today} onSaved={save} />
            <div className="overflow-auto flex-1 min-h-0">
                <DataTable course={filter.course} set={setStatus} value={status} today={today} />
            </div>
        </div>
    );
};

export default MarkAttendence;
