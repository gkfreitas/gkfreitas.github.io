'use client'

import Image from 'next/image'
import GithubIcon from '../../public/favicons/BsGithub.svg'
import DownloadIcon from '../../public/favicons/DownloadIcon.svg'
import DownloadIconLight from '../../public/favicons/DownloadIconLight.svg'
import LinkedinIcon from '../../public/favicons/LinkedinIcon.svg'
import eyeIconDark from '../../public/favicons/eyeIconDark.svg'
import eyeIconLight from '../../public/favicons/eyeIconLight.svg'
import programming from '../../public/favicons/programmingMain.svg'
import { poppinsBold, poppinsMedium, poppinsSemiBold } from '../utils/fonts'
import ButtonMain from './ContactButton'
import OtherButton from './OtherButton'

const handleDownload = () => {
  window.open('/downloads/currículo.pdf')
}

const handleScroll = () => {
  const el = document.getElementById('projetos')
  el?.scrollIntoView({behavior: 'smooth', block: 'start'})
}
export default function Main() {
  const apresentation = 'Olá 👋, meu nome é'
  const name = 'Gabriel K Freitas'
  return (
    <div className='mx-[28px] flex justify-between'>
      <div>
        <h1 className={`text-[31px] dark:text-[#d4d4d4] text-[#404040] mt-[60px] ${poppinsSemiBold.className}`}>
          {apresentation}
        </h1>
        <h1 className={`${poppinsBold.className} text-[32px] dark:text-[#fafafa] text-[#262626]`}>{name}</h1>
        <p className={`max-w-[600px] mt-[20px] text-[18px] sm:text-[20px] ${poppinsMedium.className} text-[#262626] dark:text-[#fff]`}><span className='dark:text-[#DDD6FE] text-[#5B21B6]'>Desenvolvedor Full Stack</span> (Typescript, ReactJS, NodeJS e Python). Estou disponível para criação de aplicações web completas (Front End &  Back End) ou simples e também para <span className='dark:text-[#A78BFA] text-[#4C1D95]'>oportunidades de contratação.</span></p>
        <div className='flex'>
          <ButtonMain link='https://github.com/gkfreitas' icon={GithubIcon} alt='icone github'/>
          <ButtonMain link='https://www.linkedin.com/in/gkfreitas/' icon={LinkedinIcon} alt='icone github'/>
          <OtherButton handleFunction={handleScroll} iconDark={eyeIconDark} iconLight={eyeIconLight} alt='Icone de um olho' text='Projetos' className='hidden sm:flex mr-[25px] tracking-wider' height={20} width={20}/>
          <OtherButton handleFunction={handleDownload} iconDark={DownloadIcon} iconLight={DownloadIconLight} alt='Icone de download' text='Download CV' className='tracking-wider' height={20} width={20}/>
        </div>
      </div>
      <Image src={programming} alt='foto de uma pessoa programando' className='min-w-[300px] hidden lg:block'/>
    </div>
  )
}
