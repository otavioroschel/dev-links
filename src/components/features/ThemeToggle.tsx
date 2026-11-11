import type { Theme } from "../../hooks/useTheme";
import { PiMoonStarsFill, PiSun } from "react-icons/pi";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <div className="flex justify-center">
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
        onClick={onToggle}
        className="group relative h-10 w-16 cursor-pointer rounded-full"
      >
        {/* Track: 64x24, borda translúcida 50% e surface translúcida, com blur */}
        <span
          className={`absolute top-1/2 left-0 h-6 w-full -translate-y-1/2 rounded-full border backdrop-blur-[4px] ${
            isDark
              ? "border-white/50 bg-white/10"
              : "border-black/50 bg-black/5"
          }`}
        />
        {/* Handle: 32x32 branco, ícone de 16px, sombra por tema e anel de hover */}
        <span
          className={`absolute top-1 flex size-8 items-center justify-center rounded-full bg-white p-2 text-black transition-all duration-150 ${
            isDark
              ? "left-0 shadow-[0_2px_4px_rgba(0,0,0,0.25)] group-hover:ring-8 group-hover:ring-white/20"
              : "left-8 shadow-[0_2px_4px_rgba(0,0,0,0.1)] group-hover:ring-8 group-hover:ring-black/10"
          }`}
        >
          {isDark ? (
            <PiMoonStarsFill className="size-4" aria-hidden="true" />
          ) : (
            <PiSun className="size-4" aria-hidden="true" />
          )}
        </span>
      </button>
    </div>
  );
}
