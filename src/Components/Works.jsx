import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { style } from "../style";
import { github } from "../assets";
import { projects } from "../constants";
import { textVariant } from "./utils/motion";
import { SectionWrapper } from "./hoc";

function ProjectCard({ project, i }) {
  const { image, name, source_code_link, description, tags } = project;

  return (
    <motion.div
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.3, delay: i * 0.1 }}
    >
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
          <p className="text-secondary text-[14px] mt-2 line-clamp-3">
            {description}
          </p>
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
}

function Works() {
  return (
    <>
      <motion.div
        whileInView={{ y: [-50, 0], opacity: [0, 100], type: "spring" }}
        transition={{ duration: 0.2, delay: 0.4 }}
      >
        <p className={`${style.sectionSubText}`}>Our WORKs</p>
        <h2 className={`${style.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          className="text-secondary mt-4 text-[17px] max-w-3xl leading-[30px]"
          whileInView={{ y: [-50, 0], opacity: [0, 100], type: "spring" }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          The following projects exemplify our agency's proficiency and
          expertise through tangible demonstrations of our work in real-world
          scenarios. Each project is succinctly outlined, accompanied by links
          to code repositories and live demos. These showcases underscore our
          capacity to tackle intricate challenges, adeptly navigate diverse
          technologies, and efficiently oversee project management initiatives.
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
