import { motion } from 'motion/react';
import { ShieldAlert, Zap, Globe, Scale, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const items = [
  {
    title: "Income & Corporation Tax",
    description: "Comprehensive tax planning and compliance for both individuals and companies."
  },
  {
    title: "CIS Returns",
    description: "Specialist monthly return services for contractors and subcontractors in construction."
  },
  {
    title: "VAT Returns",
    description: "Accurate calculation and submission of VAT returns to avoid penalties."
  },
  {
    title: "R&D Claims",
    description: "Identifying and claiming research and development tax credits for innovation."
  },
  {
    title: "Creative Tax Relief",
    description: "Specialist tax advice for the creative industries including film, TV, and gaming."
  },
  {
    title: "Tax Consultancy",
    description: "Strategic advice to optimize your tax position and minimize liabilities."
  },
  {
    title: "Expert Tax Advice",
    description: "Solving complex tax issues with precision and up-to-date legislative knowledge."
  }
];

export default function Tax() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-secondary text-xs font-bold uppercase tracking-widest block mb-4">Strategic Planning</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Tax Advisory</h1>
            <p className="text-xl text-muted max-w-2xl italic leading-relaxed">
              Navigating the complexities of tax legislation with ease. We provide expert consultancy and planning to ensure you remain compliant while optimizing your tax position.
            </p>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 h-fit">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <ShieldAlert className="text-secondary" size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6 font-serif underline decoration-secondary decoration-4 underline-offset-8">Expert Guidance</h2>
            <p className="text-muted italic text-sm leading-relaxed mb-8">
              From self-assessment to complex international tax strategies, our qualified advisors provide the clarity you need.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: Zap, title: "Efficiency", text: "Minimizing liability through smart planning." },
                { icon: Globe, title: "Global Reach", text: "Expertise in UK, Thailand, and UAE tax systems." },
                { icon: Scale, title: "Compliance", text: "Keeping you safe from penalties and audits." },
                { icon: BookOpen, title: "Education", text: "Helping you understand the 'why' behind your taxes." }
              ].map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="mt-1">
                    <feature.icon size={16} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest">{feature.title}</h4>
                    <p className="text-xs text-muted italic">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {items.map((item) => (
              <div 
                key={item.title}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold mb-3 font-serif group-hover:text-secondary transition-colors italic leading-tight">{item.title}</h3>
                <p className="text-muted text-xs leading-relaxed italic">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-32 p-12 glass-panel rounded-[40px] text-primary border border-secondary/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-serif italic">Need a specialist evaluation?</h2>
            <p className="text-muted mb-10 italic">
              Our tax consultancy services are tailored to your specific business needs. Whether it's R&D claims or personal tax planning, we're here to help.
            </p>
            <Link 
              to="/contact"
              className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/20 inline-block hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              Book a Tax Consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
