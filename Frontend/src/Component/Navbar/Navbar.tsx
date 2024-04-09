import React from 'react'
import logo from "../../../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar : React.FC = () => {
  return (
      <nav className='flex bg-[var(--light-color)] items-center justify-between px-10 py-4'>
          <div className='w-[50px] h-[40px]'>
              <img  className='w-full h-full' src={logo} alt="" />
          </div>
          <div className='flex items-center justify-center gap-10'>
              <ul className='font-semibold flex items-center justify-center gap-9'>
                  <Link to={"/"} >Home</Link>
                  <Link to={"/about"} >About Us</Link>
                  <Link to={"/project"} >Projects</Link>
                  <Link to={"/service"} >Services</Link>
                  <Link to={"/career"} >Services</Link>
                  <Link to={"/contact"} >Contact Us</Link>
              </ul>
              <button className='text-white font-semibold px-8 py-2 bg-[var(--primary-color)] rounded-md'>Get Ready</button>
       </div>
</nav>
  )
}

export default Navbar