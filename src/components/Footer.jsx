export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-amber-400 font-semibold">Rockfit GYM</div>
          <p className="mt-2">villiyappally</p>
          <p className="mt-1">Mon–Sat: 5am–11pm · Sun: 7am–9pm</p>
        </div>
        <div className="flex items-center gap-4">
          <a aria-label="Instagram" className="hover:text-amber-400" href="#">IG</a>
          <a aria-label="YouTube" className="hover:text-amber-400" href="#">YT</a>
        </div>
      </div>
      <div className="border-t border-neutral-800/80">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-neutral-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Rockfit GYM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


