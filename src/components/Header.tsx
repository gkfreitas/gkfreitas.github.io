"use client"

import { Poppins } from 'next/font/google'
import { useState } from 'react'
import MenuIconDark from '../../public/menu-hamburguer-dark.svg'
import MenuIconLight from '../../public/menu-hamburguer-light.svg'
import MenuBar from './MenuBar'
import { ThemeImage } from './theme-image'
const poppins = Poppins({subsets: ['latin'],weight: '700'})
export default function Header() {
  
  const [menuDisplay, showMenu] = useState(false)
  const links = ['Home', 'Serviços', 'Projetos', 'Contato']

  return (
    <div>
      <div className='flex justify-between m-[25px] sm:m-[50px] items-center duration-200'>
      <div className='cursor-pointer'>
        <div className={`${poppins.className} dark:hover:text-[#C4B5FD] duration-200 hover:text-[#7C3AED] text-[48px] text-[#262626] dark:text-white`}>gk<span className={`${poppins.className} text-[32px] text-[#7C3AED]`}>.</span></div>
      </div>
      <div className='flex'>
      <ul className='hidden sm:flex items-center'>
        {links.map((link) => (
          <li className='font-medium cursor-pointer text-[18px] ml-[30px] dark:hover:text-[#C4B5FD] duration-200 hover:text-[#7C3AED]' key={link}>{link}</li>
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
