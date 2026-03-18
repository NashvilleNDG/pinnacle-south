export default function FeatureGrid({ features = [] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <div key={f.title} className="rounded-md border border-border bg-white p-6 hover:shadow-soft transition-shadow">
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-cream text-navyDark border border-border">
                {Icon ? <Icon className="h-5 w-5" /> : null}
              </div>
              <div className="flex-1">
                <h3 className="text-[20px] font-semibold text-textDark">{f.title}</h3>
                <p className="mt-2 text-[16px] leading-7 text-textMuted">{f.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

