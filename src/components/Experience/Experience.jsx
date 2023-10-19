import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { experiences } from "../../constants";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1838", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid i#232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-light text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-medium text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-light text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <Element name='experience'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h1 className={styles.sectionHeadText}>Work Experience.</h1>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </Element>
  );
};

export default SectionWrapper(Experience, "work");
