import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants/index.js";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tehnology) => (
          <div className="w-28 h-28" key={tehnology.name}>
            <BallCanvas icon={tehnology.icon} />
          </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")