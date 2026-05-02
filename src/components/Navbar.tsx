import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Landmark, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

import logo from '../assets/atoz-logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About A to Z', path: '/about' },
  { name: 'Accountancy', path: '/services/accountancy' },
  { name: 'Tax', path: '/services/tax' },
  { name: 'Consultancy', path: '/services/consultancy' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 mb-2 md:mb-0">
          <div className="hidden md:flex gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
            <span>UK</span>
            <span className="text-muted">•</span>
            <span>Thailand</span>
            <span className="text-muted">•</span>
            <span>UAE</span>
          </div>
          <div className="hidden md:flex gap-6 text-[10px] font-medium text-muted">
            <span className="flex items-center gap-1"><Phone size={10} className="text-secondary" /> 0121 293 6065</span>
            <span className="flex items-center gap-1"><Mail size={10} className="text-secondary" /> info@atozfinancesolutions.co.uk</span>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-slate-200/10 pt-4 md:pt-0">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="A to Z Logo" className="h-10 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-primary">A to Z</span>
              <span className="text-[10px] uppercase tracking-[0.2em] -mt-1 font-semibold text-muted">Finance Solutions</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
                  location.pathname === link.path ? 'text-secondary' : 'text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg active:scale-95"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 border-t">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-primary hover:bg-surface rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-primary text-white px-6 py-3 rounded-xl font-semibold mt-4"
          >
            Enquire Now
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
