import { cn } from "@/lib/utils";

interface SpinnerProps {
  className?: string;
  color?: string;
}

/** Yesp standard spinner — matches the loading style across all Yesp apps */
export function Spinner({ className, color }: SpinnerProps) {
  return (
    <svg
      className={cn("animate-spin shrink-0 select-none", className ?? "h-5 w-5")}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-label="Loading"
      role="status"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke={color ?? "currentColor"}
        strokeWidth="3.5"
      />
      <path
        className="opacity-75"
        fill={color ?? "currentColor"}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

/** Full-page loading screen — used as Suspense fallback for route transitions */
export function PageLoader({ label = "Loading…" }: { label?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-background">
      <Spinner className="h-8 w-8 text-primary" />
      <p className="text-xs font-semibold text-muted-foreground tracking-wide">{label}</p>
    </div>
  );
}

export default Spinner;
