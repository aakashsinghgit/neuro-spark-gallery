import { useMemo, useState } from "react";
import { computeProgression } from "@/content/xp/compute";
import ProgressionPanel from "@/components/ProgressionPanel";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

interface HunterBadgeProps {
  size?: number; // px
  showCaption?: boolean;
}

const HunterBadge = ({ size = 140, showCaption = true }: HunterBadgeProps) => {
  const progression = useMemo(() => computeProgression(), []);
  const [open, setOpen] = useState(false);

  const stroke = 4;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (progression.progressPct / 100) * c;

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button
          type="button"
          aria-label={`Hunter badge: level ${progression.level} ${progression.tier}-rank ${progression.label}`}
          className="group inline-flex flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
        >
          <div className="relative" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="rotate-[-90deg]">
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth={stroke}
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth={stroke}
                strokeDasharray={`${dash} ${c}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Lv {progression.level}
              </span>
              <span
                className="font-playfair font-bold text-accent leading-none"
                style={{ fontSize: size * 0.4 }}
              >
                {progression.tier}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
                {progression.xp} XP
              </span>
            </div>
          </div>
          {showCaption && (
            <span className="text-xs uppercase tracking-[0.18em] text-foreground">
              {progression.label}
            </span>
          )}
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle className="font-playfair text-2xl">
              Level {progression.level} · {progression.tier}-Rank · {progression.label}
            </DrawerTitle>
            <DrawerDescription>
              Solo Leveling–inspired progression. XP is derived from the portfolio
              codebase — every shipped project, deployed demo, article, and
              launched section contributes.
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-8">
            <ProgressionPanel progression={progression} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default HunterBadge;
