export default function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-copper" aria-hidden="true" />
      <span className="text-[12px] uppercase tracking-eyebrow text-copper">{label}</span>
    </div>
  );
}

