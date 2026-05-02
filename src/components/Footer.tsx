import { Link } from 'react-router-dom';
import { Landmark, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src="/atoz-finance-logo.png" alt="A to Z Logo" className="h-12 w-auto object-contain brightness-0 invert" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight">A to Z</span>
                <span className="text-[10px] uppercase tracking-[0.2em] -mt-1 font-semibold text-white/50">Finance Solutions</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Expert financial solutions tailored to your needs. From mortgages to insurance, we guide you every step of the way.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/services/accountancy" className="hover:text-secondary transition-colors">Accountancy</Link></li>
              <li><Link to="/services/tax" className="hover:text-secondary transition-colors">Tax Consultancy</Link></li>
              <li><Link to="/services/consultancy" className="hover:text-secondary transition-colors">Business Strategy</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-secondary" />
                <span>0121 293 6065 (UK)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-secondary" />
                <span>info@atozfinancesolutions.co.uk</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-secondary mt-1 flex-shrink-0" />
                <span>WeWork, 55 Colmore Row, Birmingham, B3 2AA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/30 uppercase tracking-widest font-semibold">
          <p>© 2024 A to Z Finance Solutions. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
