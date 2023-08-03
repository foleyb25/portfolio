import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const Blog = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const backgroundImagePathNight =
    '../src/assets/images/AI-future-night-min.png';
  const backgroundImagePathDay = '../src/assets/images/AI-future-day-min.png';

  return (
    <div className="bg-primary text-primary min-h-screen">
      {/* Full-width hero banner */}
      <div
        className="w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            isDarkMode ? backgroundImagePathNight : backgroundImagePathDay
          })`,
        }}
      />
      {/* Blog Content */}
      <div className="p-8">
        <h1>Blog</h1>
        <p>No blogs to show yet...</p>
      </div>
    </div>
  );
};

export default Blog;
