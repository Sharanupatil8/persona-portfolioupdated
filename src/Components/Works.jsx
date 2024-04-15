import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { style } from "../style";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "./utils/motion";
import { SectionWrapper } from "./hoc";

console.log(projects);

const ProjectCard = ({ project, i }) => {
  const { image, name, source_code_link, description, tags } = project;
  return (
    <motion.div variants={fadeIn("up", "spring", i * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 420,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="inset-0 absolute flex justify-end card-img_hover m-3">
            <div
              className="black-gradient h-10 w-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
            >
              <img
                src={github}
                className="h-[50%] w-[50%] object-contain"
                alt="Link of the projects"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="font-bold text-white text-[24px]">{name}</h3>
          <p className="text-secondary text-[14px] mt-2">{description}</p>
        </div>
        <div className="flex flex-wrap mt-4 gap-2">
          {project.tags.map((tag, i) => {
            return (
              <p key={i} className={tag.color}>
                {tag.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

function Works() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${style.sectionSubText}`}>MY WORK</p>
        <h2 className={`${style.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          className="text-secondary mt-4 text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} i={i} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Works, "works");
