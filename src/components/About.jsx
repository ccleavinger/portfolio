import React from "react";
import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'

import {styles} from "../syles.js"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWrapper } from "../hoc/index.js"

const ServiceCard = ({index, title, icon}) => {
    return(
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
  return(
      <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 0.1)}
      className="mt-4  text-secondary text-[17px] max-w-5xl leading-[30px]">
          I'm currently a tutor with a love for computer science, AI, and Genetic Engineering. I have experience in
          low-level development (Rust, C++, Vulkan, & Zig), AI/ML (Scikit Learn, PyTorch, TF/Keras, & OpenCV),
          Game Development (Godot, C#, C++, Pygame, & Unreal Engine), Quantum Computing (Q# & Microsoft Quantum Dev Kit)
          , and Web Development (Three.js, TailwindCSS, & JS).
          I have been editing DNA since I was 13 and have found a great love for Genetics, Microbiology, and Immunotherapy through my education.
      </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service}/>
            ))}

        </div>
    </>
  )
}

export default SectionWrapper(About, "about");