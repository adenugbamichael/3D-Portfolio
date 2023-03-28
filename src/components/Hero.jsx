import React from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-secondary' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h2 className={`${styles.heroHeadText} text-tertiary`}>
            Hi, I'm <span className='text-secondary'>Michael</span>
          </h2>
          <p className={`${styles.heroSubText} text-tertiary`}>
            I develop user interfaces and web sites{" "}
            <br
              className='sm:block hidden
            '
            />{" "}
            that support decentralized peer-to-peer for crypto.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero
