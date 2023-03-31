import React from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.dev
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-boxes p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-tertiary font-[900] text-[48px] '>" </p>

    <div className='mt-1'>
      <p className='tracking-wider text-[18px]'>{testimonial}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-[14px] text-tertiary font-[400] '>
            <span className='text-secondary'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px] '>
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.dev>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-primary  rounded-[20px]'>
      <div className={`${styles.padding} bg-primary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What other say </p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}  flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")
