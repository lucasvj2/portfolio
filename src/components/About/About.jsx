import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { web, backend} from '../../assets'
import { SectionWrapper } from "../../hoc";

const services = [{ title: "Web Developer", icon: web, }, { title: "Backend Developer", icon: backend }];

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-60">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-dark rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-light text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-light">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] max-w-3xl leading-[30px] text-medium"
      >
        I'm a skilled software developer with experience in JavaScript, Python,
        Java, and expertise in frameworks like React, Next, Node.js, Three.js.
        I'm a quick learner and collaborate closely with clients to create
        efficient, scalable, and user-friendly solutions that solve real-world
        problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
