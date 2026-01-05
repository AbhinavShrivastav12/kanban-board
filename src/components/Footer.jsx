export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-col md:flex-row">
            <img
              alt="Kanban Board Logo"
              className="h-8 w-8 object-contain"
              src="/Logo.png"
            />
            <span className="text-slate-600 text-sm flex justify-center items-center ">
              Kanban Board - Organize your tasks efficiently
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="text-sm text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer">
              Powered by Abhinav Shrivastav
            </a>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500">
            © 2026 Kanban Board. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
