

const Cards = ({ icon, title, total, info, color }) => {
    return (
        <div className="flex gap-4 items-center capitalize">
            <div>{icon}</div>
            <div className="flex-1 pl-2 flex flex-col gap-1">
                <div className="text-black">{title} <span className="font-mono ">({total})</span></div>
                <div className=" lowercase text-gray-700">{info}</div>
            </div>
        </div>
    )
}
export default Cards