export default function SevenPillars() {
  const pillars = [
    {
      number: "I",
      title: "Reality Architecture",
      description: "Control the information environment to shape perceived reality. We restructure how your stakeholders see and understand your business ecosystem.",
    },
    {
      number: "II",
      title: "Emotional Dominion",
      description: "Master the emotional states that drive decision-making. Transform customer and employee psychology through calibrated emotional manipulation.",
    },
    {
      number: "III",
      title: "Social Proof Engineering",
      description: "Create manufactured consensus and cascade effects. Build systems where compliance becomes a marker of group membership.",
    },
    {
      number: "IV",
      title: "Authority Manufacturing",
      description: "Establish legitimate-seeming authority structures. Create influence systems that people will follow without questioning.",
    },
    {
      number: "V",
      title: "Commitment Escalation",
      description: "Design graduated commitment pathways. Small steps leading to total engagement, making reversal psychologically expensive.",
    },
    {
      number: "VI",
      title: "Identity Integration",
      description: "Link your business to core identity markers. Transform customers and employees into advocates who see your success as their own.",
    },
    {
      number: "VII",
      title: "Environmental Psychology",
      description: "Shape physical and digital environments that automatically generate desired behaviors. Architecture that influences without overt intervention.",
    },
  ];

  return (
    <section id="pillars" className="py-24 px-6 bg-shadow-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-shadow-gold mb-6">
            The Seven Dominion Pillars
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlike surface-level persuasion, these pillars restructure the psychological environment in which decisions are made. Comprehensive behavioral control through integrated systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-shadow-slate p-8 border border-gray-800 hover:border-shadow-gold transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-serif text-shadow-gold opacity-50 group-hover:opacity-100 transition-opacity">
                  {pillar.number}
                </span>
                <div className="h-px bg-shadow-gold flex-1 opacity-30 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 italic max-w-3xl mx-auto">
            Master practitioners operate simultaneously across all seven pillars, creating influence systems so comprehensive that targets never realize they&apos;re being controlled.
          </p>
        </div>
      </div>
    </section>
  );
}
