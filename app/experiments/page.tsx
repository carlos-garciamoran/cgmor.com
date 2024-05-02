export default function Experiments() {
  return (
    <div className="flex size-full flex-1 flex-col items-center justify-center gap-10 py-8">
      <div
        className="flex size-64 items-center justify-center border border-neutral-900 dark:border-neutral-300"
        style={{
          background:
            'radial-gradient( circle, hsl(var(--accent)) 3%, hsl(var(--gradient-end)) 90% )',
        }}
      >
        <p className="font-mono">radial-gradient</p>
      </div>
      <div className="flex size-64 animate-mutate-border items-center justify-center border">
        <p>trippy border</p>
      </div>
    </div>
  );
}
