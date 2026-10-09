import toast from "react-hot-toast";

const validate = (form, changePassword, userdata = {}) => {
    const required = ["name", "email", "DOB", "gender", "address", "phone", "teacherId"];
    if (required.some((key) => !String(form?.[key] ?? "").trim())) {
        toast.error("Please fill all profile fields");
        return false;
    }
    if (form.name.trim().length < 3) {
        toast.error("Name must contain at least 3 characters");
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        toast.error("Enter a valid email");
        return false;
    }
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
        toast.error("Enter a valid 10-digit phone number");
        return false;
    }
    if (changePassword) {
        if (form.currentPassword !== userdata.password) {
            toast.error("Current password is incorrect");
            return false;
        }
        if (form.newpassword.length < 5) {
            toast.error("New password must contain at least 5 characters");
            return false;
        }
        if (form.newpassword !== form.confirmPassword) {
            toast.error("New password and confirmation do not match");
            return false;
        }
    }
    return true;
};

export { validate };
