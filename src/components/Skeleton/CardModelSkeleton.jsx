export default function CardModelSkeleton({count=4}) {
    return (
    <>
     {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-slate-100 border border-slate-200 rounded-lg p-4 animate-pulse"
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="h-4 bg-slate-300 rounded w-3/4"></div>
            <div className="flex gap-1">
              <div className="h-4 w-4 bg-slate-300 rounded-full"></div>
              <div className="h-4 w-4 bg-slate-300 rounded-full"></div>
            </div>
          </div>
          <div className="h-3 bg-slate-300 rounded w-full mb-3"></div>
          <div className="h-3 bg-slate-300 rounded w-5/6"></div>
          <div className="flex items-center gap-2 text-xs mt-3">
            <div className="h-3 w-3 bg-slate-300 rounded-full"></div>
            <div className="h-3 bg-slate-300 rounded w-1/4"></div>
          </div>
        </div>
      ))}
    </>
    );
}
