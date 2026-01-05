import { FaRegFaceFrownOpen } from "react-icons/fa6";
import { RiCheckboxCircleFill } from "react-icons/ri";

const DoneCard = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-3 rounded-t-xl shadow-md">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center">
                            <i><RiCheckboxCircleFill className="size-5" /></i>
                        </div>
                        <h2 className="font-semibold text-base">Done</h2>
                    </div>
                    <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-sm font-medium">0</span>
                </div>
            </div>
            <div className="flex-1 bg-white rounded-b-xl shadow-md p-4 min-h-[500px] transition-all duration-200 ">
                <div className="space-y-3">
                    <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                        <i><FaRegFaceFrownOpen className="size-10" /></i>
                        <p className="text-sm">No Task</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoneCard;