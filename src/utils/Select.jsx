const Select = ({ set, label1, value1, value2, value3, value4, value5 }) => {
    return (
        <div className="text-black  flex flex-col  w-40">
            <select onChange={(e) => set(e.target.value)} className="w-full h-fit capitalize border  py-2 rounded-t bg-white ">
                {value1 && <option value={value1}>{label1}</option>}
                {value2 && <option value={value2}>{value2}</option>}
                {value3 && <option value={value3}>{value3}</option>}
                {value4 && <option value={value4}>{value4}</option>}
                {value5 && <option value={value5}>{value5}</option>}
            </select>
        </div >
    )
}
export default Select