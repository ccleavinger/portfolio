import { motion } from "framer-motion";

import { styles } from "../syles.js";
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion.js";
import { testimonials } from "../constants/index.js";


const FeedbackCard = ({index, testimonial, name, designation, company, image}) => (
  <motion.div
  variants={fadeIn("", "spring", index* 0.5, 0.75)}
  className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-bold text-[48px]">"</p>

    <div className="mt-1">
      <p>{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p>
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
      </div>

      <img
        src={image}
        alt={`feedback-by-${name}`}
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>
      </div>

      <div className={`${styles.paddingX} -m-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((tesimonial, index) => (
            <FeedbackCard
            key={tesimonial.name}
            index={index}
            {...tesimonial}
            />
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Feedbacks, "");