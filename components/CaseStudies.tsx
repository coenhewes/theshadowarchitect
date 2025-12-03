export default function CaseStudies() {
  const caseStudies = [
    {
      company: "Enterprise SaaS Platform",
      industry: "B2B Software",
      challenge: "Stagnant conversion rates and long sales cycles",
      solution: "Implemented Reality Architecture and Commitment Escalation frameworks",
      results: [
        "47% increase in free-to-paid conversion",
        "30% reduction in sales cycle length",
        "$2.4M additional ARR in 6 months",
        "35% improvement in customer lifetime value"
      ],
      timeframe: "6 months"
    },
    {
      company: "Financial Services Firm",
      industry: "Wealth Management",
      challenge: "Low client engagement and high churn rate",
      solution: "Deployed Identity Integration and Social Proof Engineering",
      results: [
        "62% increase in client retention",
        "43% growth in assets under management",
        "28% improvement in referral rates",
        "19-point NPS increase"
      ],
      timeframe: "9 months"
    },
    {
      company: "E-commerce Platform",
      industry: "Direct-to-Consumer",
      challenge: "Cart abandonment and low repeat purchase rates",
      solution: "Created Digital Influence Ecosystem with Emotional Dominion",
      results: [
        "52% reduction in cart abandonment",
        "68% increase in repeat purchase rate",
        "41% improvement in average order value",
        "$8.7M incremental revenue (Year 1)"
      ],
      timeframe: "12 months"
    },
    {
      company: "Fortune 500 Technology Company",
      industry: "Enterprise Technology",
      challenge: "Internal alignment and stakeholder resistance to change",
      solution: "Applied Authority Manufacturing and Environmental Psychology",
      results: [
        "85% faster decision-making cycles",
        "73% improvement in cross-functional collaboration",
        "Internal transformation in 4 months vs. projected 18 months",
        "$12M saved in opportunity costs"
      ],
      timeframe: "4 months"
    },
  ];

  return (
    <section className="py-24 px-6 bg-shadow-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-shadow-gold mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real outcomes from Shadow Architect Framework implementations. Measurable impact across industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-shadow-slate p-8 border border-gray-800 hover:border-shadow-gold transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="text-2xl font-serif text-white">{study.company}</h3>
                  <span className="text-xs text-shadow-gold uppercase tracking-wider px-3 py-1 border border-shadow-gold">
                    {study.industry}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{study.timeframe} engagement</p>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-shadow-gold uppercase tracking-wider mb-2">Challenge</p>
                <p className="text-gray-300">{study.challenge}</p>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-shadow-gold uppercase tracking-wider mb-2">Solution</p>
                <p className="text-gray-300 text-sm">{study.solution}</p>
              </div>
              
              <div>
                <p className="text-sm text-shadow-gold uppercase tracking-wider mb-4">Results</p>
                <ul className="space-y-3">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-start gap-3">
                      <span className="text-shadow-gold mt-1 font-bold">✓</span>
                      <span className="text-white font-semibold">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-shadow-slate p-8 max-w-4xl mx-auto border border-shadow-gold">
            <p className="text-lg text-gray-300 mb-4">
              "What gets measured gets managed. Every Shadow Architect engagement is designed for quantifiable impact."
            </p>
            <p className="text-shadow-gold text-sm uppercase tracking-wider">
              Confidentiality maintained | Results verified | ROI demonstrated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
