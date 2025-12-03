export default function Investment() {
  return (
    <section className="py-24 px-6 bg-shadow-darker">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-shadow-gold mb-6">
            Investment Framework
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Boutique consultancy requires boutique pricing. Every engagement is custom-scoped for maximum psychological impact and measurable ROI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-shadow-slate p-8 border border-gray-800">
            <h3 className="text-xl font-serif text-shadow-gold mb-4">Initial Assessment</h3>
            <p className="text-3xl font-bold text-white mb-2">$15K - $25K</p>
            <p className="text-gray-400 text-sm mb-6">One-time</p>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-shadow-gold">▸</span>
                <span>Psychological environment audit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shadow-gold">▸</span>
                <span>Framework recommendation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shadow-gold">▸</span>
                <span>Custom implementation roadmap</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shadow-gold">▸</span>
                <span>ROI projections</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-shadow-slate p-8 border-2 border-shadow-gold relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-shadow-gold text-shadow-dark px-4 py-1 text-xs font-bold uppercase tracking-wider">
              Most Common
            </div>
            <h3 className="text-xl font-serif text-shadow-gold mb-4">Full Implementation</h3>
            <p className="text-3xl font-bold text-white mb-2">$75K - $250K</p>
            <p className="text-gray-400 text-sm mb-6">3-12 months</p>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-shadow-gold">▸</span>
                <span>Complete framework deployment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shadow-gold">▸</span>
                <span>Team training & certification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shadow-gold">▸</span>
                <span>Ongoing optimization support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shadow-gold">▸</span>
                <span>Performance tracking & reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shadow-gold">▸</span>
                <span>Priority consultation access</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-shadow-slate p-8 border border-gray-800">
            <h3 className="text-xl font-serif text-shadow-gold mb-4">Enterprise Transformation</h3>
            <p className="text-3xl font-bold text-white mb-2">$250K+</p>
            <p className="text-gray-400 text-sm mb-6">Custom duration</p>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-shadow-gold">▸</span>
                <span>Multi-pillar integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shadow-gold">▸</span>
                <span>Organization-wide architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shadow-gold">▸</span>
                <span>Dedicated Shadow Architect team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shadow-gold">▸</span>
                <span>Institutional behavioral systems</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-shadow-slate p-8 border-l-4 border-shadow-gold">
          <h3 className="text-2xl font-serif text-shadow-gold mb-4">ROI Expectation</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Shadow Architect engagements typically deliver 3-10x return on investment within 12-18 months. 
            This isn't consulting—it's psychological architecture that fundamentally restructures how your organization influences outcomes.
          </p>
          <p className="text-gray-400 text-sm">
            All engagements include success metrics, performance guarantees, and transparent reporting. 
            Investment amounts are determined during initial assessment based on scope, complexity, and desired outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
