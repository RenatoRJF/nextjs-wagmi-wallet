"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" />
        <p className="text-white/70 text-sm">Loading wallet data...</p>
      </div>
    </div>
  );
}
