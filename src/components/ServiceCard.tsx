import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  delay?: number;
  path?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, delay = 0, path = "/services" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group p-8 bg-white border border-slate-100 rounded-3xl hover:border-secondary/20 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500"
    >
      <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
        <Icon className="text-primary w-7 h-7 group-hover:text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3 font-serif group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-6 italic">
        {description}
      </p>
      <Link to={path} className="text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary inline-flex items-center gap-2 group/link">
        Learn More
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block"
        >→</motion.span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
