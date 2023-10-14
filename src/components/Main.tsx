'use client'

import { Poppins } from 'next/font/google'
import GithubIcon from '../../public/BsGithub.svg'
import DownloadIcon from '../../public/DownloadIcon.svg'
import DownloadIconLight from '../../public/DownloadIconLight.svg'
import LinkedinIcon from '../../public/LinkedinIcon.svg'
import ButtonMain from './ContactButton'
import OtherButton from './OtherButton'
const poppinsSemiBold = Poppins({subsets: ['latin'],weight: '600'})
const poppinsBold = Poppins({subsets: ['latin'],weight: '700'})
const poppinsMedium = Poppins({subsets: ['latin'],weight: '500'})

const handleDownload = () => {
  window.open('/currículo.pdf')
}
export default function Main() {
  const apresentation = 'Olá 👋, meu nome é'
  const name = 'Gabriel K Freitas'
  return (
    <div className='mx-[28px]'>
      <h1 className={`text-[31px] dark:text-[#d4d4d4] text-[#404040] mt-[60px] ${poppinsSemiBold.className}`}>
        {apresentation}
      </h1>
      <h1 className={`${poppinsBold.className} text-[32px] dark:text-[#fafafa] text-[#262626]`}>{name}</h1>
      <p className={`mt-[20px] text-[18px] sm:text-[20px] ${poppinsMedium.className} text-[#262626] dark:text-[#fff]`}><span className='dark:text-[#DDD6FE] text-[#5B21B6]'>Desenvolvedor Full Stack</span> (Typescript, ReactJS, NodeJS e Python). Estou disponível para criação de aplicações web completas (Front End &  Back End) ou simples e também para <span className='dark:text-[#A78BFA] text-[#4C1D95]'>oportunidades de contratação.</span></p>
      <div className='flex'>
        <ButtonMain link='https://github.com/gkfreitas' icon={GithubIcon} alt='icone github'/>
        <ButtonMain link='https://www.linkedin.com/in/gkfreitas/' icon={LinkedinIcon} alt='icone github'/>
        <OtherButton handleFunction={handleDownload} iconDark={DownloadIcon} iconLight={DownloadIconLight} alt='Icone de download' text='Download CV'/>
      </div>
    </div>
  )
}
