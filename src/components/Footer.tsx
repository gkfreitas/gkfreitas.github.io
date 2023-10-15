import Image from 'next/image'
import Link from 'next/link'
import GithubIcon from '../../public/favicons/GithubIconFooter.svg'
import ArrowUpIcon from '../../public/favicons/arrowUpIcon.svg'
import ArrowUpIconDark from '../../public/favicons/arrowUpIconDark.svg'
import LinkedinIcon from '../../public/favicons/linkedinLightIcon.svg'
import WhatsAppIcon from '../../public/favicons/whatsLightIcon.svg'
import { poppinsBold } from '../utils/fonts'
import { ThemeImage } from './theme-image'

export default function Footer() {
  return (
    <div className='mt-[80px] '>
      <div className='border-t-[1px] border-[#262626] dark:border-[#fff] absolute w-full left-0'></div>
      <div className=' px-[25px] py-[15px] w-full flex justify-around'>
      <div className='flex items-center'>
          <div onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className={`${poppinsBold.className} dark:hover:text-[#C4B5FD] duration-200 hover:text-[#7C3AED] text-[48px] text-[#262626] dark:text-white cursor-pointer`}>gk<span className={`${poppinsBold.className} text-[32px] text-[#7C3AED]`}>.</span></div>
          <div className=' cursor-pointer flex items-center ml-[30px]' onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>
            <p className='text-[#525252] mr-[15px] dark:text-[#D4D4D4]'>Voltar ao topo</p>
            <ThemeImage srcDark={ArrowUpIconDark} srcLight={ArrowUpIcon} alt='Icone de flecha para cima'/>
          </div>
        </div>
        <div className='hidden sm:flex items-center'>
          <Link href='https://www.linkedin.com/in/gkfreitas/' className='mr-[40px] hover:shadow-sm'>
            <Image src={LinkedinIcon} alt='Icone do LinkedIn' />
          </Link>
          <Link href='https://github.com/gkfreitas' className='mr-[40px] hover:shadow-sm'>
            <Image  src={GithubIcon} alt='Icone do GitHub'/>
          </Link>
          <Link href='https://wa.me/11991724263' className=' shadow-white'>
          <Image src={WhatsAppIcon} alt='Icone do WhatsApp'/>
          </Link>
        </div>
      </div>
    </div>
  )
}
