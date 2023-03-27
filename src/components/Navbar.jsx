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
          className='flex items-center'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <p className='text-tertiary text-[1rem] font-[700] cursor-pointer  '>
            Michael Adenugba
          </p>
        </Link>
        <ul className=' list-none hidden sm:flex flex-row gap-[20px]'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-secondary after:scale-100 after:scale-x-100 after:scale-y-100  after:left-0 after:w-full "
                  : "text-tertiary"
              } `}
              onClick={() => {
                setActive(link.title)
              }}
            >
              <a
                className='text-[1rem] font-[300] cursor-pointer relative  after:bg-tertiary mobi'
                href={`#${link.id}`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Navigation Bar */}
        {/* Mobile Navigation Bar */}
        {/* Mobile Navigation Bar */}
        <div className=' flex flex-1 sm:hidden justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='z-10 object-contain cursor-pointer mx-2'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } max-h-[100vh] items-center duration-[0.2s] ease-out delay-[0s] transition-[max-h] m-0 p-0 list-none overflow-hidden flex flex-col justify-center bg-primary fixed top-0 bottom-0 left-0 right-0 z-2`}
          >
            <ul className=' list-none flex  flex-col justify-center items-center  '>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-secondary" : "text-tertiary"
                  } pl-[15px]`}
                  onClick={() => setActive(link.title)}
                >
                  <a
                    className='text-[1rem]] cursor-pointer relative after:bg-tertiary fontsize ml-[2px] p-[1rem] inline-block mobi '
                    href={`#${link.id}`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
