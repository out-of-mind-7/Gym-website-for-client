export default function Details() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold">About Our Gym</h2>
      <p className="mt-4 text-neutral-300 max-w-3xl">
        RockFit GYM is a modern fitness center offering state-of-the-art equipment, strength and conditioning areas, group classes, and personal training. Our certified coaches tailor programs for beginners to athletes.
      </p>
      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        <div className="rounded-lg border border-neutral-800 p-6 bg-neutral-900/30">
          <h3 className="font-semibold">Facilities</h3>
          <p className="mt-2 text-neutral-300">Free weights, machines, turf, sauna, recovery lounge.</p>
        </div>
        <div className="rounded-lg border border-neutral-800 p-6 bg-neutral-900/30">
          <h3 className="font-semibold">Coaching</h3>
          <p className="mt-2 text-neutral-300">Certified trainers with specialty in strength, mobility, and nutrition.</p>
        </div>
        <div className="rounded-lg border border-neutral-800 p-6 bg-neutral-900/30">
          <h3 className="font-semibold">Hours</h3>
          <p className="mt-2 text-neutral-300">Mon–Sat: 5am–11pm, Sun: 7am–9pm</p>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold">Amenities</h3>
        <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-neutral-300">
          {[
            'Locker rooms & showers',
            'Towel service',
            'Filtered water stations',
            'Sauna & mobility tools',
            'Members lounge',
            'Free parking',
          ].map((i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500"></span>
              {i}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold">FAQs</h3>
        <div className="mt-4">
          {require('../components/FAQ.jsx').default({
            items: [
              { q: 'Do you offer a free trial?', a: 'Yes, claim a 7-day pass on the Home page CTA.' },
              { q: 'Do plans include classes?', a: 'Pro and Elite plans include unlimited classes.' },
              { q: 'Do you have personal training?', a: 'Yes, PT sessions are available as add-ons or included in Elite.' },
            ],
          })}
        </div>
      </div>
    </section>
  );
}
