import AddtaskButton from "./Buttons/AddtaskButton";

const Navbar = ({onTaskAdded}) => {
    return (
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
             <nav  className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
           <div className="flex items-center gap-2 md:gap-3">
            <img src="/Logo.png" alt="Logo" className="size-8 md:size-10" />
            <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Kanban Board</h1>
           </div>
           <AddtaskButton onTaskAdded={onTaskAdded} />
        </nav>
        </header>
    );
}

export default Navbar;
