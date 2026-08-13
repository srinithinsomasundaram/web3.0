import { MakeBetterHappenLogo } from "@/components/brand/MakeBetterHappenLogo";

export function FloatingSloganTag() {
  return (
    <aside
      aria-label="Make Better Happen Brand Tag"
      className="fixed bottom-4 left-4 z-40 flex items-center rounded-full border border-border/80 bg-card/95 px-3.5 py-1.5 sm:px-4.5 sm:py-2 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary/60 cursor-default select-none animate-in fade-in slide-in-from-bottom-2"
    >
      <MakeBetterHappenLogo size="sm" theme="auto" />
    </aside>
  );
}
