export default function Credibility() {
  return (
    <section className="py-24 px-6 bg-shadow-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-shadow-gold mb-6">
            Authority & Recognition
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on decades of psychological research, historical analysis, and real-world implementation across industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-serif text-shadow-gold mb-6">Foundational Research</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-shadow-gold pl-6">
                <p className="text-white font-semibold mb-2">Historical Mastery</p>
                <p className="text-gray-400 text-sm">
                  Framework draws from history&apos;s most effective influencers: Machiavellian principles, 
                  Bernaysian propaganda techniques, and modern behavioral psychology research.
                </p>
              </div>
              <div className="border-l-2 border-shadow-gold pl-6">
                <p className="text-white font-semibold mb-2">Scientific Validation</p>
                <p className="text-gray-400 text-sm">
                  Rooted in peer-reviewed research from cognitive psychology, behavioral economics, 
                  and social influence studies spanning five decades.
                </p>
              </div>
              <div className="border-l-2 border-shadow-gold pl-6">
                <p className="text-white font-semibold mb-2">Real-World Application</p>
                <p className="text-gray-400 text-sm">
                  Techniques validated through implementations across Fortune 500 companies, 
                  high-growth startups, and competitive market leaders.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif text-shadow-gold mb-6">Client Portfolio</h3>
            <div className="space-y-6">
              <div className="bg-shadow-slate p-6 border border-gray-800">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Industries Served</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-white">Enterprise SaaS</div>
                  <div className="text-white">Financial Services</div>
                  <div className="text-white">E-commerce</div>
                  <div className="text-white">Technology</div>
                  <div className="text-white">Healthcare</div>
                  <div className="text-white">Professional Services</div>
                  <div className="text-white">Private Equity</div>
                  <div className="text-white">B2B Manufacturing</div>
                </div>
              </div>
              <div className="bg-shadow-slate p-6 border border-gray-800">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Organization Size</p>
                <p className="text-white text-lg font-semibold">
                  $10M - $10B+ Revenue
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  From startups to Fortune 500 enterprises
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-shadow-slate p-12 border border-shadow-gold">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-serif text-shadow-gold mb-6">The Shadow Architect Framework</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              &ldquo;This represents the first systematic codification of maximum influence psychology, 
              drawing from history&apos;s most effective persuaders and validated through modern scientific research. 
              Unlike sanitized business psychology, this framework acknowledges the raw, unfiltered mechanisms 
              of human behavioral control.&rdquo;
            </p>
            <p className="text-gray-400 text-sm">
              — Framework Documentation, Version 1.0
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-serif text-shadow-gold mb-2">15+</p>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Years Combined Research</p>
          </div>
          <div>
            <p className="text-4xl font-serif text-shadow-gold mb-2">50+</p>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Successful Implementations</p>
          </div>
          <div>
            <p className="text-4xl font-serif text-shadow-gold mb-2">$200M+</p>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Client Value Generated</p>
          </div>
        </div>
      </div>
    </section>
  );
}
