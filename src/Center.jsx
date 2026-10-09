import Navbar from "./Components/main/Navbar.jsx";
import Sidebar from "./Components/main/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import dataofstudents from "./Components/students/Data.jsx";
import dataofteachers from "./Components/teachers/Data.jsx";
import dataofcourses from "./Components/courses/Data.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { setcoursesdata, setstudentdata, setteachersdata } from "./store/Slice.jsx";

const readArray = (key, fallback) => {
    try {
        const stored = JSON.parse(localStorage.getItem(key));
        return Array.isArray(stored) ? stored : fallback;
    } catch {
        return fallback;
    }
};

const Center = () => {
    const dispatch = useDispatch();
    const ismenu = useSelector((store) => store.user.menu);
    const students = useSelector((store) => store.user.studentdata);
    const teachers = useSelector((store) => store.user.teachersdata);
    const courses = useSelector((store) => store.user.coursesdata);
    const initialized = useRef(false);

    useEffect(() => {
        dispatch(setstudentdata(readArray("students", dataofstudents)));
        dispatch(setteachersdata(readArray("teachers", dataofteachers)));
        dispatch(setcoursesdata(readArray("courses", dataofcourses)));
        initialized.current = true;
    }, [dispatch]);

    useEffect(() => {
        if (!initialized.current) return;
        localStorage.setItem("students", JSON.stringify(students));
        localStorage.setItem("teachers", JSON.stringify(teachers));
        localStorage.setItem("courses", JSON.stringify(courses));
    }, [students, teachers, courses]);

    return (
        <div className="fixed font-serif h-screen w-screen bg-gray-400 text-black flex min-h-0">
            {ismenu && (
                <div className="flex-1 fixed h-full z-40 w-72">
                    <Sidebar />
                </div>
            )}
            <div className="flex-1 flex flex-col h-full bg-slate-300 min-w-0">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Center;
