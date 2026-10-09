import { Link } from "react-router-dom"

const PageNotfund = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-black/80 text-white flex-col">
            <div className="font-bold text-red-600 text-2xl">404</div>
            <div className="text-xl">Page not found</div>
            <Link to={"/"} className="btn" >Dashboard</Link>
        </div>
    )
}
export default PageNotfund