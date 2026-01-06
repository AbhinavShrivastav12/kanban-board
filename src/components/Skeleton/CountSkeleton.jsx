import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const CountSkeleton = ({ className }) => {
  return (
    <div className="flex items-center justify-center px-1.5 py-2">
      <AiOutlineLoading3Quarters
        className={`animate-spin stroke-2 ${className}`}
      />
    </div>
  );
};
