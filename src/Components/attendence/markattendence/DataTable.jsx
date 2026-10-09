import FilterMarkAttendence from "./FilterMarkAttendence.jsx";

const DataTable = ({ course, set, value }) => {
    const display = FilterMarkAttendence(value, course);

    const change = (studentId, attendanceToday) => {
        set((current) => current.map((student) => student.id === studentId ? { ...student, attendanceToday } : student));
    };

    return (
        <div className="h-full flex flex-col shrink-0 p-3 px-20 min-h-0">
            <div className="flex border capitalize bg-gray-500">
                <div className="w-10 h-fit p-2 text-center mr-4">#</div>
                <div className="flex-1 h-fit p-2 font-black">Roll no</div>
                <div className="flex-1 h-fit p-2 font-black">Student name</div>
                <div className="flex-1 h-fit p-2 font-black">Course</div>
                <div className="flex-2 h-fit p-2 font-black">Status</div>
            </div>
            <div className="border overflow-auto flex-1 scrollbar-none">
                {display.map((student, index) => (
                    <div key={student.id} className="border flex items-center">
                        <div className="w-10 text-center mr-4">{index + 1}.</div>
                        <div className="flex-1 text-start p-2">{student.rollno}</div>
                        <div className="flex-1 text-start p-2 flex gap-2 items-center"><img src={student.photo || "/student.jpg"} alt={student.name} className="size-10 rounded-full object-cover" /><div className="truncate">{student.name}</div></div>
                        <div className="flex-1 text-start p-2">{student.course}</div>
                        <div className="flex-2 p-2 shrink-0 flex gap-4 capitalize">
                            {["present", "absent", "leave"].map((status) => (
                                <label key={status} className="flex items-center gap-1 font-black cursor-pointer">
                                    <input checked={student.attendanceToday === status} onChange={() => change(student.id, status)} name={`attendance-${student.id}`} type="radio" />
                                    <span className={status === "present" ? "text-green-600" : status === "absent" ? "text-red-600" : "text-orange-800"}>{status}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataTable;
