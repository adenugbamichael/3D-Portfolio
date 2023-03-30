import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#30363D", color: "rgba(255, 255, 245, .86)" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full '>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-tertiary text-[16px] font-[700]'>
        {experience.title}
      </h3>
      <p className='text-[16px] text-tertiary font-[700]' style={{ margin: 0 }}>
        <span className='font-[200]'>@</span> {experience.company_name}
      </p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2 '>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='font-[300] text-white-100 text-[14px] pl-1 tracking-wider '
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-secondary sm:text-[14px]`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-tertiary`}>
          Work Experience.
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")
