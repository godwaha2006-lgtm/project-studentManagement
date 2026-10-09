const Form = ({ set, value }) => {

    return (
        <div className="border-t p-3 py-5 capitalize flex gap-5 justify-end">
            <div className="flex flex-col capitalize">
                <label htmlFor="1" className="cursor-pointer w-fit">Course</label>
                <select onChange={(e) => { set({ ...value, course: e.target.value }) }} id="1" className=" cursor-pointer border w-30 h-10 p-2 rounded-t bg-gray-500">
                    <option value="All">All courses</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="BBA">BBA</option>
                    <option value="MBA">MBA</option>
                    <option value="BCA">BCA</option>
                </select>
            </div>
            {/* <div className="flex flex-col w-40 ">
                <label htmlFor="2" className="cursor-pointer w-fit">Date</label>
                <input value={value.date} onChange={(e) => { set({ ...value, date: e.target.value }) }} id="2" type="date" className="font-sans cursor-pointer p-2 border bg-gray-500 h-10 rounded-t" />
            </div> */}
            <div className="flex flex-col capitalize">
                <label htmlFor="3" className="cursor-pointer  w-fit">Status</label>
                <select onChange={(e) => { set({ ...value, status: e.target.value }) }} id="3" className="cursor-pointer border w-30 h-10 p-2 rounded-t bg-gray-500">
                    <option value="All">All status</option>
                    <option value="present">Present</option>
                    <option value="absent">absent</option>
                    <option value="leave">leave</option>
                </select>
            </div>

        </div>
    )
}
export default Form