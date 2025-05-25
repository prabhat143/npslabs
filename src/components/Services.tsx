import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '../data';
import { FlaskRound as Flask, Microscope, Droplets, Bug, Skull, TestTube } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Flask':
      return <Flask className="h-10 w-10 text-primary-500" />;
    case 'Microscope':
      return <Microscope className="h-10 w-10 text-primary-500" />;
    case 'Droplets':
      return <Droplets className="h-10 w-10 text-primary-500" />;
    case 'Bug':
      return <Bug className="h-10 w-10 text-primary-500" />;
    case 'Skull':
      return <Skull className="h-10 w-10 text-primary-500" />;
    case 'TestTube':
      return <TestTube className="h-10 w-10 text-primary-500" />;
    default:
      return <Flask className="h-10 w-10 text-primary-500" />;
  }
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Our Comprehensive <span className="text-primary-500">Services</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our state-of-the-art laboratory in Bhimavaram is dedicated to helping you achieve complete traceability of your seafood supply chain across all major global markets.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="card p-6 hover:border-l-4 hover:border-primary-500 group"
              variants={itemVariants}
            >
              <div className="mb-4 p-3 bg-primary-50 rounded-full inline-block group-hover:bg-primary-100 transition-colors">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;