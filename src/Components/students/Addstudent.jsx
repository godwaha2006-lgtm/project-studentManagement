import { useState } from "react";
import Input from "../../utils/Input.jsx";
import SelectInput from "../../utils/SelectInput.jsx";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { addStudent } from "../../store/Slice.jsx";
import { useDispatch } from "react-redux";
import Studentvalidation from "../../validation/Studentvalidation.jsx";

const initialState = () => ({
    id: crypto.randomUUID(),
    name: "",
    email: "",
    phone: "",
    rollno: "",
    course: "",
    DOB: "",
    year: "",
    gender: "",
    address: "",
    photo: "",
    status: "Active",
    obtained_marks: "",
    exam: "Internal",
    date: new Date().toLocaleDateString("en-IN"),
});

const Addstudents = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = useState(initialState);

    const save = () => {
        if (!Studentvalidation(state)) return;
        dispatch(addStudent(state));
        toast.success("New student added successfully");
        navigate("/students");
    };

    const cancel = () => navigate("/students");

    const handlePhoto = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        if (file.size > 2 * 1024 * 1024) {
            toast.error("Photo must be smaller than 2 MB");
            return;
        }
        setState((prev) => ({ ...prev, photo: URL.createObjectURL(file) }));
    };

    return (
        <div className="m-9 flex-1 scrollbar-none h-full overflow-auto select-none">
            <div className="mb-4 font-black text-xl capitalize">
                <div>Add new student</div>
                <Link to="/students" className="hover:text-blue-500 text-sm text-gray-500">Students</Link>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); save(); }}>
                <div className="capitalize grid grid-cols-3 gap-8 content-center">
                    <Input prev={state} setvalue={setState} value={state.name} title="name" placeholder="Enter full name" />
                    <Input prev={state} setvalue={setState} value={state.email} title="email" type="email" placeholder="Enter email address" />
                    <Input prev={state} setvalue={setState} value={state.phone} title="phone" placeholder="Enter phone number" />
                    <Input prev={state} setvalue={setState} value={state.rollno} title="rollno" placeholder="Enter roll number" />
                    <SelectInput prev={state} setvalue={setState} title="course" text1="BCA" text2="B.Tech" text3="MCA" text4="BBA" />
                    <Input prev={state} setvalue={setState} value={state.DOB} title="DOB" type="date" />
                    <SelectInput prev={state} setvalue={setState} title="year" text1="1st year" text2="2nd year" text3="3rd year" text4="4th year" />
                    <SelectInput prev={state} setvalue={setState} title="gender" text1="male" text2="female" text3="transgender" />
                    <SelectInput prev={state} setvalue={setState} title="exam" text1="Internal" text2="External" />
                </div>

                <div className="text-blue-800 mt-5">
                    <label htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        onChange={(e) => setState((prev) => ({ ...prev, address: e.target.value }))}
                        value={state.address}
                        placeholder="Enter address"
                        className="border border-black rounded outline-0 w-full min-h-20 p-2"
                    />
                </div>

                <div className="flex items-center mt-4">
                    <div className="p-2 border rounded bg-blue-500">
                        <label htmlFor="student-photo" className="cursor-pointer">
                            Profile photo <span className="font-mono">(max 2MB)</span>
                        </label>
                        <input id="student-photo" type="file" accept="image/*" className="file-input file-input-info bg-white" onChange={handlePhoto} />
                    </div>
                    <div className="flex-1 flex justify-end items-center gap-2.5">
                        <button type="button" onClick={cancel} className="btn bg-red-600">Cancel</button>
                        <button type="submit" className="btn bg-blue-600">Save student</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Addstudents;
