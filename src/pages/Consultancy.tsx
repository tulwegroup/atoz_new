import { motion } from 'motion/react';
import { Briefcase, Target, TrendingUp, Lightbulb, Coffee, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const items = [
  {
    title: "Business Plans",
    description: "Crafting robust, professional business plans to secure funding or guide growth."
  },
  {
    title: "Core Values Development",
    description: "Helping you define the foundational values that drive your business culture."
  },
  {
    title: "One-to-One Coaching",
    description: "Personalized mentorship sessions to help business leaders overcome challenges."
  },
  {
    title: "Organisational Review",
    description: "Analysing your business structure to improve efficiency and output."
  },
  {
    title: "10 Hats Workshop",
    description: "Identifying the various roles in your business and how to wear them effectively."
  },
  {
    title: "KPI Coaching",
    description: "Identifying and tracking the Key Performance Indicators that matter most."
  },
  {
    title: "Profit Improvement",
    description: "Strategic actions focused on increasing your bottom line and efficiency."
  },
  {
    title: "Financial Awareness",
    description: "Coaching to help business owners understand their numbers more deeply."
  }
];

export default function Consultancy() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-secondary text-xs font-bold uppercase tracking-widest block mb-4">Growth & Strategy</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Business Consultancy</h1>
            <p className="text-xl text-muted max-w-2xl italic leading-relaxed">
              Identifying breakthrough points in your business lifecycle. We provide the tools, coaching, and strategic planning needed to reach your goals.
            </p>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 h-fit">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <Briefcase className="text-secondary" size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6 font-serif underline decoration-secondary decoration-4 underline-offset-8">Achieve Your Goals</h2>
            <p className="text-muted italic text-sm leading-relaxed mb-8">
              Running a business can be overwhelming. Our consultancy services are designed to give you back your time and peace of mind.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, label: "CLARITY" },
                { icon: TrendingUp, label: "GROWTH" },
                { icon: Lightbulb, label: "INNOVATION" },
                { icon: Coffee, label: "TIME FREEDOM" },
                { icon: Compass, label: "DIRECTION" },
                { icon: Briefcase, label: "SUCCESS" }
              ].map((item) => (
                <div key={item.label} className="p-4 bg-white border border-slate-100 rounded-2xl flex flex-col items-center text-center group hover:border-secondary transition-colors">
                  <item.icon size={20} className="text-muted mb-2 group-hover:text-secondary transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
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

        <section className="mt-32 relative overflow-hidden bg-slate-900 rounded-[40px] py-20 px-12 text-center text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[120px] rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 blur-[120px] rounded-full -ml-32 -mb-32" />
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-6 font-serif">The 10 Hats Workshop</h2>
            <p className="text-white/60 mb-10 italic leading-relaxed">
              Every business owner wears many hats. We help you identify which ones you're wearing, which ones you should delegate, and how to focus on what truly moves the needle.
            </p>
            <Link 
              to="/contact"
              className="bg-secondary text-primary px-10 py-5 rounded-full font-bold shadow-2xl inline-block hover:bg-white transition-all hover:scale-105 active:scale-95"
            >
              Enquire About Workshops
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
