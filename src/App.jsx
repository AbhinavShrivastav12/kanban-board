import DoneCard from "./components/Cards/DoneCard";
import InProgressCard from "./components/Cards/InProgressCard";
import TodoCard from "./components/Cards/TodoCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <div>
            <Navbar />
            <div className="flex-1 w-full px-4 py-8">
             <div className="max-w-7xl mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TodoCard />
              <InProgressCard />
              <DoneCard />
            </div>
            </div>
             </div>
             <Footer />
        </div>
    );
}