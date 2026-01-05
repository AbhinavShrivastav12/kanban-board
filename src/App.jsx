import DoneCard from "./components/Cards/DoneCard";
import InProgressCard from "./components/Cards/InProgressCard";
import TodoCard from "./components/Cards/TodoCard";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TodoCard />
              <InProgressCard />
              <DoneCard />
            </div>
        </div>
    );
}