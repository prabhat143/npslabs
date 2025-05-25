import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { valuePropositions } from '../data';
import { 
  BadgeCheck, 
  LineChart, 
  Settings, 
  BeakerIcon, 
  Clock, 
  Users 
} from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'BadgeCheck':
      return <BadgeCheck className="h-10 w-10 text-primary-500" />;
    case 'LineChart':
      return <LineChart className="h-10 w-10 text-primary-500" />;
    case 'Settings':
      return <Settings className="h-10 w-10 text-primary-500" />;
    case 'BeakerIcon':
      return <BeakerIcon className="h-10 w-10 text-primary-500" />;
    case 'Clock':
      return <Clock className="h-10 w-10 text-primary-500" />;
    case 'Users':
      return <Users className="h-10 w-10 text-primary-500" />;
    default:
      return <BadgeCheck className="h-10 w-10 text-primary-500" />;
  }
};

const ValuePropositions: React.FC = () => {
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
    <section id="why-choose-us" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Why <span className="text-primary-500">Choose Us</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Partner with us to achieve excellence in the seafood industry
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {valuePropositions.map((item) => (
            <motion.div
              key={item.id}
              className="card p-6 hover:translate-y-[-5px] transition-all duration-300"
              variants={itemVariants}
            >
              <div className="mb-4 p-3 bg-primary-50 rounded-full inline-block">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {item.id}. {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropositions;