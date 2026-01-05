import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";

export default function PopUpModel({onClose}) {
  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-9999">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">Add New Task</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
            <i>
              <RxCross2 className="size-5" />
            </i>
          </button>
        </div>
        <form className="p-6 space-y-4">
          <div>
            <label
              htmlFor="Task Title"
              className="block text-sm font-medium text-slate-700 mb-2">
              Task Title
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="task-title"
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <label
              for="task-description"
              className="block text-sm font-medium text-slate-700 mb-2">
              Description
            </label>
            <textarea
              id="task-description"
              placeholder="Enter task description (optional)"
              rows="4"
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none text-sm"></textarea>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 font-medium whitespace-nowrap cursor-pointer">
              Add Task
            </button>
            <button
            onClick={onClose}
              type="button"
              className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium whitespace-nowrap cursor-pointer">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
