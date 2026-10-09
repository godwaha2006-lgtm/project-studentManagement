import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Center from "./Center.jsx";
import Dashboard from "./Components/main/Dashboard.jsx";
import Login from "./Components/main/Login.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Students from "./Components/students/Students.jsx";
import Addstudent from "./Components/students/Addstudent.jsx";
import Teachers from "./Components/teachers/Teachers.jsx";
import Addteacher from "./Components/teachers/AddTeachers.jsx";
import Courses from "./Components/courses/Courses.jsx";
import NewCourse from "./Components/courses/NewCourse.jsx";
import Attendence from "./Components/attendence/Attendence.jsx";
import MarkAttendence from "./Components/attendence/MarkAttendence.jsx";
import Result from "./Components/result/Result.jsx";
import ResultData from "./Components/result/ResultData.jsx";
import AddResult from "./Components/result/AddResult.jsx";
import PageNotfund from "./utils/PageNotfund.jsx";
import "./index.css";

const App = () => {
    const login = useSelector((store) => store.user.login);

    return (
        <BrowserRouter>
            <Toaster position="top-right" />
            {login ? (
                <Routes>
                    <Route path="/" element={<Center />}>
                        <Route index element={<Dashboard />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="students" element={<Students />} />
                        <Route path="students/newstudent" element={<Addstudent />} />
                        <Route path="teachers" element={<Teachers />} />
                        <Route path="teachers/newteacher" element={<Addteacher />} />
                        <Route path="courses" element={<Courses />} />
                        <Route path="courses/newcourses" element={<NewCourse />} />
                        <Route path="attendence" element={<Attendence />} />
                        <Route path="attendence/markattendence" element={<MarkAttendence />} />
                        <Route path="results" element={<Result />}>
                            <Route index element={<ResultData />} />
                            <Route path="addresult" element={<AddResult />} />
                        </Route>
                        <Route path="*" element={<PageNotfund />} />
                    </Route>
                </Routes>
            ) : (
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            )}
        </BrowserRouter>
    );
};

export default App;
