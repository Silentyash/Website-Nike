import { useState } from 'react';
import { hamburger } from '../assets/icons';
import {headerLogo} from '../assets/images'
import { navLinks } from '../Constants'


const Nav = () => {
  const[navbar, setNavbar]= useState(false)

  const handleNav=()=>{
    setNavbar(!navbar)

  }
  return (
    <header className="padding-x py-4 bg-orange-100 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={30}></img>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16  decoration-red-500 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal pl-2 border-l-4 border-red-500  text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="lg:hidden  ">
          <img src={hamburger} alt="Hamburger" width={25} height={25}></img>
          <div
            className={
              navbar
                ? "absolute top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center"
                : "hidden"
            }
          >
            <ul className='flex flex-col gap-10'>
              {navLinks.map((item) => (
                <li className='text-5xl font-bold font-palanquin ' key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal pl-2 border-l-4 underline hover:text-slate-gray border-red-500 cursor-pointer text-3xl gap-11 text-white-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav