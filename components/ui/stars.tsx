"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface StarProps {
  x: number;
  y: number;
  size: number;
  type: "star" | "sparkle";
  delay: number;
  brightness: number;
  twinkleSpeed: number;
}

interface StarData extends StarProps {
  id: number;
}

interface StarryBackgroundProps {
  className?: string;
}

const Star: React.FC<StarProps> = ({
  x,
  y,
  size,
  type,
  delay,
  brightness,
  twinkleSpeed,
}) => {
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        color: `rgba(255, 255, 255, ${brightness})`,
      }}
      initial={{ opacity: 0.1 }}
      animate={{
        opacity: [brightness * 0.3, brightness, brightness * 0.3],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: twinkleSpeed,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {type === "star" ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z"
            fill="currentColor"
          />
        </svg>
      )}
    </motion.div>
  );
};

const StarryBackground: React.FC<StarryBackgroundProps> = ({
  className = "",
}) => {
  const [stars, setStars] = useState<StarData[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const numberOfStars = 150; // Increased number of stars
      const newStars: StarData[] = [];

      for (let i = 0; i < numberOfStars; i++) {
        // Create different size categories for more variety
        const sizeCategory = Math.random();
        let size;
        if (sizeCategory < 0.6) {
          // 60% small stars
          size = Math.random() * 8 + 4; // 4-12px
        } else if (sizeCategory < 0.9) {
          // 30% medium stars
          size = Math.random() * 12 + 12; // 12-24px
        } else {
          // 10% large stars
          size = Math.random() * 16 + 24; // 24-40px
        }

        // Randomize brightness for more realistic star field
        const brightness = Math.random() * 0.5 + 0.3; // 0.3-0.8 opacity
        const twinkleSpeed = Math.random() * 3 + 2; // 2-5s duration

        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size,
          type: Math.random() > 0.7 ? "sparkle" : "star", // More regular stars than sparkles
          delay: Math.random() * 5, // More varied delays
          brightness,
          twinkleSpeed,
        });
      }

      setStars(newStars);
    };

    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />

        {/* Stars container */}
        <div className="relative w-full h-full">
          {stars.map((star) => (
            <Star
              key={star.id}
              x={star.x}
              y={star.y}
              size={star.size}
              type={star.type}
              delay={star.delay}
              brightness={star.brightness}
              twinkleSpeed={star.twinkleSpeed}
            />
          ))}
        </div>

        {/* Enhanced ambient glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default StarryBackground;
