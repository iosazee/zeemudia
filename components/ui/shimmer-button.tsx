import React from "react";

function ShimmerButton({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  customBg,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  customBg?: string;
}) {
  return (
    <button
      onClick={handleClick}
      className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md 
        border border-slate-700/50 
        overflow-hidden
        px-4 sm:px-6 
        font-medium 
        transition-colors 
        hover:border-slate-600
        shadow-[0_0_1rem_-0.25rem_rgba(79,70,229,0.1)]
        hover:shadow-[0_0_1rem_-0.25rem_rgba(79,70,229,0.25)]
        focus:outline-none 
        focus:ring-2 
        focus:ring-slate-400 
        focus:ring-offset-2 
        focus:ring-offset-slate-50"
    >
      {customBg ? (
        <>
          <span className={`absolute inset-0 ${customBg}`} />
          <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </>
      ) : (
        <span className="absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,#000103,45%,#2e3138,55%,#000103)] bg-[length:200%_100%]" />
      )}
      <span
        className={`relative inline-flex items-center gap-2 ${
          otherClasses || "text-slate-200 group-hover:text-white"
        }`}
      >
        {position === "left" && icon}
        <span className="whitespace-nowrap">{title}</span>
        {position === "right" && icon}
      </span>
    </button>
  );
}

export default ShimmerButton;
