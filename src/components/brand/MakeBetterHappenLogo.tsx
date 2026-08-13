import { type HTMLAttributes } from "react";
import logoSvg from "@/assets/make-better-happen-logo.svg";

interface MakeBetterHappenLogoProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "light" | "dark" | "auto";
  showImageOnly?: boolean;
}

export function MakeBetterHappenLogo({
  size = "md",
  theme = "auto",
  showImageOnly = false,
  className = "",
  ...props
}: MakeBetterHappenLogoProps) {
  if (showImageOnly) {
    return (
      <img
        src={logoSvg}
        alt="Make Better Happen Logo"
        className={`object-contain ${className}`}
        {...props}
      />
    );
  }

  const heightClasses = {
    sm: "h-6 text-base",
    md: "h-10 text-2xl sm:text-3xl",
    lg: "h-14 text-3xl sm:text-4xl md:text-5xl",
    xl: "h-20 text-4xl sm:text-5xl md:text-7xl",
  };

  const barClasses = {
    sm: "w-1 h-6 rounded-full",
    md: "w-1.5 h-10 sm:h-11 rounded-full",
    lg: "w-2 h-14 sm:h-16 rounded-full",
    xl: "w-3 h-20 sm:h-24 rounded-full",
  };

  const textClasses =
    theme === "light"
      ? "text-slate-900"
      : theme === "dark"
      ? "text-white"
      : "text-foreground";

  return (
    <div
      className={`inline-flex items-center gap-3 sm:gap-4 font-display font-extrabold tracking-tight ${className}`}
      {...props}
    >
      {/* Left Vertical Gradient Bar */}
      <span
        className={`shrink-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-700 ${barClasses[size]}`}
      />

      {/* Slogan Text */}
      <span className={`inline-flex items-center gap-2 ${heightClasses[size]}`}>
        <span className={textClasses}>Make</span>
        <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
          Better
        </span>
        <span className={textClasses}>Happen</span>
      </span>
    </div>
  );
}
