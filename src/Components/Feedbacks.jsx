import { style } from "../style";
import { motion } from "framer-motion";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "./utils/motion";
import { testimonials } from "../constants";

function Feedbacks() {
  return (
    <div className={` mt-12   bg-black-100 rounded-[20px]`}>
      <div className={`${style.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${style.sectionSubText}`}>INTRODUCTION</p>
          <h2 className={`${style.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${style.paddingX} -mt-20 pb-14`}>
        <motion.div className=" flex flex-wrap gap-8">
          {testimonials.map((testimonials, i) => {
            return (
              <motion.div
                key={i}
                variants={fadeIn("", "spring", i * 0.5, 0.75)}
                className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
              >
                <p className="text-white text-[48px] font-bold">&quot;</p>
                <div className="mt-1 text-white tracking-wider text-[18px]">
                  {testimonials.testimonial}
                </div>
                <div className="mt-7 flex justify-between items-center gap-1">
                  <div className="flex-1 flex flex-col">
                    <p className="text-white font-medium text-[16px]">
                      <span className="blue-text-gradient">@</span>
                      {testimonials.name}
                    </p>
                    <p className="text-secondary mt-1 text-[12px]">
                      {testimonials.designation} of {testimonials.company}
                    </p>
                  </div>
                  <img
                    src={testimonials.image}
                    alt={testimonials.designation}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default SectionWrapper(Feedbacks, "");
