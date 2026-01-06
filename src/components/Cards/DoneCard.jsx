import { FaRegFaceFrownOpen } from "react-icons/fa6";
import { RiCheckboxCircleFill } from "react-icons/ri";
import EditTaskButton from "../Buttons/EditTaskButton";
import DeleteTaskButton from "../Buttons/DeleteTaskButton";
import { FaRegCalendarAlt } from "react-icons/fa";
import { formatDateTime } from "../../utils/formatDate";
import CardModelSkeleton from "../Skeleton/CardModelSkeleton";
import { CountSkeleton } from "../Skeleton/CountSkeleton";
import StatusDropDown from "../DropDown/StatusDropDown";

const DoneCard = ({
  tasks,
  onDragStart,
  onDrop,
  onDelete,
  onDragOver,
  isLoading,
  onTaskUpdated,
}) => {
  return (
    <div
      className="flex flex-col h-full"
      onDrop={onDrop}
      onDragOver={onDragOver}>
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-3 rounded-t-xl shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RiCheckboxCircleFill className="size-5" />
            <h2 className="font-semibold text-base">Done</h2>
          </div>
          <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-sm font-medium">
            {isLoading ? (
              <CountSkeleton className="text-green-800" />
            ) : (
              tasks.length
            )}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 bg-white rounded-b-xl shadow-md p-4 min-h-[500px]">
        <div className="space-y-3">
          {isLoading ? (
            <CardModelSkeleton count={4} />
          ) : tasks.length > 0 ? (
            tasks.map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={(e) => onDragStart(e, task.id)}
                className="bg-slate-50 border border-slate-200 rounded-lg p-4 hover:shadow-md transition-all cursor-move">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-slate-800 text-sm flex-1 line-clamp-2">
                    {task.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <EditTaskButton task={task} onTaskUpdated={onTaskUpdated} />
                    <DeleteTaskButton task={task} onDelete={onDelete} />
                  </div>
                </div>

                <p className="text-slate-600 text-sm line-clamp-3 mb-3">
                  {task.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <FaRegCalendarAlt />
                    <span>{formatDateTime(task.createdAt)}</span>
                  </div>
                  <div>
                    <StatusDropDown
                      task={task}
                      onStatusUpdate={onTaskUpdated}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400">
              <FaRegFaceFrownOpen className="size-10" />
              <p className="text-sm">No Task</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoneCard;
