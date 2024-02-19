'use client';
import { useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles.js";
import { EarthCanvas } from './canvas';
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion.js";



const Contact = () => {
  useRef();
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

          <br/>
          <br/>
          <h2 className={styles.sectionSubText} onClick={() => {
            navigator.clipboard.writeText("caleb.cleavinger@gmail.com");
            alert("Copied Email!");
          }}>
            caleb.cleavinger@gmail.com
          </h2>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

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