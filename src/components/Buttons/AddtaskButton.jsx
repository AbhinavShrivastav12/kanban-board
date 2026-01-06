import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import PopUpModel from "../Models/PopUpModel";

export default function AddtaskButton({ onTaskAdded }) {
  const [open, setOpen] = useState();

  const handleAddTask = () => {
    setOpen(true);
  };

  return (
    <>
      <button
        onClick={handleAddTask}
        className="flex items-center gap-2 px-2 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer">
        <i>
          <IoMdAdd className="size-4 md:size-5" />
        </i>{" "}
        <span className="font-normal md:font-medium">Add Task</span>
      </button>
      {open && (
        <PopUpModel onClose={() => setOpen(false)} onTaskAdded={onTaskAdded} />
      )}
    </>
  );
}
