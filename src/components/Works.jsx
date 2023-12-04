import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../syles.js";
import { github } from "../assets";
import { SectionWrapper } from "../hoc"
import {fadeIn, textVariant} from "../utils/motion.js";
import React from "react";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and
        </motion.p>
      </div>
    </>
  )
}

export default Works