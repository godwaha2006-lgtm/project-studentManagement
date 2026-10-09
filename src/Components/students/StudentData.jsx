import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "../../store/Slice.jsx";
import Filter from "../../utils/Filter.jsx";

const StudentData = ({ course = "All", search = "" }) => {
    const dispatch = useDispatch();
    const students = useSelector((store) => store.user.studentdata);
    const data = Filter(students, { course, search });

    return (
        <div className="flex-1 h-full overflow-auto scrollbar-none">
            <div className="sticky top-0 flex justify-between border rounded-t p-1 bg-slate-300 z-10">
                <div className="flex-1">#</div>
                <div className="flex-3">Student</div>
                <div className="flex-3">Roll no</div>
                <div className="flex-3">Course</div>
                <div className="flex-3">Phone</div>
                <div className="flex-6">Email</div>
                <div className="flex-3">Status</div>
                <div className="flex-2">Action</div>
            </div>

            {data.length === 0 ? (
                <div className="p-6 text-center text-gray-500">No students found.</div>
            ) : data.map((student, index) => (
                <div key={student.id} className="flex justify-between border p-1 bg-slate-200 items-center">
                    <div className="truncate flex-1">{index + 1}.</div>
                    <div className="flex-3 flex gap-2 items-center min-w-0">
                        <img src={student.photo || "/student.jpg"} alt={student.name} className="border size-10 rounded-full object-cover" />
                        <div className="truncate">{student.name}</div>
                    </div>
                    <div className="truncate flex-3 font-mono">{student.rollno}</div>
                    <div className="truncate flex-3">{student.course}</div>
                    <div className="truncate flex-3 font-mono">{student.phone}</div>
                    <div className="truncate flex-6">{student.email}</div>
                    <div className="truncate flex-3">{student.status}</div>
                    <div className="flex-2 flex gap-2 items-center">
                        <button type="button" onClick={() => dispatch(deleteStudent(student.id))} className="text-red-600 text-2xl cursor-pointer" aria-label={`Delete ${student.name}`}>
                            <MdDelete />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StudentData;
