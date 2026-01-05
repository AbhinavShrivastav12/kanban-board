import { IoMdAdd } from "react-icons/io";

export default function AddtaskButton() {
    return (
        <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer">
            <i>
            <IoMdAdd className="size-5" /></i> <span className="font-medium">Add Task</span></button>
    );
}