import { Link, useNavigate } from "react-router-dom";
import Input from "../../utils/Input.jsx";
import SelectInput from "../../utils/SelectInput.jsx";
import toast from "react-hot-toast";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCourse } from "../../store/Slice.jsx";

const createInitialState = () => ({
    id: crypto.randomUUID(),
    course_name: "",
    course_code: "",
    department: "",
    duration: "",
    description: "",
    status: "active",
});

const NewCourse = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [state, setState] = useState(createInitialState);

    const reset = () => setState(createInitialState());

    const save = () => {
        const required = ["course_name", "course_code", "department", "duration", "description"];
        if (required.some((key) => !state[key].trim())) {
            toast.error("Please fill all course fields");
            return;
        }
        dispatch(addCourse(state));
        toast.success("New course added successfully");
        navigate("/courses");
    };

    return (
        <div className="m-9 flex-1 scrollbar-none h-full overflow-auto">
            <div className="mb-4 font-black text-xl capitalize">
                <div>Add new course</div>
                <Link to="/courses" className="hover:text-blue-500 text-sm text-gray-500">Courses</Link>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); save(); }}>
                <div className="capitalize grid grid-cols-2 gap-8 content-center">
                    <Input value={state.course_code} setvalue={setState} prev={state} title="course_code" placeholder="Enter course code" />
                    <Input value={state.course_name} setvalue={setState} prev={state} title="course_name" placeholder="Enter course name" />
                    <SelectInput prev={state} setvalue={setState} title="department" text1="Computer Applications" text2="Computer Science" text3="Information Technology" text4="Management" text5="Science" />
                    <SelectInput prev={state} setvalue={setState} title="duration" text1="2 Years" text2="3 Years" text3="4 Years" />
                  </div>

                <div className="text-blue-800 mt-5">
                    <label htmlFor="course-description">Description</label>
                    <textarea id="course-description" value={state.description} onChange={(e) => setState((prev) => ({ ...prev, description: e.target.value }))} placeholder="Enter course description" className="border border-black rounded outline-0 w-full min-h-20 p-2" />
                </div>

                <div className="flex justify-end items-center gap-2.5 mt-4">
                    <button type="button" onClick={reset} className="btn bg-red-600">Reset</button>
                    <button type="submit" className="btn bg-blue-600">Save course</button>
                </div>
            </form>
        </div>
    );
};

export default NewCourse;
