'use client'

import Image from 'next/image'
import Link from 'next/link'
import linkedinLightIcon from '../../public/favicons/linkedinLightIcon.svg'
import whtasLightIcon from '../../public/favicons/whatsLightIcon.svg'
import { poppinsBold, poppinsMedium } from '../utils/fonts'

export default function Contact() {

  const returnUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href
    }
  }
  
  return (
    <div id='contato' className='flex flex-col items-center justify-center  mx-auto px-[24px] xl:flex-row-reverse xl:justify-around'>
      
      <form action="https://formsubmit.co/gabrielkelvinfreitas@gmail.com" method="POST" className='flex flex-col mt-[16px] w-full max-w-[500px]'>
        <input type="hidden" name="_next" value={returnUrl()} />
        <input type="hidden" name='_captcha' value={false as any}/>
      <h1 className={`${poppinsMedium.className} text-[24px] text-center mt-[70px] `}>Vamos nos conhecer</h1>
        <label htmlFor="">
          <input required type="text" name="nome" id="" placeholder='Nome:' className='w-full mt-[16px] py-[20px] px-[10px] bg-[#404040] rounded-[8px] focus:outline-2 focus:outline-[#5B21B6] focus:outline text-white'/>
        </label>
        <label htmlFor="">
          <input required type="email" name="email"  id="" placeholder='Email:' className='w-full mt-[16px] py-[20px] px-[10px] bg-[#404040] rounded-[8px] border-0 focus:outline-2 focus:outline-[#5B21B6] focus:outline text-white'/>
        </label>
        <label htmlFor="">
          <textarea name='message' required placeholder='Mensagem:' className='w-full resize-none mt-[16px] py-[10px] h-[150px] px-[10px] bg-[#404040] rounded-[8px] border-0 focus:outline-2 focus:outline-[#5B21B6] focus:outline text-white'></textarea>
        </label>
        <div>
        <button type='submit' className='mt-[16px] bg-[#A78BFA] py-[10px] px-[20px] rounded-[8px] uppercase font-bold text-[14px]'>Enviar</button>
        </div>
      </form>
      <div className='hidden xl:block'>
        <h1 className={`${poppinsBold.className} text-[32px] text-[#7C3AED]`}>Me contate</h1> 
        <p className={`${poppinsMedium.className} text-[#404040] text-[16px] dark:text-white`}>Posso te ajudar ou você pode me ajudar?<br/>Se sim, me chame por meio dessas redes sociais:</p>
        <div className='flex mt-[24px]'>
          <Link href='https://www.linkedin.com/in/gkfreitas/'>
            <Image src={linkedinLightIcon} alt='Icone do LinkedIn' className='mr-[12px]'/>
          </Link>
          <Link href='https://wa.me/11991724263'>
            <Image src={whtasLightIcon} alt='Icone do whatsapp'/>
          </Link>
        </div>
      </div>
    </div>
  )
}
