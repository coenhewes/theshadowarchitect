export default function Services() {
  const services = [
    {
      title: "Corporate Psychological Warfare",
      description: "Implement systematic influence frameworks within your organization. Transform decision-making environments and reshape stakeholder psychology.",
      features: [
        "Internal culture architecture",
        "Employee behavioral conditioning",
        "Executive influence protocols",
        "Stakeholder alignment systems"
      ],
    },
    {
      title: "Digital Influence Ecosystems",
      description: "Create comprehensive digital environments that automatically generate desired behaviors. Platforms that influence without overt intervention.",
      features: [
        "Customer journey optimization",
        "Digital psychology architecture",
        "Algorithmic influence systems",
        "Conversion psychology design"
      ],
    },
    {
      title: "Long-Term Behavioral Conditioning",
      description: "Build institutional frameworks that create lasting behavioral change. Systems that work continuously without ongoing intervention.",
      features: [
        "Loyalty architecture",
        "Identity integration systems",
        "Habit formation protocols",
        "Dependency creation frameworks"
      ],
    },
    {
      title: "Counter-Intelligence & Defense",
      description: "Recognize and neutralize hostile influence attempts. Build psychological immunity against manipulation from competitors and external forces.",
      features: [
        "Influence detection systems",
        "Psychological inoculation protocols",
        "Counter-influence operations",
        "Defensive architecture design"
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-shadow-darker">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-shadow-gold mb-6">
            Boutique Consultancy Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don&apos;t offer generic consulting. Each engagement is a custom implementation of the Shadow Architect Framework, adapted to your specific psychological environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-shadow-slate p-8 border-l-4 border-shadow-gold"
            >
              <h3 className="text-2xl font-serif text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span className="text-shadow-gold mt-1">▸</span>
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-shadow-slate p-8 max-w-4xl mx-auto border border-shadow-gold">
            <p className="text-lg text-gray-300 mb-4">
              &ldquo;Never attempt to win by force what can be won by deception.&rdquo;
            </p>
            <p className="text-sm text-gray-500">— Niccolò Machiavelli</p>
            <p className="text-gray-400 mt-6">
              Our approach: Direct confrontation creates resistance. Indirect influence through environmental manipulation achieves goals while preserving relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
