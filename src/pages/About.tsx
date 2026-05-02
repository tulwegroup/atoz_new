import { motion } from 'motion/react';
import { Target, Eye, Heart, Compass } from 'lucide-react';
import asiaBashir from '../assets/asia-bashir.png';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-muted italic leading-relaxed">
              We empower our clients through clarity, honesty, and expert financial strategy. We're not just advisors; we're your lifelong partners in prosperity.
            </p>
          </motion.div>
        </header>

        {/* Vision/Mission/Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="p-10 bg-primary text-white rounded-[40px] space-y-6">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Target className="text-secondary" />
            </div>
            <h2 className="text-2xl font-bold font-serif">Our Goal</h2>
            <p className="text-white/60 leading-relaxed italic">
              To demystify the financial world and provide every client—regardless of their background or business size—with the tools they need to achieve full financial freedom and security.
            </p>
          </div>
          <div className="p-10 bg-secondary text-primary rounded-[40px] space-y-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Eye className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold font-serif">Our Vision</h2>
            <p className="text-primary/70 leading-relaxed italic font-medium">
              To be the UK's most trusted independent financial consultancy, recognized for our unwavering commitment to client success and ethical business practices.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <img 
              src={asiaBashir} 
              alt="Asia Bashir" 
              className="rounded-[40px] shadow-2xl bg-slate-50 w-full"
            />
          </div>
          <div>
            <span className="text-secondary text-xs font-bold uppercase tracking-widest block mb-4">Founder & CEO</span>
            <h2 className="text-4xl font-bold mb-8 font-serif leading-tight">Meet <span className="italic">Asia Bashir</span>.</h2>
            <div className="space-y-6 text-muted italic leading-relaxed">
              <p>
                Asia is an International Consultant, Qualified Accountant, and Tax Advisor with a deep-rooted passion for helping business leaders succeed.
              </p>
              <p>
                With an industry background in Fortune 500 companies—including <strong>Rolls Royce, Siemens, and HSBC</strong>—Asia brings a depth of knowledge and understanding across a broad range of sectors.
              </p>
              <p>
                In the last decade, she has worked with SMEs in Automotive, Construction, Retail, Aviation, Digital Marketing, and Food industries to overcome challenges and achieve success through strategic service plans and one-to-one workshops.
              </p>
              <p>
                A to Z Finance Solutions delivers Accountancy, Tax, and Consultancy services internationally across the <strong>UK, Thailand, and UAE</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20 border-t border-slate-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 font-serif italic">Our Values</h2>
            <div className="w-12 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { icon: Heart, title: "Integrity", desc: "We do what's right, even when no one is watching." },
              { icon: Eye, title: "Clarity", desc: "No jargon. No confusion. Just clear advice." },
              { icon: Compass, title: "Guidance", desc: "We lead the way, through every life stage." },
              { icon: Target, title: "Excellence", desc: "We settle for nothing less than the best result." }
            ].map((value) => (
              <div key={value.title} className="space-y-4">
                <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h4 className="font-bold font-serif">{value.title}</h4>
                <p className="text-sm text-muted italic">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
