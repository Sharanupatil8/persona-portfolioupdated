import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { style } from "../style";
import { SectionWrapper } from "./hoc";
import { experiences } from "../constants";
import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "./utils/motion";
/* eslint-disable react/prop-types */
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ border: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain "
          />
        </div>
      }
    >
      <h3 className="text-white font-bold text=[24px]">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
      <ul className="mt-10 list-disc ml-5 space-y-2">
        {experience.points.map((exp, i) => (
          <li
            className="text-white-100 text-[14px] pl-1 tracking-wider"
            key={i}
          >
            {exp}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

function Experience() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${style.sectionSubText}`}>WHAT I HAVE DONE SO FAR</p>
        <h2 className={`${style.sectionHeadText}`}>My Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, i) => (
            <ExperienceCard experience={exp} key={i} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Experience, "work");
