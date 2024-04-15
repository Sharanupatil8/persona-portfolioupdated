import { motion } from "framer-motion";
import { style } from "../style";
import { hero } from "../assets";
// import { desktop } from "../assets";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <div
        className={`${style.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80  violet-gradient" />
        </div>
        <div>
          <h1 className={`${style.heroHeadText} text-white`}>
            Hi I&apos;am <span className="text-[#915eff]">Sharan</span>
          </h1>
          <p className={`${style.heroSubText} mt-2 text-white-100`}>
            I develop Stunning user Interfaces{" "}
            <br className="sm:block hidden" /> & web Applications
          </p>
          <div className="green-pink-gradient rounded-3xl ">
            <img
              src={hero}
              alt="Desktop image"
              className="mt-8 p-[1px]  object-cover w-full h-[400px] md:h-auto   drop-shadow-2xl rounded-3xl "
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center absolute xs:bottom-10 bottom-32">
        <a href="#about" className="z-1 h-full">
          <div className="w-[36px] h-[64px] rounded-3xl border-4 border-secondary flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-4 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
