import Input from "../../utils/Input.jsx";
import SelectInput from "../../utils/SelectInput.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTeacher } from "../../store/Slice.jsx";

const initialState = () => ({
    id: crypto.randomUUID(),
    subject: "",
    qualification: "",
    name: "",
    email: "",
    phone: "",
    teacher_Id: "",
    DOB: "",
    department: "",
    gender: "",
    Date_of_joining: "",
    address: "",
    password: "",
    confirm_password: "",
    photo: "",
});

const AddTeachers = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = useState(initialState);

    const save = () => {
        const required = ["name", "email", "phone", "teacher_Id", "DOB", "department", "qualification", "subject", "gender", "Date_of_joining", "address", "password", "confirm_password"];
        if (required.some((key) => !String(state[key] ?? "").trim())) {
            toast.error("Please fill all required fields");
            return;
        }
        if (!/^[6-9]\d{9}$/.test(state.phone)) {
            toast.error("Enter a valid 10-digit phone number");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
            toast.error("Enter a valid email");
            return;
        }
        if (state.password.length < 5) {
            toast.error("Password must contain at least 5 characters");
            return;
        }
        if (state.password !== state.confirm_password) {
            toast.error("Passwords do not match");
            return;
        }
        if (!state.photo) {
            toast.error("Upload teacher photo");
            return;
        }

        dispatch(addTeacher(state));
        toast.success("New teacher added successfully");
        navigate("/teachers");
    };

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
                <div>Add new teacher</div>
                <Link to="/teachers" className="hover:text-blue-500 text-sm text-gray-500">Teachers</Link>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); save(); }}>
                <div className="capitalize grid grid-cols-3 gap-8 content-center">
                    <Input value={state.name} setvalue={setState} prev={state} title="name" placeholder="Enter name" />
                    <Input value={state.email} setvalue={setState} prev={state} title="email" type="email" placeholder="Enter email" />
                    <Input value={state.phone} setvalue={setState} prev={state} title="phone" placeholder="Enter phone number" />
                    <Input value={state.teacher_Id} setvalue={setState} prev={state} title="teacher_Id" placeholder="Enter teacher ID" />
                    <Input value={state.DOB} setvalue={setState} prev={state} title="DOB" type="date" />
                    <Input value={state.department} setvalue={setState} prev={state} title="department" placeholder="Enter department" />
                    <Input value={state.qualification} setvalue={setState} prev={state} title="qualification" placeholder="Enter qualification" />
                    <Input value={state.subject} setvalue={setState} prev={state} title="subject" placeholder="Enter subject" />
                    <SelectInput prev={state} setvalue={setState} title="gender" text1="male" text2="female" text3="transgender" />
                    <Input value={state.Date_of_joining} setvalue={setState} prev={state} title="Date_of_joining" type="date" />
                </div>

                <div className="text-blue-800 mt-5">
                    <label htmlFor="teacher-address">Address</label>
                    <textarea id="teacher-address" onChange={(e) => setState((prev) => ({ ...prev, address: e.target.value }))} value={state.address} placeholder="Enter address" className="border border-black rounded outline-0 w-full min-h-20 p-2" />
                </div>

                <div className="flex gap-10 my-3 capitalize">
                    <Input value={state.password} setvalue={setState} prev={state} title="password" type="password" placeholder="Enter password" />
                    <Input value={state.confirm_password} setvalue={setState} prev={state} title="confirm_password" type="password" placeholder="Confirm password" />
                </div>

                <div className="flex items-center">
                    <div className="p-2 border rounded bg-blue-500 mt-4">
                        <label htmlFor="teacher-photo" className="cursor-pointer">Profile photo <span className="font-mono">(max 2MB)</span></label>
                        <input onChange={handlePhoto} type="file" id="teacher-photo" accept="image/*" className="file-input file-input-info bg-white" />
                    </div>
                    <div className="flex-1 flex justify-end items-center gap-2.5">
                        <button type="button" onClick={() => navigate("/teachers")} className="btn bg-red-600">Cancel</button>
                        <button type="submit" className="btn bg-blue-600">Save teacher</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddTeachers;
