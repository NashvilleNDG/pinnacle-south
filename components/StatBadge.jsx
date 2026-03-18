export default function StatBadge({ value, label }) {
  return (
    <div className="inline-flex flex-col gap-1 rounded-md bg-navyMid px-6 py-4 text-white shadow-soft">
      <div className="font-serif text-[32px] leading-none">{value}</div>
      <div className="text-[12px] uppercase tracking-eyebrow text-white/80">{label}</div>
    </div>
  );
}

