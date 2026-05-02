import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted max-w-2xl italic leading-relaxed text-balance">
              Request a free consultation for business leaders interested in our Accountancy, Tax, or Consultancy services.
            </p>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 bg-white rounded-[40px] shadow-sm border border-slate-100 relative overflow-hidden">
              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center text-center p-8"
                  >
                    <CheckCircle className="text-accent mb-4" size={64} />
                    <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted italic">Thank you for reaching out. Asia or a member of the team will be in touch shortly.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-primary font-bold border-b-2 border-secondary"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <h2 className="text-3xl font-bold mb-8 font-serif">Request a Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">Full Name</label>
                    <input required type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-secondary/50 transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">Email Address</label>
                    <input required type="email" placeholder="email@example.com" className="w-full px-6 py-4 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-secondary/50 transition-all outline-none" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">Phone Number</label>
                    <input required type="tel" placeholder="01234 567 890" className="w-full px-6 py-4 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-secondary/50 transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">Company Name</label>
                    <input type="text" placeholder="Your Business Ltd" className="w-full px-6 py-4 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-secondary/50 transition-all outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted">Interest Area</label>
                  <select className="w-full px-6 py-4 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-secondary/50 transition-all outline-none appearance-none">
                    <option>Accountancy Services</option>
                    <option>Tax Consultancy</option>
                    <option>Business Coaching & Strategy</option>
                    <option>International Business Support</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted">What are your biggest challenges?</label>
                  <textarea rows={4} placeholder="Tell us a little about your business goals..." className="w-full px-6 py-4 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-secondary/50 transition-all outline-none resize-none"></textarea>
                </div>
                <button type="submit" className="w-full md:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-secondary hover:text-primary transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-primary/10">
                  Submit Request
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-10 bg-primary text-white rounded-[40px] shadow-2xl space-y-10">
              <h3 className="text-2xl font-bold font-serif italic text-secondary">Birmingham Head Office</h3>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Direct Dial</p>
                    <p className="font-semibold text-lg">0121 293 6065</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Email</p>
                    <p className="font-semibold">info@atozfinancesolutions.co.uk</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Address</p>
                    <p className="font-semibold leading-relaxed">
                      WeWork, 55 Colmore Row,<br />
                      Birmingham, West Midlands,<br />
                      B3 2AA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Birmingham Map */}
            <div className="h-[350px] bg-slate-200 rounded-[40px] overflow-hidden relative shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.613919656461!2d-1.900898623348123!3d52.48251347205423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc8f7c8f8a61%3A0x6b8f3e58c0c8c0c8!2s55%20Colmore%20Row%2C%20Birmingham%20B3%202AA!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
