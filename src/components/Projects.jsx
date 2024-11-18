import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import project1Image from 'src/assets/images/web5.png';
import project2Image from 'src/assets/images/ts.png';
import project3Image from 'src/assets/images/port.png';  


const Projects = () => {
  const projects = [
    {
      title: 'SmartTask Manager',
      description: 'A robust task management application designed for individuals and teams to organize their workflow seamlessly. Built with React for dynamic user interaction, Node.js for server-side processing, and MongoDB for secure data storage. Includes features like real-time updates, task prioritization, and progress tracking.',
      image: project1Image,  
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/radwaneinbox?tab=repositories',
      demo: '#',
    },
    {
      title: 'QuickCart E-Commerce Platform',
      description: 'An intuitive e-commerce web application enabling users to browse, add items to their cart, and checkout with ease. Developed with React for a responsive frontend, Firebase for secure user authentication, and Tailwind CSS for a visually stunning and mobile-friendly design. Integrates real-time inventory management and payment gateway APIs.',
      image: project2Image,  
      technologies: ['React', 'Firebase', 'Tailwind'],
      github: 'https://github.com/radwaneinbox?tab=repositories',
      demo: '#',
    },
    {
      title: 'DevConnect Social Network',
      description: 'A modern social networking platform for developers to connect, share knowledge, and collaborate on projects. Built with React and Firebase for user-friendly features like profile creation, messaging, and project sharing. Tailored for tech enthusiasts, with a focus on community-building and peer learning.',
      image: project3Image,  
      technologies: ['React', 'Firebase', 'Tailwind'],
      github: 'https://github.com/radwaneinbox?tab=repositories',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Use dynamic project image here */}
              <div className="h-48 bg-gray-200">
                <img
                  src={project.image} // Dynamic image path
                  alt={project.title}
                  className="w-full h-full object-cover border-2 border-red-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
