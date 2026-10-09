import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setstudentdata } from "../../store/Slice.jsx";

const AddResult = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((store) => store.user.studentdata);
    const [state, setState] = useState(data);
    const [search, setSearch] = useState("");
    const [course, setCourse] = useState("All");
    const [year, setYear] = useState("All");

    useEffect(() => setState(data), [data]);

    const filtered = useMemo(() => {
        const query = search.trim().toLowerCase();
        return state.filter((student) => {
            const searchMatch = !query || [student.name, student.rollno].some((v) => String(v || "").toLowerCase().includes(query));
            const courseMatch = course === "All" || student.course === course;
            const yearMatch = year === "All" || student.year === year || student.sem === year.replace(" year", "");
            return searchMatch && courseMatch && yearMatch;
        });
    }, [state, search, course, year]);

    const inputHandler = (id, field, value) => {
        setState((current) => current.map((student) => student.id === id ? { ...student, [field]: value } : student));
    };

    const save = () => {
        const invalid = state.some((student) => {
            if (student.obtained_marks === "" || student.obtained_marks == null) return false;
            const marks = Number(student.obtained_marks);
            return Number.isNaN(marks) || marks < 0 || marks > 500;
        });
        if (invalid) {
            toast.error("Obtained marks must be between 0 and 500");
            return;
        }
        dispatch(setstudentdata(state));
        toast.success("Results updated successfully");
        navigate("/results");
    };

    return (
        <div className="h-full flex-1 min-h-0 bg-slate-300 px-2 flex flex-col select-none">
            <Link to="/results" className="py-5 text-lg">Results</Link>
            <div className="h-full min-h-0 flex flex-col bg-white rounded-t p-2">
                <div className="flex flex-wrap items-end gap-4 capitalize font-black mb-4">
                    <div className="flex flex-col flex-1 min-w-60">
                        <label htmlFor="search-result">Search student</label>
                        <input id="search-result" value={search} onChange={(e) => setSearch(e.target.value)} type="search" className="border p-2 rounded bg-white w-full" placeholder="Search by name or roll no" />
                    </div>
                    <label className="flex flex-col gap-1">Course
                        <select value={course} onChange={(e) => setCourse(e.target.value)} className="border p-2 rounded bg-white">
                            <option>All</option><option>BBA</option><option>BCA</option><option>B.Tech</option><option>MCA</option>
                        </select>
                    </label>
                    {/* <label className="flex flex-col gap-1">Year
                        <select value={year} onChange={(e) => setYear(e.target.value)} className="border p-2 rounded bg-white">
                            <option>All</option><option>1st year</option><option>2nd year</option><option>3rd year</option><option>4th year</option>
                        </select>
                    </label> */}
                    <button type="button" onClick={() => { setSearch(""); setCourse("All"); setYear("All"); }} className="btn bg-red-500">Reset</button>
                    <button type="button" onClick={save} className="btn bg-blue-500">Save</button>
                </div>

                <div className="h-full min-h-0 overflow-auto scrollbar-none">
                    <div className="sticky top-0 z-10 flex justify-between border rounded-t p-1 bg-slate-300 font-black">
                        <div className="flex-1">#</div><div className="flex-2 text-center">Roll no</div><div className="flex-4">Student name</div><div className="flex-2 text-center">Total</div><div className="flex-4 text-center">Obtained</div><div className="flex-4 text-center">Remarks</div>
                    </div>
                    {filtered.map((student, index) => (
                        <div key={student.id} className="flex justify-between border p-1 py-3 bg-slate-200 items-center">
                            <div className="flex-1">{index + 1}.</div>
                            <div className="flex-2 text-center">{student.rollno}</div>
                            <div className="flex-4 flex gap-2 items-center min-w-0"><img src={student.photo || "/student.jpg"} alt={student.name} className="size-8 rounded-full object-cover" /><span className="truncate">{student.name}</span></div>
                            <div className="flex-2 text-center font-mono">500</div>
                            <div className="flex-4 text-center font-sans"><input value={student.obtained_marks ?? ""} onChange={(e) => inputHandler(student.id, "obtained_marks", e.target.value)} type="number" min="0" max="500" className="w-40 rounded p-1 bg-white" placeholder="Obtained marks" /></div>
                            <div className="flex-4 text-center"><input value={student.remark ?? ""} onChange={(e) => inputHandler(student.id, "remark", e.target.value)} type="text" className="w-40 rounded p-1 bg-white" placeholder="Optional" /></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddResult;
