import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { style } from "../../style";

const SectionWrapper = (Component, idName) => {
  console.log(idName);
  function HOC() {
    return (
      <motion.section
        id={idName}
        className={`${style.paddingX} py-10 sm:py-16 max-w-7xl mx-auto relative z-0`}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  }
  return HOC;
};

export default SectionWrapper;
