export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2"
              placeholder="How can we help?"
            />
          </div>
          <button className="rounded-md bg-amber-600 hover:bg-amber-500 px-5 py-2.5 font-medium">
            Send
          </button>
        </form>
        <div className="h-80 rounded-md overflow-hidden border border-neutral-800">
          <iframe
            title="Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.9850737615743!2d75.62614507481828!3d11.624413988580677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba68100233b929d%3A0x8aae1877e4c1baf9!2sROCK%20FIT%20GYM%20villiyappally!5e0!3m2!1sen!2sin!4v1763908913944!5m2!1sen!2sin"
          />
        </div>
      </div>
    </section>
  );
}
