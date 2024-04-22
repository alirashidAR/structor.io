import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaGithub } from 'react-icons/fa';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
    Aos.init({ duration: 2000 });
  }, []);

  const fetchProjects = () => {
    axios
      .get('http://localhost:3000/api/projects')
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  };

  const aosEffects = ['fade-up', 'fade-down', 'fade-left', 'fade-right'];

  const getRandomAosEffect = () => {
    const randomIndex = Math.floor(Math.random() * aosEffects.length);
    return aosEffects[randomIndex];
  };

  const openModal = (index) => {
    document.getElementById(`modal_${index}`).showModal();
  };

  const closeModal = (index) => {
    document.getElementById(`modal_${index}`).close();
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-blue-500 my-8">Some Projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-8 h-screen projects">
        {projects.map((project, index) => (
          <div key={index} data-aos={getRandomAosEffect()} className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <img
              className="w-full h-48 object-cover object-center"
              src={`data:image/jpeg;base64,${project.images[0]}`}
              alt={`Project ${index}`}
            />
            <div className="p-4 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-500 hover:underline"
              >
                <FaGithub className="inline align-middle mb-1" /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
