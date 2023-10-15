"use client"

import { useState } from 'react'
import MenuIconDark from '../../public/favicons/menu-hamburguer-dark.svg'
import MenuIconLight from '../../public/favicons/menu-hamburguer-light.svg'
import { poppinsBold } from '../utils/fonts'
import MenuBar from './MenuBar'
import { ThemeImage } from './theme-image'

export default function Header() {
  
  const [menuDisplay, showMenu] = useState(true)
  const links = ['Serviços', 'Projetos', 'Contato']

  const handleScroll = (name: string) => {
    const element = document.getElementById(name.toLocaleLowerCase())
    element?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
  return (
    <div>
      <div className='flex justify-between m-[25px] sm:m-[50px] items-center'>
      <div className='cursor-pointer'>
        <div onClick={() => window.location.reload()} className={`${poppinsBold.className} dark:hover:text-[#C4B5FD] duration-200 hover:text-[#7C3AED] text-[48px] text-[#262626] dark:text-white`}>gk<span className={`${poppinsBold.className} text-[32px] text-[#7C3AED]`}>.</span></div>
      </div>
      <div className='flex'>
      <ul className='hidden sm:flex items-center'>
        {links.map((link) => (
          <li onClick={() => handleScroll(link)} className='font-medium cursor-pointer text-[18px] ml-[30px] dark:hover:text-[#C4B5FD] duration-200 hover:text-[#7C3AED]' key={link}>{link}</li>
        ))}
      </ul>
      {/* <ThemeImage alt='Botão para alterar tema do site'srcLight={SwitchDark} srcDark={SwitchLight}/> */}
      </div>
      <div className='cursor-pointer sm:hidden' onClick={ () => showMenu(!menuDisplay)}>
        <ThemeImage alt='Menu hamburguer'srcLight={MenuIconLight} srcDark={MenuIconDark}/>
      </div>
      </div>
      <MenuBar display={!menuDisplay}/>
    </div>
    
  )
}
