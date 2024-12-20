import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import darkModeLogo from '/src/assets/logos/main-dark-mode.png';
import lightModeLogo from '/src/assets/logos/main-light-mode.png';

const MobileNavBar = () => {
  const { isDarkMode, setDarkMode } = useContext(DarkModeContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    setDarkMode(!isDarkMode);
  };

  const links = [
    { linkName: 'Home', path: '/' },
    { linkName: 'About', path: '/about' },
    { linkName: 'Projects', path: '/portfolio' },
  ];

  return (
    <div className="relative">
      <button
        className="fixed z-30 px-4 py-2 top-5 right-5 border border-white rounded-lg"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <FontAwesomeIcon
          className="blur-xs"
          icon={isDrawerOpen ? faTimes : faBars}
        />
      </button>
      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className={`z-10 fixed inset-0 bg-black opacity-50 transition-opacity duration-300`}
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}

      {/* Drawer */}

      <div
        className={`fixed z-30 top-0 left-0 h-screen w-64 py-4 bg-primary text-primary flex flex-col transition-transform transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        <Link
          to="/"
          className="text-2xl font-bold mb-4 flex justify-center items-center"
        >
          <img
            src={isDarkMode ? darkModeLogo : lightModeLogo}
            alt="Logo"
            className="object-contain h-auto w-[75%]"
          />
        </Link>
        <div className="flex flex-col items-center justify-start space-y-8 mt-8  flex-1">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="px-2 text-center w-full flex justify-center items-center"
              onClick={() => setIsDrawerOpen(false)} // Added this line to close the drawer
            >
              {link.linkName}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="py-1 px-2 mt-auto bg-black border border-white rounded hover:bg-gray-500 self-center"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </div>
        <div className="flex flex-col items-center justify-end flex-1">
          <div className="mb-20">
            <a
              href="https://github.com/foleyb25"
              target="_blank"
              rel="noreferrer"
              className="mr-4" // Added margin-right
            >
              <FontAwesomeIcon icon={['fab', 'github']} className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
