import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Radioane@khoubbane</h3>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Radione@Khoubbane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;