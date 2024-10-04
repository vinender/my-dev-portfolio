// components/AIAcknowledgment.tsx
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaRobot, FaBrain } from 'react-icons/fa'; // Example icons

// Define your AI tools with icons and humorous captions
const aiTools = [
  {
    name: 'GitHub Copilot',
    icon: <FaGithub />,
    caption: 'My Coding Sidekick 🚀',
  },
  {
    name: 'ChatGPT',
    icon: <FaRobot />,
    caption: 'The Chatty Debugger 🤖',
  },
  {
    name: 'OpenAI',
    icon: <FaBrain />,
    caption: 'Brainy Code Booster 🧠',
  },
  // Add more tools as needed
];

export default function AIAcknowledgment() {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: ['0%', '-50%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        },
      });
    };
    animate();
  }, [controls]);

  return (
    <div className="py-12 bg-gray-100 mx-auto   w-full dark:bg-gray-800">
      <div className="max-w-5xl mx-auto   px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
          Powered by AI... and lots of Coffee ☕️
        </h2>
        
        {/* Infinite Scrolling Row */}
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={controls}
            ref={containerRef}
          >
            {/* Duplicate the aiTools array to create a seamless loop */}
            {[...aiTools,  ].map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-4xl text-blue-500 dark:text-blue-300">
                  {tool.icon}
                </div>
                <p className="mt-2 text-sm whitespace-nowrap font-medium text-gray-700 dark:text-gray-300">
                  {tool.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Optional: Add a playful note */}
        <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
          Without these AI buddies, I'd still be typing `console.log` all day!
        </p>
      </div>
    </div>
  );
}
