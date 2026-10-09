import toast from "react-hot-toast";
import { setUser } from "../store/Slice.jsx";

const Loginform = (login, dispatch) => {
    const name = login.name.trim();
    const password = login.password;
    const confirmPassword = login.confirmPassword;

    if (!name || !password || !confirmPassword) {
        toast.error("Please fill all fields");
        return false;
    }
    if (name.length < 3 || password.length < 5) {
        toast.error("Name must have 3+ characters and password 5+ characters");
        return false;
    }
    if (confirmPassword !== password) {
        toast.error("Passwords do not match");
        return false;
    }

    const user = {
        name,
        password,
        email: login.email || "",
        DOB: login.DOB || "",
        phone: login.phone || "",
        gender: login.gender || "",
        teacherId: login.teacherId || "",
        address: login.address || "",
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLogin", "true");
    dispatch(setUser(user));
    toast.success("Login successful");
    return true;
};

export default Loginform;
