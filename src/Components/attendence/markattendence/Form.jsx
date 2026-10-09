import { useDispatch } from "react-redux";
import { setstudentdata } from "../../../store/Slice.jsx";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Form = ({ set, value, save, setStatus, students, today, onSaved }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const savedata = () => {
        const course = value.course || "All";
        const relevant = save.filter((student) => course === "All" || student.course === course);
        if (!relevant.length || relevant.some((student) => !student.attendanceToday)) {
            toast.error("Please mark attendance for every visible student");
            return;
        }

        const updated = students.map((student) => {
            const draft = save.find((item) => item.id === student.id);
            if (!draft?.attendanceToday) return student;
            return { ...student, status: draft.attendanceToday, date: today };
        });

        dispatch(setstudentdata(updated));
        toast.success("Attendance marked successfully");
        onSaved();
    };

    const reset = () => {
        setStatus(students.map((student) => ({ ...student, attendanceToday: null })));
        toast.success("Attendance reset");
    };

    return (
        <div className="flex gap-5 items-end mx-20 justify-end">
            <div className="flex flex-col capitalize">
                <label htmlFor="attendance-course">Course</label>
                <select value={value.course} onChange={(e) => set({ ...value, course: e.target.value })} id="attendance-course" className="cursor-pointer border w-30 h-10 p-2 rounded-t bg-gray-500">
                    <option value="All">All courses</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="BBA">BBA</option>
                    <option value="MBA">MBA</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                </select>
            </div>
            <div className="flex flex-col w-40">
                <label htmlFor="today-date">Today date</label>
                <input value={today} readOnly id="today-date" type="date" className="font-sans p-2 border bg-gray-500 h-10 rounded-t" />
            </div>
            <div className="flex gap-2">
                <button type="button" onClick={reset} className="btn bg-green-700">Reset</button>
                <button type="button" onClick={savedata} className="btn bg-blue-500">Save attendance</button>
            </div>
        </div>
    );
};

export default Form;
