// Navbar.tsx

import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'; // Ensure correct path based on your Heroicons version
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Disclosure
      as="nav"
      className="fixed w-full z-50 bg-white bg-opacity-30 backdrop-blur-md shadow-sm dark:bg-gray-800 dark:bg-opacity-30"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Left side - Logo and navigation links */}
              <div className="flex">
                {/* <div className="flex-shrink-0 flex items-center">
                  <img
                    className="h-8 w-auto"
                    src="/images/logo.png"
                    alt="Logo"
                  />
                </div> */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Middle - Search input */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* <input
                    type="text"
                    placeholder="Search projects..."
                    className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  /> */}
                </div>
                {/* <div className="ml-3">
                  <ThemeToggle />
                </div> */}
              </div>
              
              {/* Right side - Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state */}
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
