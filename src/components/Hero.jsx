import { motion } from 'framer-motion';
import InboxImage from 'src/assets/images/man.png';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      <ParticlesBackground />
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-800">Radioane Khoubbane</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-800 mb-6">
            Frontend Developer
          </h2>
          <p className="text-gray-600 mb-8">
            I create beautiful and functional websites with modern technologies.
          </p>
          <div className="flex space-x-4">
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/feed/?trk=404_page"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              LinkedIn Profile
            </a>
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-all transform hover:scale-105">
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Image positioned to the right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:block"
        >
          <div className="w-full flex justify-end">
            <img
              src={InboxImage}
              alt="Radioane Khoubbane"
              className="w-[400px] h-[400px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
