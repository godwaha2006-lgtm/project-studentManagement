import { MdDelete } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import { deleteTeacher } from "../../store/Slice";

const TeachersData = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.user.teachersdata)
    const deleted = (teacherId) => { dispatch(deleteTeacher(teacherId)); };
    return (
        <div className="flex-2 h-full  overflow-auto scrollbar-none capitalize">
            <div className="sticky top-0 flex justify-between border rounded-t p-1 bg-slate-300 ">
                <div className=" flex-1 ">#</div>
                <div className=" flex-1 ">Photo</div>
                <div className=" flex-4  text-center  ">name</div>
                <div className=" flex-4  text-center  ">Teacher Id</div>
                <div className=" flex-2  text-center  ">subject</div>
                <div className=" flex-2 text-center  ">qualification</div>
                <div className=" flex-4  text-center  ">phone</div>
                <div className=" flex-4  text-center  ">email</div>
                <div className=" flex-2 text-center  ">actions</div>
            </div>
            <div className="items-center">

                {data.map((c, i) => {
                    return (
                        <div key={i} className="flex justify-between border p-1 bg-slate-200 items-center">
                            <div className="flex-1">{i+1}.</div>
                            <div className="flex-1">
                                <img src={c.photo} alt="student" className=" border size-10  rounded-full" />
                            </div>
                            <div className="truncate flex-4  text-center  font-mono">{c.name}</div>
                            <div className="truncate flex-4  text-center  ">{c.teacher_Id}</div>
                            <div className="truncate flex-2  text-center  ">{c.subject}</div>
                            <div className="truncate flex-2 text-center  ">{c.qualification}</div>
                            <div className="truncate flex-4  text-center  font-mono ">{c.phone}</div>
                            <div className="truncate flex-4  text-center  ">{c.email}</div>
                            <div className="truncate flex-2 flex gap-2 justify-center">
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
export default TeachersData
