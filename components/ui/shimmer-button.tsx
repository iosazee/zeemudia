import React from "react";

function ShimmerButton({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) {
  return (
    <button
      onClick={handleClick}
      className="inline-flex h-12 w-full sm:w-auto animate-shimmer items-center justify-center rounded-md 
        border border-slate-700/50 
        bg-[linear-gradient(110deg,#000103,45%,#2e3138,55%,#000103)] 
        bg-[length:200%_100%] 
        px-4 sm:px-6 
        font-medium 
        text-slate-200
        transition-colors 
        hover:text-white
        hover:border-slate-600
        shadow-[0_0_1rem_-0.25rem_rgba(79,70,229,0.1)]
        hover:shadow-[0_0_1rem_-0.25rem_rgba(79,70,229,0.25)]
        focus:outline-none 
        focus:ring-2 
        focus:ring-slate-400 
        focus:ring-offset-2 
        focus:ring-offset-slate-50"
    >
      <span className={`inline-flex items-center gap-2 ${otherClasses}`}>
        {position === "left" && icon}
        <span className="whitespace-nowrap">{title}</span>
        {position === "right" && icon}
      </span>
    </button>
  );
}

export default ShimmerButton;
