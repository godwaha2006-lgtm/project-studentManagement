import { useSelector } from "react-redux"
import Filter from "./Filter.jsx"

const Table = ({ course, date, status }) => {
    const data = [{ key: "student" }, { key: "rollno" }, { key: "course" }, { key: "date" }, { key: "status" }, { key: "action" }]
    const studentData = useSelector((store) => store?.user?.studentdata)
    const display = Filter(studentData, course,status,date);
    

    return (
        <div className=" h-full flex flex-col shrink-0 p-3 min-h-0 ">
            <div className="flex border capitalize bg-gray-500">
                <div className=" w-10 h-fit p-2 text-center mr-4">#</div>
                {data.map((c, i) => { return <div key={i} className="flex-1 h-fit p-2 text-start">{c.key}</div> })}
            </div>
            <div className="border overflow-auto flex-1 scrollbar-none">
                {

                    display?.map((c, i) => {
                        return (
                            <div key={c.id} className="border flex items-center ">
                                <div className="w-10 text-center mr-4">{i + 1}.</div>
                                <div className="flex-1 text-start p-2 flex gap-2 items-center">
                                    <img src={c.photo} alt="" className="size-10 rounded-full" />
                                    <div className="truncate ">{c.name}</div>
                                </div>
                                <div className="flex-1 text-start p-2 font-sans">{c.rollno}</div>
                                <div className="flex-1 text-start p-2 font-sans">{c.course}</div>
                                <div className="flex-1 text-start p-2 font-sans">{c.date}</div>
                                <div className={` flex-1 p-2  `}>
                                    <div className={`rounded capitalize border w-20 text-center  ${c.status === "present" && "text-green-800 bg-green-300 font-black "} ${c.status === "absent" && "text-red-800 bg-red-300"} ${c.status === "leave" && "text-orange-800 bg-orange-300"}`}>{c.status}</div>
                                </div>
                                <div className="flex-1 text-start p-2 flex items-center l">
                                    <div className="w-fit border px-4 rounded py-1 ">✏️ edit </div>
                                </div>
                            </div>
                        )
                    })
                }</div>

        </div>
    )
}
export default Table