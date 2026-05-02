import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, HeartHandshake, Briefcase, FileText, CheckCircle2, Star, Quote } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const quickServices = [
  {
    title: "Accountancy",
    description: "High-quality, efficient compliance service. It's not just about filing accounts; it's about achieving your goals and time freedom.",
    icon: ShieldCheck,
    path: "/services/accountancy"
  },
  {
    title: "Tax Advisory",
    description: "Expert tax consultancy and planning, from self-assessment to R&D claims and international tax strategies.",
    icon: HeartHandshake,
    path: "/services/tax"
  },
  {
    title: "Business Consultancy",
    description: "Identifying breakthrough points in your business lifecycle through workshops, coaching, and strategic planning.",
    icon: Briefcase,
    path: "/services/consultancy"
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-bl-[100px] hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                UK • Thailand • UAE
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.95] tracking-tight text-balance">
                Helping Business Leaders <span className="text-secondary italic">Achieve Their Goals</span>.
              </h1>
              <p className="text-lg text-muted mb-10 max-w-lg leading-relaxed italic">
                A different type of accountancy firm. We represent accountancy, tax, and consultancy services to help you grow and succeed at every stage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all hover:shadow-xl active:scale-95 text-center">
                  Request a Consultation
                </Link>
                <Link to="/services" className="bg-white text-primary border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all text-center">
                  View Our Services
                </Link>
              </div>
              
              <div className="mt-12">
                <img 
                  src="/asia-bashir.png" 
                  alt="Asia Bashir" 
                  className="w-24 h-24 object-cover rounded-3xl shadow-xl border-4 border-white inline-block hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Office" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-accent/20 rounded-full blur-3xl -z-10" />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-1/4 -right-8 glass-panel p-6 rounded-2xl shadow-xl z-20 max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="text-secondary" size={20} />
                  <span className="text-xs font-bold uppercase tracking-tight">Growth</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-3/4 rounded-full" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute bottom-1/4 -left-8 glass-panel p-6 rounded-2xl shadow-xl z-20 max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="text-accent" size={20} />
                  <span className="text-xs font-bold uppercase tracking-tight">Secure</span>
                </div>
                <p className="text-[10px] text-muted font-medium italic">FCA Regulated Advisory Services</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Expertise</h2>
            <p className="text-muted italic">Comprehensive financial solutions designed to protect your wealth and empower your dreams.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {quickServices.map((service, idx) => (
              <ServiceCard 
                key={service.title} 
                title={service.title}
                description={service.description}
                icon={service.icon}
                path={service.path}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-24 bg-surface relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-3xl shadow-sm space-y-4">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="text-secondary" />
                  </div>
                  <h4 className="font-bold font-serif">Independent</h4>
                  <p className="text-xs text-muted italic leading-relaxed">Whole-of-market access to find the absolute best deals for you.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm mt-8 space-y-4">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-secondary" />
                  </div>
                  <h4 className="font-bold font-serif">Results Driven</h4>
                  <p className="text-xs text-muted italic leading-relaxed">Focused on maximizing your savings and minimizing risks.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm space-y-4">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center">
                    <HeartHandshake className="text-secondary" />
                  </div>
                  <h4 className="font-bold font-serif">Personalised</h4>
                  <p className="text-xs text-muted italic leading-relaxed">No two clients are the same. We tailor every plan to your life.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm mt-8 space-y-4">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center">
                    <FileText className="text-secondary" />
                  </div>
                  <h4 className="font-bold font-serif">Transparent</h4>
                  <p className="text-xs text-muted italic leading-relaxed">Clear pricing, clear advice, and zero hidden surprises.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Thousands Trust <span className="text-secondary">A to Z</span>.</h2>
              <p className="text-lg text-muted mb-8 leading-relaxed italic">
                We believe financial advice should be human, accessible, and crystal clear. Our team takes the stress out of complex decisions.
              </p>
              <ul className="space-y-4">
                {[
                  "FCA Regulated & Fully Insured",
                  "Access to Exclusive Mortgage Deals",
                  "Free Initial Consultations",
                  "Lifetime Client Support Policy"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                    <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/about" className="text-primary font-bold border-b-2 border-secondary pb-1 hover:border-primary transition-all">
                  Read our full story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "A to Z Finance made our first home purchase so smooth. They found a deal our own bank couldn't match!",
                author: "Sarah Johnson",
                role: "First Time Buyer"
              },
              {
                text: "The business workshop was eye-opening. I completely restructured my cash flow thanks to their advice.",
                author: "Mark Thompson",
                role: "SME Owner"
              },
              {
                text: "They helped us sort out our life insurance and wills. It's a huge weight off our shoulders knowing the kids are protected.",
                author: "Emma & David",
                role: "Families"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-surface relative"
              >
                <Quote className="absolute top-6 right-8 text-secondary/20" size={40} />
                <p className="text-muted italic mb-8 relative z-10 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${idx + 10}`} alt={testimonial.author} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm font-serif">{testimonial.author}</h5>
                    <p className="text-[10px] uppercase tracking-wider text-secondary font-bold">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[40px] px-8 py-16 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to secure your future?</h2>
              <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg italic">
                Get in touch today for a free, no-obligation initial discovery call. Let's see how we can help you thrive.
              </p>
              <Link to="/contact" className="bg-secondary text-primary px-10 py-4 rounded-full font-bold hover:bg-white transition-all hover:scale-105 active:scale-95 inline-block shadow-lg shadow-secondary/10">
                Get Your Free Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
