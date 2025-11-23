const images = [
  'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571907480495-3c4a6e0c2ad3?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526403221273-8f4ae1f1d3f3?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop',
];

export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold">Gallery</h2>
      <p className="mt-3 text-neutral-300">Take a look at our space and community.</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <img key={i} src={src} alt="Gym" className="h-44 md:h-56 w-full object-cover rounded-md border border-neutral-800" />
        ))}
      </div>
    </section>
  );
}



