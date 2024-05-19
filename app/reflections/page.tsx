export default function Reflections() {
  return (
    <div className="py-8 sm:my-auto">
      <h1 className="mb-8 text-4xl font-extralight tracking-tight sm:text-5xl">
        Reflections
      </h1>
      <div>
        <Reflection title="Dinero" date="Feb 23, 2024">
          <p className="text-sm">
            Ahora tengo más que nunca y no me encuentro satisfecho —como si no
            fuese suficiente.
          </p>
        </Reflection>
      </div>
    </div>
  );
}

function Reflection({
  title,
  date,
  children,
}: {
  title: string;
  date: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-xl border p-8">
      <div className="mb-4 flex items-baseline justify-between gap-2">
        <h2 className="text-lg">{title}</h2>
        <p className="text-sm font-light">{date}</p>
      </div>
      {children}
    </div>
  );
}
