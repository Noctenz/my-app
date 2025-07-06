import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = React.useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const links = [
    { name: 'Beranda', path: '/' },
    { name: 'Galeri', path: '/gallery' },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg h-screen p-4">
      <h2 className="text-2xl font-bold text-center mb-6">🌀 ArteonStudio</h2>
      <nav className="space-y-2">
        {links.map(link => (
          <Link key={link.path} to={link.path}>
            <div className={`p-2 rounded-lg font-medium ${location.pathname === link.path ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
              {link.name}
            </div>
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4">
        <button onClick={() => setDarkMode(prev => !prev)} className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-700 rounded-lg">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          {darkMode ? 'Mode Terang' : 'Mode Gelap'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
