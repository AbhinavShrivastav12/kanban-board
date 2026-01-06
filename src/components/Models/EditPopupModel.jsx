import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { updateTask } from "../../api";

const statusColors = {
  inprogress: "bg-amber-500 text-white",
  done: "bg-green-500 text-white",
  todo: "bg-slate-500 text-white",
};

export default function EditPopupModel({ task, onClose, onTaskUpdated }) {
  if (!task) return null; // safety guard

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(task.title || "");
    setDescription(task.description || "");
  }, [task]);

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required");

    try {
      const updated = await updateTask(task.id, {
        title,
        description,
        status: task.status,
      });

      onTaskUpdated(updated.data ?? updated);

      onClose();
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-9999">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex flex-col items-left gap-2">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-800">Edit Task</h2>
              <span
                className={`px-2 py-1 rounded-full text-sm font-medium  ${
                  statusColors[task.status]
                }`}>
                {task.status}
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Edit the task details below.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center">
            <RxCross2 className="size-5" />
          </button>
        </div>

        <form onSubmit={handleUpdateTask} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Task Title <span className="text-red-500">*</span>
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border px-4 py-2.5 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="w-full border px-4 py-2.5 rounded-lg resize-none"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 text-white py-2.5 rounded-lg">
              Update Task
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-slate-100 py-2.5 rounded-lg">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
