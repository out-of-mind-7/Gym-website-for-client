export default function Home() {
  return (
    <section>
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Elevate Your <span className="text-amber-500">Fitness</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-300">
            Premium training, modern equipment, and personalized plans to help you reach your goals.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="/plans" className="px-6 py-3 rounded-md bg-amber-600 hover:bg-amber-500 text-white font-medium">View Plans</a>
            <a href="/details" className="px-6 py-3 rounded-md border border-neutral-700 hover:border-neutral-600">Explore Gym</a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Why Rockfit GYM?</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: 'Hitech Gym Equipment', d: 'Rockfit Gym offers cutting edge and well maintained equipment for all your fitness needs.' },
            { t: 'Expert Coaching', d: 'Certified trainers for strength, mobility, and nutrition.' },
            { t: 'Cardio Classes', d: 'Daily classes that keep you motivated and accountable.' },
          
          ].map((f) => (
            <div key={f.t} className="rounded-lg border border-neutral-800 p-5 bg-neutral-900/30">
              <h3 className="font-semibold">{f.t}</h3>
              <p className="mt-2 text-neutral-300">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">Member Stories</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            'I dropped 8kg and finally feel strong again.',
            'The trainers made lifting feel safe and fun.',
            'Classes keep me consistent—best part of my day.',
          ].map((quote, i) => (
            <blockquote key={i} className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <p className="text-neutral-300">“{quote}”</p>
              <div className="mt-3 text-sm text-neutral-500">— Rockfit GYM Member</div>
            </blockquote>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl border border-neutral-800 bg-gradient-to-r from-amber-900/20 to-amber-800/20 p-8 text-center">
          <h3 className="text-2xl font-bold">Ready to start?</h3>
          <p className="mt-2 text-neutral-300">Get a free 7-day pass and meet the team.</p>
          <a href="/contact" className="mt-5 inline-block rounded-md bg-amber-600 hover:bg-amber-500 px-6 py-3 font-medium">Claim Free Pass</a>
        </div>
      </div>
    </section>
  );
}


