import { useState } from "react";
import { updateTask } from "../../api";
import { FaChevronDown } from "react-icons/fa";

const statusColors = {
  inprogress: "bg-amber-500 text-white",
  done: "bg-green-500 text-white",
  todo: "bg-slate-500 text-white",
};

const allStatuses = ["todo", "inprogress", "done"];

export default function StatusDropDown({ task, onStatusUpdate }) {
  const [open, setOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(task.status.toLowerCase());

  const handleSelect = async (status) => {
    setCurrentStatus(status);
    setOpen(false);

    try {
      const updated = await updateTask(task.id, { status }); // backend update
      onStatusUpdate && onStatusUpdate(updated.data ?? updated); // update parent state
    } catch (error) {
      console.error("Failed to update task status", error);
      setCurrentStatus(task.status.toLowerCase());
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${statusColors[currentStatus]}`}
      >
        <span className="capitalize">{currentStatus}</span>
        <FaChevronDown size={15} className="pt-1" />
      </button>

      {open && (
        <div className="absolute mt-1 right-0 w-max bg-white border rounded-md shadow-lg z-50">
          {allStatuses.map((status) => (
            <div
              key={status}
              onClick={() => handleSelect(status)}
              className={`px-4 py-2 cursor-pointer hover:bg-slate-100 hover:text-slate-800 flex items-center gap-1 ${statusColors[status]}`}
            >
              <span className="capitalize">{status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
