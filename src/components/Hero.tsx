import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const taglines = [
  'Full-Stack MERN Developer',
  'Building Responsive Web Applications',
  'Passionate About JavaScript',
];

const gradients = [
  'from-blue-600 via-yellow-800 to-orange-800',
  'from-green-600 via-teal-800 to-cyan-800',
  'from-yellow-600 via-orange-800 to-red-800',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradients[currentIndex]} transition-colors duration-1000`}
    >
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 L100,0 L100,100 Z" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-6xl md:text-8xl font-extrabold text-white mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            
          </span>
        </motion.h1>

        <motion.div
          className="text-2xl md:text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="mr-2">I'm a</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg"
            >
              {taglines[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          
            <a href="#projects"
            className="inline-block bg-white text-gray-800 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#91813f" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </motion.div>
  );
}