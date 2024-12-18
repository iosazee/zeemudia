"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, duration, filter]);

  const renderWords = () => {
    return (
      <div>
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            const shouldHighlight =
              word.toLowerCase().includes("digital") ||
              word.toLowerCase().includes("experiences");
            return (
              <motion.span
                key={word + idx}
                className={cn(
                  "opacity-0",
                  shouldHighlight ? "text-indigo-400" : "text-white"
                )}
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
