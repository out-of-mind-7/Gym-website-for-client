import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wider">
          <span className="text-amber-500">Rockfit</span>Gym
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'text-amber-400' : 'hover:text-amber-400/80'}>Home</NavLink>
          <NavLink to="/plans" className={({ isActive }) => isActive ? 'text-amber-400' : 'hover:text-amber-400/80'}>Plans</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'text-amber-400' : 'hover:text-amber-400/80'}>Gallery</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-amber-400' : 'hover:text-amber-400/80'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}


