export default function Philosophy() {
  return (
    <section className="py-24 px-6 bg-shadow-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-shadow-gold mb-6">
            The Shadow Architect's Philosophy
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-shadow-gold mb-4">
                The Paradox of Free Will
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The most effective influence preserves the illusion of choice while eliminating actual options. When people believe they're deciding freely, resistance disappears. We become the invisible architect of "voluntary" decisions.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif text-shadow-gold mb-4">
                Environmental Control Over Argument
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Traditional influence focuses on persuasion—changing minds through logical argument. We operate deeper: controlling the environment in which decisions are made, the information available for consideration, and the emotional states that drive choice.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-shadow-gold mb-4">
                Historical Mastery
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our framework draws from history's most effective influencers:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-shadow-gold">•</span>
                  <span>Cult leaders who made rational people abandon everything</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-shadow-gold">•</span>
                  <span>Machiavellian princes who maintained power through perception</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-shadow-gold">•</span>
                  <span>Propaganda masters who controlled populations through unconscious desires</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-shadow-gold">•</span>
                  <span>Modern corporations that create dependency while maintaining the illusion of choice</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-shadow-slate p-6 border border-gray-800">
              <p className="text-gray-300 italic leading-relaxed">
                "Everyone sees what you appear to be, few experience what you really are."
              </p>
              <p className="text-shadow-gold text-sm mt-4">— Niccolò Machiavelli</p>
              <p className="text-gray-400 text-sm mt-4">
                Control perceptions, not just actions. Reality is less important than perceived reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
