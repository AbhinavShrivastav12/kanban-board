import { FaRegClock } from "react-icons/fa";
import { FaRegFaceFrownOpen } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import EditTaskButton from "../Buttons/EditTaskButton";
import DeleteTaskButton from "../Buttons/DeleteTaskButton";
import { getTask } from "../../api";

const InProgressCard = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      try {
        const fetchTasks = async () => {
            const res = await getTask();
            setTasks(res.data ?? res);
        }
        fetchTasks();
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    },[]);

  const inProgressTask = tasks.filter(
    task => task.status === "inprogress"
  );

  return (
    <div className="flex flex-col h-full">
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-3 rounded-t-xl shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaRegClock className="size-5" />
            <h2 className="font-semibold text-base">In Progress</h2>
          </div>
          <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-sm font-medium">
            {inProgressTask.length}
          </span>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-b-xl shadow-md p-4 min-h-[500px]">
        <div className="space-y-3">

          {loading && (
            <p className="text-sm text-slate-500">Loading...</p>
          )}

          {!loading && inProgressTask.length > 0 ? (
            inProgressTask.map(task => (
              <div
                key={task.id}
                draggable="true"
                className="bg-slate-50 border border-slate-200 rounded-lg p-4 hover:shadow-md transition-all cursor-move"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-slate-800 text-sm flex-1 line-clamp-2">
                    {task.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <EditTaskButton task={task} />
                    <DeleteTaskButton />
                  </div>
                </div>

                <p className="text-slate-600 text-sm line-clamp-3 mb-3">
                  {task.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <FaRegCalendarAlt />
                  <span>
                    {task.createdAt
                      ? new Date(task.createdAt).toLocaleDateString()
                      : "No date"}
                  </span>
                </div>
              </div>
            ))
          ) : (
            !loading && (
              <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                <FaRegFaceFrownOpen className="size-10" />
                <p className="text-sm">No Task</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default InProgressCard;
