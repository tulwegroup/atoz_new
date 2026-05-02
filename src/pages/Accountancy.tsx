import { motion } from 'motion/react';
import { Home as HomeIcon, Gavel, GraduationCap, Users, Key } from 'lucide-react';

const items = [
  {
    title: "Business Formations",
    description: "Professional guidance through the legal and financial setup of your new enterprise."
  },
  {
    title: "Year End Accounts",
    description: "Accurate, timely preparation of your annual statutory accounts to ensure compliance."
  },
  {
    title: "Payroll for Employers",
    description: "Complete payroll management, RTI submissions, and pension auto-enrolment support."
  },
  {
    title: "Self Assessment",
    description: "Expert preparation and submission of personal tax returns to HMRC."
  },
  {
    title: "Bookkeeping",
    description: "Detailed recording of all financial transactions to keep your business records pristine."
  },
  {
    title: "Management Accounts",
    description: "Regular financial reports to help you track performance and make informed decisions."
  },
  {
    title: "Budget & Forecasting",
    description: "Strategic financial planning to map out your business's future growth path."
  },
  {
    title: "Cashflow Management",
    description: "Maintaining a clear view of your liquid assets to ensure business continuity."
  }
];

export default function Accountancy() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-secondary text-xs font-bold uppercase tracking-widest block mb-4">Core Services</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Accountancy Services</h1>
            <p className="text-xl text-muted max-w-2xl italic leading-relaxed">
              High-quality, efficient compliance service. We believe it's not just about filing your annual accounts—it's about achieving your freedom.
            </p>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 h-fit">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <HomeIcon className="text-secondary" size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6 font-serif underline decoration-secondary decoration-4 underline-offset-8">Our Approach</h2>
            <p className="text-muted italic text-sm leading-relaxed mb-6">
              We help our clients to grow and succeed by identifying the breakthrough points so you are able to get to that next stage of your growth in your business lifecycle.
            </p>
            <div className="p-6 bg-surface rounded-3xl border border-slate-100">
              <h4 className="font-bold mb-2">Onboarding Experience</h4>
              <p className="text-xs text-muted mb-4 italic">Thinking of partnering with us? Here is what you can expect...</p>
              <ul className="space-y-2 text-[10px] uppercase tracking-wider font-bold">
                <li className="flex items-center gap-2 text-secondary">
                  <div className="w-1 h-1 bg-secondary rounded-full" />
                  Initial Discovery
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-300 rounded-full" />
                  Needs Analysis
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-300 rounded-full" />
                  Tailored Plan
                </li>
              </ul>
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

        {/* Specialized Advisory */}
        <section className="mt-32 p-12 bg-primary rounded-[40px] text-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block mb-4">International Presence</span>
              <h2 className="text-4xl font-bold mb-6 leading-tight">Serving the UK, Thailand, and UAE</h2>
              <p className="text-white/60 italic leading-relaxed mb-8">
                Distance is never an issue. Our digital-first approach combined with local expertise in three key territories ensures your business is supported globally.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Gavel, label: "Estate Planning" },
                  { icon: GraduationCap, label: "Finance Workshops" },
                  { icon: Users, label: "Family Trusts" },
                  { icon: Key, label: "Wealth Protection" }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon size={18} className="text-secondary" />
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1454165833767-027ffea9e787?auto=format&fit=crop&q=80&w=800" 
                alt="Expert Advice" 
                className="rounded-3xl shadow-2xl skew-y-2"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
