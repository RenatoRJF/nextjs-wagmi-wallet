"use client";

import clsx from "clsx";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "rectangular" | "circular";
  width?: string;
  height?: string;
  lines?: number;
}

export default function Skeleton({
  className,
  variant = "rectangular",
  width,
  height,
  lines = 1,
}: SkeletonProps) {
  const baseClasses = "animate-pulse bg-gray-300/20 rounded";

  const variantClasses = {
    text: "h-4",
    rectangular: "h-20",
    circular: "rounded-full aspect-square",
  };

  const style = {
    width: width || undefined,
    height: height || undefined,
  };

  if (lines > 1) {
    return (
      <div className={clsx("space-y-2", className)}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={clsx(
              baseClasses,
              variantClasses[variant],
              index === lines - 1 && "w-3/4" 
            )}
            style={index === 0 ? style : undefined}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={clsx(baseClasses, variantClasses[variant], className)}
      style={style}
    />
  );
}
