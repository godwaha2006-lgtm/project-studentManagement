import { useSelector } from "react-redux";

const Display = () => {
    const data = useSelector((store)=>store?.user?.user);
    return (
        <div className="flex shrink-0  p-2 flex-col">

            <div className=" flex justify-between  py-3 ">
                <div className="flex gap-2">
                    <div>{"🙋‍♂️"}</div>
                    <div className="capitalize text-gray-200">{"name"} </div>
                </div>
                <div className="font-mono w-60 flex capitalize">- {data?.name}</div>
            </div>

            <div className=" flex justify-between  py-3 ">
                <div className="flex gap-2">
                    <div>{"🪪"}</div>
                    <div className="capitalize text-gray-200">teacherId </div>
                </div>
                <div className="font-mono w-60 flex ">- {data?.teacherId || ""}</div>
            </div>
            <div className=" flex justify-between  py-3 ">
                <div className="flex gap-2">
                    <div>{"📱"}</div>
                    <div className="capitalize text-gray-200">phone </div>
                </div>
                <div className="font-mono w-60 flex ">- {data?.phone || ""}</div>
            </div>

            <div className=" flex justify-between  py-3 ">
                <div className="flex gap-2">
                    <div>{"📩"}</div>
                    <div className="capitalize text-gray-200">E-mail </div>
                </div>
                <div className="font-mono w-60 flex ">- {data?.email || ""}</div>
            </div>

            <div className=" flex justify-between  py-3 ">
                <div className="flex gap-2">
                    <div>{"📍"}</div>
                    <div className="capitalize text-gray-200">Address </div>
                </div>
                <div className="font-mono w-60 flex ">- {data?.address || ""}</div>
            </div>
        </div>
    )
}
export default Display