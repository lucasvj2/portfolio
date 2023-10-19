import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { Element } from "react-scroll";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {};
  const handleSubmit = (event) => {};
  return (
    <Element name="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-light font-medium mb-4">Your Name</span>
              <input
                type="text"
                autoComplete={false}
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="bg-dark py-4 px-6 placeholder:text-light text-light rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-light font-medium mb-4">Your Email</span>
              <input
                type="email"
                autoComplete={false}
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="bg-dark py-4 px-6 placeholder:text-light text-light rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-light font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                autoComplete={false}
                name="mesesage"
                value={form.message}
                onChange={handleChange}
                className="bg-dark py-4 px-6 placeholder:text-medium text-light rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-dblue py-3 px-8 outline-none w-fit text-light font-bold shadow-md rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </Element>
  );
};

export default SectionWrapper(Contact, "contact");
