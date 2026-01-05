import { FcTodoList } from "react-icons/fc";
import EditTaskButton from "../Buttons/EditTaskButton";
import DeleteTaskButton from "../Buttons/DeleteTaskButton";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getTask } from "../../api";

const TodoCard = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      const fetchTasks = async () => {
        const res = await getTask();
        setTasks(res.data ?? res);
      };
      fetchTasks();
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    } finally {
      setLoading(false);
    }
  }, []);
  const todoTask = tasks.filter((task) => task.status === "todo");

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-gradient-to-r from-slate-500 to-slate-600 text-white px-4 py-3 rounded-t-xl shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <FcTodoList />
            </div>
            <h2 className="font-semibold text-base">To Do</h2>
          </div>
          <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-sm font-medium">
            {todoTask.length}
          </span>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-b-xl shadow-md p-4 min-h-[500px] transition-all duration-200 ">
        <div className="space-y-3">
          {todoTask.map((task) => (
            <div
              key={task.id}
              draggable="true"
              className="bg-slate-50 border border-slate-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-move group">
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
                <i>
                  <FaRegCalendarAlt />
                </i>
                <span>{task.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
