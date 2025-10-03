"use client";

import Skeleton from "@/components/Skeleton";

export default function WalletSkeleton() {
  return (
    <div className="rounded-lg p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
      <div className="flex flex-col gap-4 rounded-lg bg-white/6 p-6">
        <div className="flex justify-between items-center">
          <Skeleton variant="text" width="120px" height="24px" />
          <div className="flex items-center gap-2">
            <Skeleton variant="circular" width="32px" height="32px" />
            <Skeleton variant="text" width="80px" height="16px" />
            <Skeleton variant="text" width="16px" height="16px" />
          </div>
        </div>

        <Skeleton variant="text" width="200px" height="48px" />

        <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
          <Skeleton variant="text" width="140px" height="16px" />
          <div className="flex flex-wrap gap-2">
            <Skeleton variant="text" width="80px" height="32px" />
            <Skeleton variant="text" width="80px" height="32px" />
            <Skeleton variant="text" width="80px" height="32px" />
          </div>
        </div>
      </div>
    </div>
  );
}
