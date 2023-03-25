import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { styles } from "../styles"
import { navLinks } from "../constants"
import { logo, menu, close } from "../assets"

const Navbar = () => {
  const [active, setActive] = useState("")
  return (
    <nav
      className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex items-center justify-between max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-tertiary text-[18px] font-bold cursor-pointer '>
            👋
            <span className='sm:block hidden'>hello!</span>{" "}
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 uppercase'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-tertiary" : "text-secondary"
              } hover:text-tertiary text-[13px] font-bold cursor-pointer`}
              onClick={() => {
                setActive(link.title)
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* Mobile Navigation Bar */}
        <div className=''></div>
      </div>
    </nav>
  )
}

export default Navbar
