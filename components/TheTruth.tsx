export default function TheTruth() {
  return (
    <section className="py-24 px-6 bg-shadow-darker">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-shadow-gold mb-6">
              The Fundamental Delusion
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Most businesses believe they operate through rational decision-making. This is the foundational assumption that limits their influence.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The truth, validated by decades of psychological research, is that humans—including your customers, employees, and partners—operate primarily through emotional impulse, cognitive shortcuts, and social conformity. They rationalize their decisions afterward.
            </p>
            <p className="text-xl text-shadow-gold-light font-serif italic">
              The Shadow Truth: Every business interaction is an influence attempt. The only question is whether you&apos;re the influencer or the influenced.
            </p>
          </div>
          
          <div className="bg-shadow-slate p-8 border-l-4 border-shadow-gold">
            <h3 className="text-2xl font-serif text-shadow-gold mb-4">The Hierarchy of Control</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-shadow-gold font-bold text-xl">1.</span>
                <div>
                  <p className="text-white font-semibold">Surface Persuasion</p>
                  <p className="text-gray-400 text-sm">Logical arguments, benefits presentation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-shadow-gold font-bold text-xl">2.</span>
                <div>
                  <p className="text-white font-semibold">Emotional Manipulation</p>
                  <p className="text-gray-400 text-sm">Fear, desire, social pressure</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-shadow-gold font-bold text-xl">3.</span>
                <div>
                  <p className="text-white font-semibold">Environmental Control</p>
                  <p className="text-gray-400 text-sm">Context manipulation, information architecture</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-shadow-gold font-bold text-xl">4.</span>
                <div>
                  <p className="text-white font-semibold">Identity Restructuring</p>
                  <p className="text-gray-400 text-sm">Fundamental belief system alteration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-shadow-gold font-bold text-xl">5.</span>
                <div>
                  <p className="text-white font-semibold">Reality Distortion</p>
                  <p className="text-gray-400 text-sm">Complete perception management</p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-6 italic">
              Master practitioners operate simultaneously across all levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
