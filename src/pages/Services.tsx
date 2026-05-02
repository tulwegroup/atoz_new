import { motion } from 'motion/react';
import { Home as HomeIcon, ShieldAlert, Briefcase, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const mainServices = [
  {
    title: "Accountancy",
    path: "/services/accountancy",
    icon: HomeIcon,
    description: "High-quality compliance service focusing on achieving your business goals and time freedom.",
    features: ["Business Formations", "Year End Accounts", "Management Accounts", "Cashflow Management"]
  },
  {
    title: "Tax Consultancy",
    path: "/services/tax",
    icon: ShieldAlert,
    description: "Expert tax planning and consultancy to optimize your position and minimize liabilities.",
    features: ["Income & Corp Tax", "VAT Returns", "R&D Claims", "Expert Tax Advice"]
  },
  {
    title: "Business Consultancy",
    path: "/services/consultancy",
    icon: Briefcase,
    description: "Identifying breakthrough points and identifying growth opportunities for business leaders.",
    features: ["Strategic Business Plans", "One-to-One Coaching", "10 Hats Workshops", "Profit Improvement"]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-secondary text-xs font-bold uppercase tracking-widest block mb-4">Our Expertise</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">How We Help You Grow</h1>
            <p className="text-xl text-muted max-w-2xl mx-auto italic leading-relaxed">
              We provide a high-quality, efficient compliance service. Running your business is about achieving your goals—we help you get there.
            </p>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {mainServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link to={service.path} className="block h-full">
                <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                    <service.icon className="text-secondary" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 font-serif italic text-primary">{service.title}</h2>
                  <p className="text-muted text-sm italic leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-10">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-muted/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                    Explore Details
                    <ChevronRight size={18} className="text-secondary" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

