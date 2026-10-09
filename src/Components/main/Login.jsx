import { useState } from "react";
import Loginform from "../../utils/Loginform.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../store/Slice.jsx";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, setLogin] = useState({ name: "", password: "", confirmPassword: "" });

    const submit = () => {
        if (Loginform(login, dispatch)) {
            dispatch(setUserLogin(true));
            navigate("/", { replace: true });
        }
    };

    return (
        <div className="fixed flex flex-col justify-center items-center bg-black text-blue-400 font-serif h-screen w-screen overflow-auto scrollbar-none">
            <div className="text-2xl text-blue-500 font-black mb-4">Student Management System</div>
            <form className="flex flex-col gap-3 w-100" onSubmit={(e) => { e.preventDefault(); submit(); }}>
                <div className="text-lg flex flex-col gap-1">
                    <label htmlFor="login-name">Name</label>
                    <input id="login-name" value={login.name} onChange={(e) => setLogin({ ...login, name: e.target.value })} type="text" placeholder="Enter your name" className="input w-full" autoComplete="username" />
                </div>
                <div className="text-lg flex flex-col gap-1">
                    <label htmlFor="login-password">Password</label>
                    <input id="login-password" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} type="password" placeholder="Enter password" className="input w-full" autoComplete="new-password" />
                </div>
                <div className="text-lg flex flex-col gap-1">
                    <label htmlFor="login-confirm">Confirm password</label>
                    <input id="login-confirm" value={login.confirmPassword} onChange={(e) => setLogin({ ...login, confirmPassword: e.target.value })} type="password" placeholder="Confirm password" className="input w-full" autoComplete="new-password" />
                </div>
                <button type="submit" className="mt-2 btn bg-blue-600 text-lg">Create account / Login</button>
            </form>
        </div>
    );
};

export default Login;
