import { RiEditFill } from "react-icons/ri";

export default function EditTaskButton() {
    return (
        <button className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors cursor-pointer" title="Edit Task">
            <i>
            <RiEditFill className="size-5" /></i> </button>
    );
}