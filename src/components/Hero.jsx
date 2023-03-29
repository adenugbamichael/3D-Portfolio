import React from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-secondary' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h2 className={`${styles.heroHeadText}  text-tertiary`}>
            Hi, I'm <span className='text-secondary'>Michael</span>
          </h2>
          <p className={`${styles.heroSubText} mt-2 text-tertiary`}>
            I develop web applications and sites{" "}
            <br
              className='sm:block hidden
            '
            />{" "}
            that support decentralized peer-to-peer for crypto.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 w-full flex justify-center items-center bottom-32'>
        <a href='#about'>
          <div className='w-[35opx] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
