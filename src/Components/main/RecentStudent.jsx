import { useSelector } from "react-redux";
import Quicklink from "./Quicklink"

const RecentStudent = () => {
    const data = useSelector((store) => store.user.studentdata)


    return (
        <div className="h-full gap-3 flex min-h-0  p-2  ">
            <div className="flex-3 flex flex-col h-full rounded bg-white p-1 pb-2">
                <div className="py-2 font-semibold">Recent students</div>
                <div className="flex-3 h-full overflow-auto scrollbar-none">
                    <div className="flex justify-between sticky top-0  p-2  capitalize bg-gray-200 rounded-t">
                        <div className="flex-1" >#</div>
                        <div className="flex-3" >name</div>
                        <div className="flex-3" >roll No.</div>
                        <div className="flex-3" >course</div>
                        <div className="flex-3" >date</div>
                    </div>
                    <div className="overflow-auto flex-3">
                        {data.map((c, i) => {
                            return (
                                <div key={i} className="flex justify-between  p-2  capitalize bg-gray-100 outline-1">
                                    <div className="flex-1 truncate" >{i + 1}.</div>
                                    <div className="flex-3 truncate" >{c.name}</div>
                                    <div className="flex-3 truncate" >{c.rollno}</div>
                                    <div className="flex-3 truncate" >{c.course}</div>
                                    <div className="flex-3 truncate font-mono" >{c.date}</div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            <div className="flex-1">
                <Quicklink />
            </div>
        </div>
    )
}
export default RecentStudent

