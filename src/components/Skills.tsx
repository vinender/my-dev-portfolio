import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', proficiency: 90, category: 'Front-End' },
  { name: 'React', proficiency: 85, category: 'Front-End' },
  { name: 'Node.js', proficiency: 80, category: 'Back-End' },
  { name: 'MongoDB', proficiency: 75, category: 'Database' },
  { name: 'Express', proficiency: 80, category: 'Back-End' },
  { name: 'HTML/CSS', proficiency: 90, category: 'Front-End' },
  { name: 'TypeScript', proficiency: 75, category: 'Front-End' },
  { name: 'GraphQL', proficiency: 70, category: 'Back-End' },
  { name: 'Redis', proficiency: 65, category: 'Database' },
  { name: 'Docker', proficiency: 70, category: 'Tools' },
  { name: 'Git', proficiency: 85, category: 'Tools' },
  { name: 'AWS', proficiency: 75, category: 'Tools' },
];

const categories = ['Front-End', 'Back-End', 'Database', 'Tools'];

export default function Skills() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="mt-12">
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white">
                {category}
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="bg-gray-100 rounded-lg p-4 dark:bg-gray-700">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                      <div className="mt-2 relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 dark:bg-gray-600">
                          <motion.div
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300">
                          <span>Beginner</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}