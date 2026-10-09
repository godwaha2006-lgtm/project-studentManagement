import { useSelector } from "react-redux";
import Form from "./Form.jsx";
import Table from "./Table.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
const Attendence = () => {
    const data = useSelector(store => store.user.studentdata)
    const [filter, setFilter] = useState({ course: "All", status: "All", date: "" });

    return (
        <div className="h-full flex flex-col min-h-0">
            <div className="flex shrink-0 justify-between w-full h-15 items-center px-5">
                <div>Attendance</div>
                <Link to={"/attendence/markattendence"} className="btn bg-blue-600">➕ Mark Attendance</Link >
            </div>

            <Form set={setFilter} value={filter} />

            <div className="flex-1 min-h-0">
                <Table course={filter.course} status={filter.status} date={filter.date} />
            </div>
        </div>
    );
}
export default Attendence