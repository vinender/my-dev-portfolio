import { CheckBadgeIcon } from '@heroicons/react/20/solid';
import { MenuIcon, XIcon } from '@heroicons/react/solid'; // Corrected import path for version 1.x
export default function About() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              About Me
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-300">
              I'm a passionate MERN stack developer with 5+ years of experience
              in building responsive and scalable web applications. My expertise
              lies in JavaScript, React, Node.js, and MongoDB. I love solving
              complex problems and creating user-friendly interfaces.
            </p>
            <div className="mt-6">
              <div className="flex">
                <MenuIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                  Bachelor's in Computer Science
                </p>
              </div>
              <div className="mt-6 flex">
                <MenuIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                  AWS Certified Developer
                </p>
              </div>
              <div className="mt-6 flex">
                <MenuIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                  MongoDB Certified Developer
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="flex justify-center">
              <img
                className="h-64 w-64 rounded-full"
                src="/images/profile-picture.jpg"
                alt="Profile picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}