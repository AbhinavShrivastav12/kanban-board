import AddtaskButton from "./Buttons/AddtaskButton";

const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
           <div className="flex items-center gap-2 md:gap-3">
            <img src="/Logo.png" alt="Logo" className="size-8 md:size-10" />
            <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Kanban Board</h1>
           </div>
           <AddtaskButton />
        </div>
    );
}

export default Navbar;
