import { useEffect, useState } from "react";
import TodoCard from "./components/Cards/TodoCard";
import InProgressCard from "./components/Cards/InProgressCard";
import DoneCard from "./components/Cards/DoneCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getTask , updateTask , deleteTask } from "./api";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
     try{
        const res = await getTask();
      setTasks(res.data ?? res);
     } catch(err){
        console.error("Failed to fetch tasks:", err);
     }
    };
    fetchTasks();
  }, []);

  // Delete task
  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks((prev) => prev.filter((t) => t.id !== taskId));
    } catch (err) {
      console.error("Failed to delete task:", err);
    }
  };

  const handleAddTask = (newTask) => {
  setTasks(prev => [...prev, newTask]); 
};
const handleTaskUpdate = (updatedTask) => {
  setTasks(prev =>
    prev.map(t => (t.id === updatedTask.id ? updatedTask : t))
  );
};


  // Drag start
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  // Allow drop
  const handleDragOver = (e) => e.preventDefault();

  // Drop task
const handleDrop = async (e, status) => {
  e.preventDefault();
  const taskId = e.dataTransfer.getData("taskId");
  const task = tasks.find(t => t.id === taskId);

  if (!task || task.status === status) return;

  try {
    // Update backend
    await updateTask(taskId, { ...task, status });

    // Update UI immediately
    setTasks(prev =>
      prev.map(t => (t.id === taskId ? { ...t, status } : t))
    );
  } catch (error) {
    console.error("Failed to update task status:", error);
  }
};


  return (
    <div>
      <Navbar onTaskAdded={handleAddTask} />

      <div className="flex-1 w-full px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TodoCard
              tasks={tasks.filter((t) => t.status === "todo")}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "todo")}
              onDelete={handleDeleteTask}
            />
            <InProgressCard
              tasks={tasks.filter((t) => t.status === "inprogress")}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "inprogress")}
              onDelete={handleDeleteTask}
            />
            <DoneCard
              tasks={tasks.filter((t) => t.status === "done")}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "done")}
              onDelete={handleDeleteTask}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
