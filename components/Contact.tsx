export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-shadow-darker">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-shadow-gold mb-6">
            Begin Your Consultation
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Shadow Architect Consulting operates exclusively through private consultation. Every engagement is custom-designed for maximum psychological impact.
          </p>
          <div className="bg-shadow-slate p-6 max-w-2xl mx-auto border border-shadow-gold">
            <p className="text-shadow-gold-light font-semibold mb-2">FREE RESOURCE</p>
            <p className="text-gray-300 text-sm">
              Complete the form below to receive our <span className="text-shadow-gold">"Seven Dominion Pillars Executive Summary"</span> — 
              a comprehensive 15-page framework overview delivered immediately upon submission.
            </p>
          </div>
        </div>
        
        <div className="bg-shadow-slate p-12 border border-gray-800">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-shadow-gold mb-2 uppercase text-sm tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-shadow-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-shadow-gold transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-shadow-gold mb-2 uppercase text-sm tracking-wider">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full bg-shadow-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-shadow-gold transition-colors"
                  placeholder="Your position"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="company" className="block text-shadow-gold mb-2 uppercase text-sm tracking-wider">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full bg-shadow-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-shadow-gold transition-colors"
                placeholder="Your organization"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-shadow-gold mb-2 uppercase text-sm tracking-wider">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-shadow-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-shadow-gold transition-colors"
                placeholder="your.email@company.com"
              />
            </div>
            
            <div>
              <label htmlFor="objective" className="block text-shadow-gold mb-2 uppercase text-sm tracking-wider">
                Primary Objective
              </label>
              <textarea
                id="objective"
                name="objective"
                rows={5}
                className="w-full bg-shadow-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-shadow-gold transition-colors resize-none"
                placeholder="Describe your influence objective and current challenges..."
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-shadow-gold text-shadow-dark font-semibold uppercase tracking-wider hover:bg-shadow-gold-light transition-all duration-300"
              >
                Request Consultation
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            All consultations are strictly confidential. Initial discussions explore your psychological environment and influence requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
