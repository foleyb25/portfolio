import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import backgroundImageNight from '/src/assets/images/city-landscape-night-min.webp';
import backgroundImageDay from '/src/assets/images/city-landscape-day-min.webp';
import ATG_80s_Logo from '/src/assets/images/ATG_80s_logo.webp';
import ATG_writer_logo from '/src/assets/images/ATG_Writer_logo_16x9.webp';
import ATG_API_logo from '/src/assets/images/code_on_computer_screen-min.webp';
import barguments_logo from '/src/assets/images/Barguments_logo_16x9.webp';

const Portfolio = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const projects = [
    {
      title: 'All Things Great',
      description:
        'When satire meets modern news, you are given All Things Great. A blogging site covering various topics with an emphasis on satire and humor.',
      image: ATG_80s_Logo,
      technologies: ['Vue', 'Vercel', 'Tailwind CSS', 'Pinia'],
      link: 'https://allthingsgreat.com', // live project link
      code: '', // source code link
    },
    {
      title: 'Barguments',
      description:
        'Have you ever felt like arguing about completely irrelevant topics? Well, I present to you Barguments. Wager bets with your friends and family to determine the best Barguer.',
      image: barguments_logo,
      technologies: ['Swift'],
      link: 'https://apps.apple.com/us/app/barguments/id6450323880', // live project link
      code: 'https://github.com/foleyb25/Barguments-iOS', // source code link
    },
    {
      title: 'All Things Great Writer',
      description:
        'Writer platform for All Things Great empowering writers to create innovative content.',
      image: ATG_writer_logo,
      technologies: [
        'Vue',
        'Github Pages',
        'Github Actions',
        'Tailwind CSS',
        'MongoDB',
      ],
      link: '', // live project link
      code: '', // source code link
    },
    {
      title: 'All Things Great API',
      description:
        "The brains behind All Things Great. Handling operations pertaining to OpenAI's API, data scraping, image uploading, database calls, and much more.",
      image: ATG_API_logo,
      technologies: [
        'Vue',
        'Github Pages',
        'Github Actions',
        'Tailwind CSS',
        'MongoDB',
        'Data Scraping',
        'Amazon S3',
        'ExpressJS',
      ],
      link: '', // live project link
      code: '', // source code link
    },
  ];

  return (
    <div className="bg-primary text-primary">
      {/* Full-width hero banner */}
      <div
        className="w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            isDarkMode ? backgroundImageNight : backgroundImageDay
          })`,
        }}
      />

      <div className="container mx-auto p-4 md:px-8">
        <h1 className="text-4xl mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-lg p-4 bg-accent-secondary"
            >
              <div className="w-full aspect-video">
                <img
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-base">{project.description}</p>
              </div>
              <div className="px-6 py-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-between">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent-primary text-white font-bold py-2 px-4 rounded"
                  >
                    See More
                  </a>
                ) : (
                  <p className="font-bold py-2 px-4">Not Available</p>
                )}

                {project.code ? (
                  <a
                    href={project.code}
                    className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                  >
                    GitHub
                  </a>
                ) : (
                  <p className="font-bold py-2 px-4">Private Repo</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
