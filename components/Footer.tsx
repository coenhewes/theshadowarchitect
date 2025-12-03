export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-shadow-darker border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif text-shadow-gold mb-4">Shadow Architect</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Boutique consultancy implementing the most sophisticated influence frameworks for businesses.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif text-shadow-gold mb-4">Framework</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#pillars" className="hover:text-shadow-gold transition-colors">Seven Dominion Pillars</a></li>
              <li><a href="#contact" className="hover:text-shadow-gold transition-colors">Consultation Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif text-shadow-gold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">
              Private consultation by appointment only.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Shadow Architect Consulting. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm italic">
              &ldquo;The supreme excellence consists of breaking the enemy&apos;s resistance without fighting.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
