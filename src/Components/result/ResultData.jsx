import { useSelector } from "react-redux";

const ResultData = () => {
    const data = useSelector((store) => store.user.studentdata);

    return (
        <div className="flex-1 h-full overflow-auto scrollbar-none select-none">
            <div className="sticky top-0 z-10 flex justify-between border rounded-t p-1 bg-slate-300 font-black">
                <div className="flex-1">#</div>
                <div className="flex-1 text-center">Photo</div>
                <div className="flex-3 text-center">Student</div>
                <div className="flex-3 text-center">Roll no</div>
                <div className="flex-3 text-center">Course</div>
                <div className="flex-3 text-center">Year</div>
                <div className="flex-3 text-center">Total</div>
                <div className="flex-3 text-center">Obtained</div>
                <div className="flex-3 text-center">Percentage</div>
            </div>

            {data.map((student, index) => {
                const marks = Number(student.obtained_marks);
                const hasMarks = Number.isFinite(marks) && student.obtained_marks !== "" && student.obtained_marks != null;
                const percentage = hasMarks ? `${((marks / 500) * 100).toFixed(2)}%` : "---";

                return (
                    <div key={student.id} className="flex justify-between border p-1 bg-slate-200 items-center">
                        <div className="flex-1">{index + 1}.</div>
                        <div className="flex-1 flex justify-center"><img src={student.photo || "/student.jpg"} alt={student.name} className="size-8 rounded-full object-cover" /></div>
                        <div className="flex-3 text-center font-mono truncate">{student.name}</div>
                        <div className="flex-3 text-center font-mono">{student.rollno}</div>
                        <div className="flex-3 text-center">{student.course}</div>
                        <div className="flex-3 text-center">{student.year || student.sem ? `${student.year || student.sem} ${student.year ? "" : "year"}` : "---"}</div>
                        <div className="flex-3 text-center font-mono">500</div>
                        <div className="flex-3 text-center font-mono">{hasMarks ? marks : "---"}</div>
                        <div className="flex-3 text-center font-mono">{percentage}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default ResultData;
