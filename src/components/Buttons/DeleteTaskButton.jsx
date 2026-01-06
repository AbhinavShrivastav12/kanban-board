import { useState } from "react";
import { MdDelete } from "react-icons/md";
import DeletePopupModel from "../Models/DeletePopupModel";

export default function DeleteTaskButton({ task, onDelete }) {
  const [open, setOpen] = useState(false);

  const handleConfirmDelete = () => {
    setOpen(false);
    onDelete(task.id);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors cursor-pointer"
        title="Delete Task">
        <i>
          <MdDelete className="size-5" />
        </i>{" "}
      </button>
      {open && (
        <DeletePopupModel
          onConfirm={handleConfirmDelete}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
