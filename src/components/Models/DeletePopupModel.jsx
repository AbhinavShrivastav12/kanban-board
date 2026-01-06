import { RxCross2 } from "react-icons/rx";

export default function DeletePopupModel({ onConfirm, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-5/6 md:w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-800">Delete Task</h2>
          <button onClick={onClose}>
            <RxCross2 className="size-5" />
          </button>
        </div>

        <p className="text-slate-600 mb-6">
          Are you sure you want to delete this task? This action cannot be
          undone.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-600 text-white py-2.5 rounded-lg hover:bg-red-700">
            Delete
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-slate-100 py-2.5 rounded-lg hover:bg-slate-200">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
