import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testingCategories } from '../data';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TestingDetails: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>('antibiotic-residues');

  const toggleCategory = (id: string) => {
    setActiveCategory(activeCategory === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Detailed Testing Capabilities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our laboratory offers a comprehensive range of testing services to ensure your seafood products meet the highest quality and safety standards.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {testingCategories.map((category) => (
            <div key={category.id} className="mb-4">
              <button
                onClick={() => toggleCategory(category.id)}
                className={`w-full flex justify-between items-center p-4 rounded-lg transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                <span className="text-lg font-medium">{category.title}</span>
                {activeCategory === category.id ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              <AnimatePresence>
                {activeCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white border border-gray-200 rounded-b-lg"
                  >
                    <ul className="p-4 space-y-2">
                      {category.tests.map((test) => (
                        <li key={test.id} className="pl-4 border-l-2 border-primary-200">
                          <div className="font-medium text-gray-800">{test.name}</div>
                          {test.description && (
                            <p className="text-sm text-gray-600 mt-1">{test.description}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestingDetails;