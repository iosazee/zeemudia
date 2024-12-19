import React from "react";

function GradientButton({
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
    <button className="p-[3px] relative" onClick={handleClick}>
      <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />

      <span
        className={`px-8 py-2 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
}

export default GradientButton;
