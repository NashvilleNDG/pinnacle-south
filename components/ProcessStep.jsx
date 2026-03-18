export default function ProcessStep({ number, icon: Icon, title, description, activities = [] }) {
  return (
    <div className="rounded-md border border-border bg-white p-6">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-sm bg-navyMid text-white">
          {Icon ? <Icon className="h-5 w-5" /> : <span className="text-[14px] font-semibold">{number}</span>}
        </div>
        <div className="flex-1">
          <div className="text-[12px] uppercase tracking-eyebrow text-processMuted">{`Step ${number}`}</div>
          <h3 className="mt-2 text-[20px] font-semibold text-textDark">{title}</h3>
          <p className="mt-3 text-[16px] leading-7 text-textMuted">{description}</p>
          {activities.length ? (
            <ul className="mt-4 list-disc pl-5 text-[14px] leading-6 text-textMuted">
              {activities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}

