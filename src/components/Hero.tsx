// components/Hero.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
 

const taglines = [
  "Full-stack MERN developer, turning coffee into code.",
  "Builder of apps, breaker of stereotypes—funny dev included.",
  "Full-stack developer, half-sane human.",
  "Debugging enthusiast and bug-squashing master.",
  "Web developer who makes websites actually work... most of the time.",
  "JavaScript expert (I promise I won't `var` anymore).",
  "Coding pro who types fast and breaks things faster.",
  "Developer who codes, you refresh, it breaks, we repeat.",
  "One who knows one does not simply write bug-free code.",
  "Dev who'd be rich if paid for every bug fixed, but here we are.",
  "Skipping the jargon, using generative AI to build and ship faster than anyone.",
  "Using generative AI to skip the boring parts and ship great code faster.",
  "Shipping projects at lightning speed, thanks to my generative AI sidekick.",
  "Not just coding—partnering with AI to get things done faster and better.",
];

const gradients = [
  'from-blue-600 via-yellow-800 to-orange-800',
  'from-green-600 via-teal-800 to-cyan-800',
  'from-yellow-600 via-orange-800 to-red-800',
  'from-purple-600 via-pink-800 to-red-800',
  'from-red-600 via-yellow-800 to-orange-800',
  'from-green-600 via-lime-800 to-yellow-800',
  'from-indigo-600 via-blue-800 to-purple-800',
  'from-gray-600 via-blue-800 to-teal-800',
  'from-pink-600 via-purple-800 to-indigo-800',
  'from-teal-600 via-cyan-800 to-blue-800',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGradient, setCurrentGradient] = useState(gradients[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = (prev + 1) % taglines.length;
        setCurrentGradient(gradients[newIndex % gradients.length]);
        return newIndex;
      });
    }, 5000); // Changed interval to 5 seconds for better readability
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${currentGradient} transition-colors duration-1000`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Decorative SVG Overlay */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 L100,0 L100,100 Z" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading with Coffee Icon */}
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-white mb-8 flex items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Welcome to My Portfolio
          </span> */}
          {/* <CoffeeCup className="h-12 w-12 text-yellow-400 ml-4 animate-pulse" /> */}
        </motion.h1>

        {/* Subheading with Animated Taglines */}
        <span className="mr-2 mb-4 text-2xl md:text-8xl font-bold text-white">{`I'm`} </span>

        <motion.div
          className="text-2xl md:text-3xl font-semibold text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
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

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a 
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-full shadow-lg text-lg font-bold text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>

      {/* Decorative Wave at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </motion.div>
  );
}
