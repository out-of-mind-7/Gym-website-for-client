const plans = [
  { name: 'Starter', price: '$19/mo', features: ['Gym access', 'Group classes (2/wk)', 'Starter plan PDF'] },
  { name: 'Pro', price: '$39/mo', features: ['All access', 'Unlimited classes', '1 PT session/mo'] },
  { name: 'Elite', price: '$79/mo', features: ['24/7 access', 'Unlimited classes', '4 PT sessions/mo', 'Nutrition plan'] },
];

export default function Plans() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold">Training Plans</h2>
      <p className="mt-3 text-neutral-300">Choose a plan that fits your goals.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.name} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-3xl font-extrabold text-amber-400">{p.price}</p>
            <ul className="mt-4 space-y-2 text-neutral-300">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-md bg-amber-600 hover:bg-amber-500 py-2.5 font-medium">Choose {p.name}</button>
          </div>
        ))}
      </div>
    </section>
  );
}



