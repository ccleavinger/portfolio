import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../syles.js";
import { EarthCanvas } from './canvas';
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion.js";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    if (form.name.toLowerCase() === "mckay") {
      alert("You're a poopy head.")
      return;
    }

    e.preventDefault();
    setLoading(true);

    // JJ0q-GeT24Y2x7WWS
// template_d8suzrh
// service_4urdk5i
    emailjs.send(
        "service_4urdk5i",
        "template_d8suzrh",
        {
          from_name: form.name,
          to_name: 'Caleb',
          from_email: form.email,
          to_email: 'caleb.cleavinger@gmail.com',
          message: form.message,
        },
        'JJ0q-GeT24Y2x7WWS'
        )
        .then(() => {
          setLoading(false);
          alert('Thank You. I will get back as soon as possible.');

          setForm({

            name: '',
            email: '',
            message: '',

          })

        }, (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong!')
        });
  }


  return (
      <div
          className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>


          <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                  rows="7"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mb-4"/>
              <button
                  type='submit'
                  className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </label>
          </form>
        </motion.div>

        <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas/>
        </motion.div>

      </div>
  )
}

export default SectionWrapper(Contact, "contact");