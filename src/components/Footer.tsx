import { Poppins } from 'next/font/google'
import Image from 'next/image'
import GithubIcon from '../../public/GithubIconFooter.svg'
import ArrowUpIcon from '../../public/arrowUpIcon.svg'
import ArrowUpIconDark from '../../public/arrowUpIconDark.svg'
import LinkedinIcon from '../../public/linkedinLightIcon.svg'
import WhatsAppIcon from '../../public/whatsLightIcon.svg'
import { ThemeImage } from './theme-image'
const poppins = Poppins({subsets: ['latin'],weight: '700'})
export default function Footer() {
  return (
    <div className='mt-[80px] '>
      <div className='border-t-[1px] border-[#262626] dark:border-[#fff] absolute w-full left-0'></div>
      <div className=' px-[25px] py-[15px] w-full flex justify-around'>
      <div className='flex items-center'>
          <div className={`${poppins.className} dark:hover:text-[#C4B5FD] duration-200 hover:text-[#7C3AED] text-[48px] text-[#262626] dark:text-white`}>gk<span className={`${poppins.className} text-[32px] text-[#7C3AED]`}>.</span></div>
          <div className='flex items-center ml-[30px]'>
            <p className='text-[#525252] mr-[15px] dark:text-[#D4D4D4]'>Voltar ao topo</p>
            <ThemeImage srcDark={ArrowUpIconDark} srcLight={ArrowUpIcon} alt='Icone de flecha para cima'/>
          </div>
        </div>
        <div className='hidden sm:flex'>
          <Image className='mr-[40px]' src={LinkedinIcon} alt='Icone do linkedin'/>
          <Image className='mr-[40px]' src={GithubIcon} alt='Icone do GitHub'/>
          <Image src={WhatsAppIcon} alt='Icone do WhatsApp'/>
        </div>
      </div>
    </div>
  )
}
