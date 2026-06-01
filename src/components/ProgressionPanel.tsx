import { Progress } from "@/components/ui/progress";
import { TIERS } from "@/content/xp/rules";
import type { Progression } from "@/content/xp/compute";

interface ProgressionPanelProps {
  progression: Progression;
}

const ProgressionPanel = ({ progression }: ProgressionPanelProps) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-end justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            Progress to Level {Math.min(100, progression.level + 1)}
          </span>
          <span className="text-sm font-medium text-foreground">
            {progression.xpIntoLevel} / {progression.xpForNextLevel} XP
          </span>
        </div>
        <Progress value={progression.progressPct} className="h-2" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {progression.breakdown.map((b) => (
          <div key={b.label} className="border border-border rounded-lg p-3 bg-card">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">
              {b.label}
            </div>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="text-lg font-bold text-foreground">{b.xp}</span>
              <span className="text-xs text-muted-foreground">×{b.count}</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
          Tier map
        </div>
        <div className="grid grid-cols-6 gap-2">
          {TIERS.map((t) => {
            const active = t.tier === progression.tier;
            return (
              <div
                key={t.tier}
                className={`border rounded-md p-2 text-center ${
                  active
                    ? "border-accent bg-accent/10"
                    : "border-border bg-card"
                }`}
              >
                <div
                  className={`font-playfair font-bold text-xl ${
                    active ? "text-accent" : "text-foreground"
                  }`}
                >
                  {t.tier}
                </div>
                <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                  {t.label}
                </div>
                <div className="text-[10px] text-muted-foreground mt-0.5">
                  {t.min}–{t.max}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
          XP history
        </div>
        <div className="border border-border rounded-lg divide-y divide-border bg-card max-h-64 overflow-y-auto">
          {progression.history.length === 0 && (
            <div className="p-3 text-sm text-muted-foreground">No contributions yet.</div>
          )}
          {progression.history.map((h, i) => (
            <div key={i} className="flex items-center justify-between gap-3 p-3">
              <div className="min-w-0">
                <div className="text-sm text-foreground truncate">{h.label}</div>
                <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                  {h.section} · {h.kind}
                </div>
              </div>
              <div className="text-sm font-semibold text-accent shrink-0">+{h.xp} XP</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressionPanel;
