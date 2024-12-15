import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-gray-50/10 backdrop-blur-sm p-6 flex flex-col hover:bg-gray-50/20 transition-all duration-300",
        className
      )}
    >
      {header}
      <div>
        {icon}
        <div className="font-sans font-bold text-gray-100">{title}</div>
        <div className="font-sans text-gray-300">{description}</div>
      </div>
    </div>
  );
};
