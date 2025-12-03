export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-shadow-dark via-shadow-slate to-shadow-darker" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-serif mb-6 tracking-tight">
          <span className="block text-shadow-gold mb-2">THE SHADOW</span>
          <span className="block text-white">ARCHITECT</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
          Boutique Consultancy for Maximum Influence Psychology
        </p>
        
        {/* Quote */}
        <div className="max-w-2xl mx-auto mb-12">
          <blockquote className="text-lg md:text-xl text-shadow-gold-light italic font-serif border-l-2 border-shadow-gold pl-6 py-4">
            &ldquo;The supreme excellence consists of breaking the enemy&apos;s resistance without fighting.&rdquo;
          </blockquote>
          <p className="text-sm text-gray-500 mt-2">— Sun Tzu</p>
        </div>
        
        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-shadow-gold text-shadow-dark font-semibold uppercase tracking-wider hover:bg-shadow-gold-light transition-all duration-300 transform hover:scale-105"
          >
            Begin Consultation
          </a>
          <a
            href="#pillars"
            className="px-8 py-4 border-2 border-shadow-gold text-shadow-gold font-semibold uppercase tracking-wider hover:bg-shadow-gold hover:text-shadow-dark transition-all duration-300"
          >
            Explore Framework
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-shadow-gold"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
