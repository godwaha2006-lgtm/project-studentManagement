import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse } from "../../store/Slice";

const CoursesData = () => {

    const dispatch = useDispatch()
    const data = useSelector((store) => store.user.coursesdata)
    const deleted = (courseId) => { dispatch(deleteCourse(courseId)) };
    return (
        <div className="flex-2 h-full  overflow-auto scrollbar-none capitalize select-none">
            <div className="sticky top-0 flex justify-between border rounded-t p-1 bg-slate-300 ">
                <div className=" w-10 ">#</div>
                <div className=" flex-1 text-center">code</div>
                <div className=" flex-3 text-center">Course name</div>
                <div className=" flex-2  text-center  ">department</div>
                <div className=" flex-1  text-center  ">duration</div>
                <div className=" flex-4  text-center  ">description</div>
                <div className=" flex-1 text-center  ">status</div>
                <div className=" flex-1  text-center  ">actions</div>
            </div>
            <div className="items-center capitalize">

                {data.map((c, i) => {
                    return (
                        <div key={i} className="flex gap-7 justify-between border p-1 bg-slate-200 items-center capitalize">

                            <div className="w-10 font-mono truncate">{i+1}.</div>
                            <div className="flex-1 font-mono truncate">{c.course_code}</div>
                            <div className="flex-3 font-mono truncate">{c.course_name}</div>
                            <div className=" flex-2  text-start truncate  ">{c.department}</div>
                            <div className=" flex-1  text-center truncate  ">{c.duration}</div>
                            <div className=" flex-4  text-center truncate ">{c.description}</div>
                            <div className=" flex-1 text-center  truncate ">{c.status}</div>
                            <div className=" flex-1 flex text-center items-center justify-center gap-2 ">
                                <div onClick={() => deleted(c.id)} className="text-red-600 text-2xl cursor-pointer"><MdDelete /></div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
export default CoursesData