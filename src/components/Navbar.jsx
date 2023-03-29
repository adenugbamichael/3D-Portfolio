import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { styles } from "../styles"
import { navLinks } from "../constants"
import { logo, menu, close } from "../assets"

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState("false")
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
          <p className='text-tertiary text-[1rem] font-[700] cursor-pointer  '>
            Michael Adenugba
          </p>
        </Link>
        <ul className=' list-none hidden sm:flex flex-row gap-[20px]'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => {
                setActive(link.title)
              }}
            >
              <a
                className={`${
                  active === link.title
                    ? "text-secondary mobi--current"
                    : "text-tertiary"
                } mobi relative font-[300] text-[1rem]`}
                href={`#${link.id}`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Navigation Bar */}
        {/* Mobile Navigation Bar */}
        <div className=' flex flex-1 sm:hidden justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='z-10 object-contain cursor-pointer mx-2'
            onClick={() => setToggle(!toggle)}
          />
          <ul
            className={` ${
              !toggle ? "hidden" : "flex"
            } list-none flex animate myeffect flex-col fixed justify-center  items-center max-h-[100vh] m-0 p-0 overflow-hidden top-0 bottom-0 left-0 right-0 z-2 bg-cover bg-no-repeat bg-center bg-hero-pattern`}
          >
            {/*  */}
            {navLinks.map((link) => (
              <li
                className='pl-[15px]'
                key={link.id}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(link.title)
                }}
              >
                <a
                  className={`${
                    active === link.title
                      ? "text-secondary mobi--current"
                      : "text-tertiary"
                  } text-[1rem]] cursor-pointer relative after:bg-tertiary fontsize ml-[2px] p-[1rem] inline-block mobi font-[300]`}
                  href={`#${link.id}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
