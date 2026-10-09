import { IoMdHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoNewspaperSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";


const details = [
    { link: "/", icon: <IoMdHome className="size-6" />, text: "dashboard" },
    { link: "/students", icon: <FaUserFriends className="size-6" />, text: "students" },
    { link: "/teachers", icon: <IoPerson className="size-6" />, text: "teachers" },
    { link: "/courses", icon: <IoBookSharp className="size-6" />, text: "courses" },
    { link: "/attendence", icon: <SlCalender className="size-6" />, text: "attendence" },
    { link: "/results", icon: <IoNewspaperSharp className="size-6" />, text: "Results" },
    { link: "/", icon: <FiLogOut className="size-6" />, text: "logOut" },

]
export default details