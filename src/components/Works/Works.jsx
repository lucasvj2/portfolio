import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { useState, useEffect, useRef } from "react";

import { useInView } from 'react-intersection-observer';
import { Profiler } from "react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [inViewRef, inView] = useInView({
    threshold: 0.5, // At least 10% of the item is visible
  });
 
  const scaleFactor = inView ? 1.5 : 1;


  function onRenderCallback(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) {
    console.log(actualDuration)
  }

  return (
        <div ref={inViewRef}>


          <div style={{ perspective: "1000px" }}>
            <img
              src={image}
              className="w-full h-full object-cover rounded-2xl duration-300"
              style={{
                  transform: `scale(${scaleFactor})`,
                  transformStyle: "preserve-3d"
                }}
                />
          </div>
                </div>

  );
};

const Works = () => {
  return (
    <>
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
      <div className="mt-20 flex flex-col gap-60 bg-light">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
