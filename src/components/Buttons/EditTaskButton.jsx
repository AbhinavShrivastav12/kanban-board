import { RiEditFill } from "react-icons/ri";
import { useState } from "react";
import EditPopupModel from "../Models/EditPopupModel";

export default function EditTaskButton({task}) {

    const [ open, setOpen ] = useState(false);

    const handleEditTask = () => {
        setOpen(true);
        console.log("Edit Task");
    }   

    return (
        <>
        <button onClick={handleEditTask} className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors cursor-pointer" title="Edit Task">
            <i>
            <RiEditFill className="size-5" /></i> </button>
            {open && <EditPopupModel task={task} onClose={() => setOpen(false)} />}
        </>
    );
}   