import { Link } from "react-router-dom"
import { IoPersonAdd } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaBook } from "react-icons/fa";


const Quicklink = () => {
    const links = [
        { link: "/students/newstudent", icon: < IoPersonAdd />, title: "Add new student" },
        { link: "/teachers/newteacher", icon: < IoMdPerson />, title: "Add new teacher" },
        { link: "/courses/newcourses", icon: < FaBook />, title: "Add new course" },
        ]
    return (
        <div className="bg-white p-2 h-full rounded ">
            <div className="capitalize font-semibold text-lg">Quick Links</div>
            <div className=" p-2 flex flex-col gap-2 border mt-2">
                {
                    links.map((c, i) => {
                        return (
                            <Link key={i} to={c.link} className="flex justify-between outline-1 p-2 rounded items-center">
                                <div className="flex gap-4 items-center">
                                    <div className={`border p-1 bg-green-200 text-green-800 rounded`}>{c.icon}</div>
                                    <div>{c.title}</div>
                                </div>
                                <FaChevronRight />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Quicklink