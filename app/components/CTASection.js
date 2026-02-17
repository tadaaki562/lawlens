export default function CTASection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#e3d3bc' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#313236' }}>
          Ready to know your rights
        </h2>
        <p className="text-lg mb-12" style={{ color: '#735148' }}>
          Start decoding legal documents today. Your questions deserve clear answers.
        </p>

        <div className="flex gap-4 justify-center mb-16">
          <button className="px-8 py-3 rounded font-bold hover:opacity-90 transition" style={{ backgroundColor: '#313236', color: '#e3d3bc' }}>
            Begin
          </button>
          <a href="/login" className="px-8 py-3 rounded font-bold hover:opacity-90 transition inline-block border-2" style={{ borderColor: '#313236', color: '#313236', backgroundColor: 'transparent' }}>
            Login
          </a>
        </div>

        {/* Large placeholder image */}
        <div className="rounded-lg h-80 flex items-center justify-center" style={{ backgroundColor: '#735148', color: '#e3d3bc' }}>
          <svg
            className="w-24 h-24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
