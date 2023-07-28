import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Blog from '../pages/Blog';
import { DarkModeContext } from '../context/DarkModeContext';

const RoutesComponent = () => {
  const location = useLocation();
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    // Remove all current body classes
    document.body.className = '';

    // Add a new class based on the current route
    switch (location.pathname) {
      case '/about':
        document.body.classList.add('about-page');
        break;
      case '/portfolio':
        document.body.classList.add('portfolio-page');
        break;
      case '/blog':
        document.body.classList.add('blog-page');
        break;
      default:
        document.body.classList.add('home-page');
        break;
    }

    // Add 'dark' class if dark mode is enabled
    if (isDarkMode) {
      document.body.classList.add('dark');
    }
  }, [location, isDarkMode]);

  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesComponent;