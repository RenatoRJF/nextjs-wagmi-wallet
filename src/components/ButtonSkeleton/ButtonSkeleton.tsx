"use client";

import Skeleton from "@/components/Skeleton";

export default function ButtonSkeleton() {
  return (
    <div className="flex justify-end">
      <Skeleton 
        variant="rectangular" 
        width="140px" 
        height="48px" 
        className="rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30"
      />
    </div>
  );
}
