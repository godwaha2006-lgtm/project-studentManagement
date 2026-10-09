import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { validate } from "./Validation.jsx";
import { setUser } from "../../store/Slice.jsx";

const emptyForm = {
    name: "", email: "", DOB: "", phone: "", gender: "", teacherId: "", address: "",
    newpassword: "", currentPassword: "", confirmPassword: "",
};

const Addprofile = () => {
    const dispatch = useDispatch();
    const userdata = useSelector((store) => store.user.user) || {};
    const [form, setForm] = useState(emptyForm);
    const [changePassword, setChangePassword] = useState(false);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        setForm({
            ...emptyForm,
            name: userdata.name || "",
            email: userdata.email || "",
            DOB: userdata.DOB || "",
            phone: userdata.phone || "",
            gender: userdata.gender || "",
            teacherId: userdata.teacherId || "",
            address: userdata.address || "",
        });
    }, [userdata]);

    const cancel = () => {
        setEdit(false);
        setChangePassword(false);
        setForm((prev) => ({
            ...prev,
            name: userdata.name || "",
            email: userdata.email || "",
            DOB: userdata.DOB || "",
            phone: userdata.phone || "",
            gender: userdata.gender || "",
            teacherId: userdata.teacherId || "",
            address: userdata.address || "",
            newpassword: "",
            currentPassword: "",
            confirmPassword: "",
        }));
    };

    const save = () => {
        if (!validate(form, changePassword, userdata)) return;

        const updatedUser = {
            ...userdata,
            name: form.name.trim(),
            email: form.email.trim(),
            DOB: form.DOB,
            phone: form.phone.trim(),
            gender: form.gender,
            teacherId: form.teacherId.trim(),
            address: form.address.trim(),
            ...(changePassword ? { password: form.newpassword } : {}),
        };

        localStorage.setItem("user", JSON.stringify(updatedUser));
        dispatch(setUser(updatedUser));
        toast.success("Profile updated successfully");
        setEdit(false);
        setChangePassword(false);
    };

    const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

    return (
        <div className="p-2 h-full flex flex-col shrink-0">
            <div className="flex justify-between shrink-0 my-5 p-4">
                <div className="text-xl">Personal Information</div>
                {!edit ? (
                    <button type="button" onClick={() => setEdit(true)} className="btn bg-blue-600 w-40">Update profile</button>
                ) : (
                    <div className="flex gap-3">
                        <button type="button" onClick={save} className="btn bg-blue-600 w-30">Save</button>
                        <button type="button" onClick={cancel} className="btn bg-red-600 w-30">Cancel</button>
                    </div>
                )}
            </div>

            <div className="overflow-auto scrollbar-none flex-1 min-h-0 p-4">
                <div className="pb-10">
                    <div className="grid grid-cols-2 gap-5">
                        {[
                            ["name", "Name", "text"], ["email", "Email", "email"], ["DOB", "D.O.B", "date"],
                            ["phone", "Phone number", "tel"], ["gender", "Gender", "text"], ["teacherId", "Teacher ID", "text"],
                        ].map(([key, label, type]) => (
                            <div key={key} className="flex flex-col shrink-0">
                                <label htmlFor={`profile-${key}`}>{label}</label>
                                <input id={`profile-${key}`} value={form[key]} onChange={(e) => update(key, e.target.value)} disabled={!edit} type={type} className="outline-none input w-full" />
                            </div>
                        ))}
                    </div>

                    <div className="w-full my-5 flex shrink-0 flex-col">
                        <label htmlFor="profile-address">Address</label>
                        <input id="profile-address" value={form.address} onChange={(e) => update("address", e.target.value)} disabled={!edit} type="text" className="input w-full" />
                    </div>

                    <div className="uppercase font-black flex shrink-0 gap-3 mt-5">
                        <label htmlFor="change-password">Change password</label>
                        <input id="change-password" checked={changePassword} disabled={!edit} onChange={(e) => setChangePassword(e.target.checked)} type="checkbox" className="cursor-pointer" />
                    </div>

                    {changePassword && (
                        <div className="mt-5 grid grid-cols-2 gap-5">
                            <div className="flex flex-col">
                                <label htmlFor="current-password">Current Password</label>
                                <input id="current-password" value={form.currentPassword} onChange={(e) => update("currentPassword", e.target.value)} disabled={!edit} type="password" className="input w-full outline-none" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="new-password">New Password</label>
                                <input id="new-password" value={form.newpassword} onChange={(e) => update("newpassword", e.target.value)} disabled={!edit} type="password" className="input w-full outline-none" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="confirm-password">Confirm New Password</label>
                                <input id="confirm-password" value={form.confirmPassword} onChange={(e) => update("confirmPassword", e.target.value)} disabled={!edit} type="password" className="input w-full outline-none" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Addprofile;
