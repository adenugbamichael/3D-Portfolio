import React from "react"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import Tilt from "react-parallax-tilt"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.dev variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-boxes p-5 rounded-2xl sm:w-[360px] w-full '
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 text-[14px]'>
          <h3>{name}</h3>
          <p className='font-[300] text-[14px] text-secondary '>
            {description}
          </p>
        </div>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <code key={tag.name} className={`text-[12px] ${tag.color}`}>
              {tag.name}
            </code>
          ))}
        </div>
      </Tilt>
    </motion.dev>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} text-secondary xs:text-[12px] sm:text-[14px]`}
        >
          Selected works
        </p>
        <h2 className={`${styles.sectionHeadText} text-tertiary`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex '>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary mt-3  max-w-3xl lg:leading-[1.5rem] md:leading-[1.5rem] sm:leading-[1.5rem]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems
        </motion.p>
      </div>
      <div className=' mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")
