import { MdDelete } from "react-icons/md";

export default function DeleteTaskButton() {
    return (
        <button className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors cursor-pointer" title="Delete Task">
            <i>
            <MdDelete className="size-5" /></i> </button>
    );
}