import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "./hoc";
import { technologies } from "../constants";

function Tech() {
  return (
    <motion.div
      className="flex flex-wrap justify-center items-center gap-10"
      initial={{ opacity: 0, y: "100px" }}
      whileInView={{ opacity: 1, y: "0px" }}
      transition={{ duration: 0.5 }}
    >
      {technologies.map((tech, i) => {
        return (
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 420,
            }}
            className="w-28 h-28 flex flex-col justify-center items-center"
            key={i}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="mask mask-decagon w-20 h-20 object-contain mb-2 rounded-md p-2   bg-gray-200 shadow-card"
            />

            <h3 className="text-secondary text-[16px]">{tech.name}</h3>
          </Tilt>
        );
      })}
    </motion.div>
  );
}

export default SectionWrapper(Tech, "");
