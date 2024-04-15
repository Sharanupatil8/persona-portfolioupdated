import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { style } from "../style";
import { slideIn, fadeIn } from "./utils/motion";
import { SectionWrapper } from "./hoc";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_jmjyt4o",
        "template_teuc0y9",
        {
          from_name: form.name,
          to_name: "Sharan",
          number: form.number,
          email: form.email,
          to_email: "sharansp98@gmail.com",
          message: form.message,
        },
        "2jnFuPtqr7LFBjoxz"
      )
      .then(() => {
        setIsLoading(false);
        alert("Thank You, We Will Get Back To You Soon");
        setForm(
          {
            name: "",
            email: "",
            number: "",
            message: "",
          },
          (err) => {
            setIsLoading(false);
            console.log(err);
            alert("something went wrong, try again");
          }
        );
      });
  };
  return (
    <>
      <div className="py-12 xl:mt-12 grid  grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between overflow-hidden space">
        <motion.div
          className="order-2 md:order-1 bg-black-100 p-8 rounded-2xl"
          variants={slideIn("left", "tween", 0.2, 1)}
        >
          <p className={`${style.sectionSubText}`}>Get In Touch</p>
          <h3 className={`${style.sectionHeadText}`}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col" htmlFor="">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                value={form.name}
                onChange={handleChange}
                placeholder="What's Your Name"
                required
              />
            </label>
            <label className="flex flex-col" htmlFor="">
              <span className="text-white font-medium mb-4">
                Your Phone Number?
              </span>
              <input
                type="text"
                name="number"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                value={form.number}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </label>
            <label className="flex flex-col" htmlFor="">
              <span className="text-white font-medium mb-4">
                Your Email id?
              </span>
              <input
                type="email"
                name="email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                value={form.email}
                onChange={handleChange}
                placeholder="What's Your Name"
                required
              />
            </label>
            <label className="flex flex-col" htmlFor="">
              <span className="text-white font-medium mb-4">
                What do you want to say?
              </span>
              <textarea
                rows="7"
                name="message"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                value={form.message}
                onChange={handleChange}
                placeholder="What's Your Name"
                required
              />
            </label>
            <button
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white shadow-md shadow-primary rounded-xl"
              type="sumbit"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          className=" self-start mt-12  order-1 md:order-2"
          variants={slideIn("right", "tween", 0.2, 1)}
        >
          <div className="">
            <video
              className="w-100 brightness-110"
              src="brave_Vb7ihTWMLU.mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </motion.div>
      </div>
      <motion.p
        className=" text-secondary text-center mt-4 text-[14px] w-full leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        &copy; all rights reserved by sharan {new Date().getFullYear()}
      </motion.p>
    </>
  );
}

export default SectionWrapper(Contact, "contact");
