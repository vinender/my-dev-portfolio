// components/ThemeToggle.tsx
import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';

export default function ThemeToggle() {
  const [enabled, setEnabled] = useState(false);

  // Sync theme with localStorage and system preference on mount
  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
      setEnabled(true);
      document.documentElement.classList.add('dark');
    } else if (darkMode === 'false') {
      setEnabled(false);
      document.documentElement.classList.remove('dark');
    } else {
      // If no preference, use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setEnabled(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Update theme when toggle changes
  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-indigo-600' : 'bg-gray-200'
      } relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200`}
    >
      <span className="sr-only">Toggle dark mode</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200`}
      />
    </Switch>
  );
}
