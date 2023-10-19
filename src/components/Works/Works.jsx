import { github, link } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { Element } from "react-scroll";

import { useInView } from "@react-spring/core";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link
}) => {
  const [inViewRef, inView] = useInView({
    threshold: 1, // At least 10% of the item is visible
  });

  const scaleFactor = inView ? 1.5 : 1;

  return (
    <div
      ref={inViewRef}
      className={`w-[400px] ${index % 2 == 0 ? "self-start" : "self-end"}`}
    >
      <div
        className="p-1 border-b rounded-2xl duration-300 bg-dblue"
        style={{
          perspective: "1000px",
          transform: `scale(${scaleFactor})`,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3">
          {source_code_link && (
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
          {live_link && (
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="violet-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={link}
                alt="link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
        </div>

        <div className="p-3 mt-5">
          <h1 className="text-white text-light text-[24px] font-bold">
            {name}
          </h1>
          <p className="mt-2 text-light text-[14px] pl-1 tracking-wider">
            {description}
          </p>
          <div className='mt-4 flex flex-wrap gap-2'>
              {tags.map(tag => (
                  <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <Element name='projects'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h1 className={styles.sectionHeadText}>Projects.</h1>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-medium text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflect my ability
          to solve complex problems, work with different technologies, and
          manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-40 flex flex-col gap-40 ml-40">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </Element>
  );
};

export default SectionWrapper(Works, "works");
