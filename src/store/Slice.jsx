import { createSlice } from "@reduxjs/toolkit";

const getStoredUser = () => {
    try {
        return JSON.parse(localStorage.getItem("user")) || {};
    } catch {
        return {};
    }
};

const initialState = {
    login: localStorage.getItem("isLogin") === "true",
    user: getStoredUser(),
    studentdata: [],
    menu: false,
    teachersdata: [],
    coursesdata: [],
};

const Slice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.login = Boolean(action.payload);
        },
        setstudentdata: (state, action) => {
            state.studentdata = Array.isArray(action.payload) ? action.payload : [];
        },
        addStudent: (state, action) => {
            state.studentdata.push(action.payload);
        },
        deleteStudent: (state, action) => {
            state.studentdata = state.studentdata.filter(
                (student) => student.id !== action.payload
            );
        },
        setteachersdata: (state, action) => {
            state.teachersdata = Array.isArray(action.payload) ? action.payload : [];
        },
        addTeacher: (state, action) => {
            state.teachersdata.push(action.payload);
        },
        deleteTeacher: (state, action) => {
            state.teachersdata = state.teachersdata.filter(
                (teacher) => teacher.id !== action.payload
            );
        },
        setcoursesdata: (state, action) => {
            state.coursesdata = Array.isArray(action.payload) ? action.payload : [];
        },
        addCourse: (state, action) => {
            state.coursesdata.push(action.payload);
        },
        deleteCourse: (state, action) => {
            state.coursesdata = state.coursesdata.filter(
                (course) => course.id !== action.payload
            );
        },
        setmenu: (state) => {
            state.menu = !state.menu;
        },
        setUser: (state, action) => {
            state.user = action.payload || {};
        },
    },
});

export default Slice.reducer;
export const {
    setUser,
    setUserLogin,
    setstudentdata,
    addStudent,
    deleteStudent,
    setteachersdata,
    addTeacher,
    deleteTeacher,
    setcoursesdata,
    addCourse,
    deleteCourse,
    setmenu,
} = Slice.actions;
