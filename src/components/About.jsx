
import { motion } from 'framer-motion';
import RadioaneImage from 'src/assets/images/radx.jpg';  

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Frontend Developer based in Your Location
            </h3>
            <p className="text-gray-600">
              I'm passionate about creating intuitive and dynamic user experiences.
              With 1 years of experience in web development, I specialize in
              building responsive websites and web applications using modern
              technologies.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Name:</p>
                <p>Radioane Khoubbane</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p>redzmourine671@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">Location:</p>
                <p>Rabat, Morocco</p>
              </div>
              <div>
                <p className="font-semibold">Available for:</p>
                <p>Freelance/Full-time</p>
              </div>
            </div>
          </motion.div>
          <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="relative"
>
  <div className="w-full h-[400px] relative">
    {/* Add your image here */}
    <img 
      src={RadioaneImage} 
      alt="Radioane" 
      className="w-[400px] h-[400px] object-cover rounded-lg absolute top-0 right-0"
    />
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default About; 