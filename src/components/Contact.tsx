import { Poppins } from 'next/font/google'
import Image from 'next/image'
import linkedinLightIcon from '../../public/linkedinLightIcon.svg'
import whtasLightIcon from '../../public/whatsLightIcon.svg'
const poppinsMedium = Poppins({subsets: ['latin'],weight: '500'})
const poppinsBold= Poppins({subsets: ['latin'],weight: '700'})
export default function Contact() {
  return (
    <div className='flex flex-col items-center justify-center  mx-auto px-[24px] xl:flex-row-reverse xl:justify-around'>
      
      <form action="" className='flex flex-col mt-[16px] w-full max-w-[500px]'>
      <h1 className={`${poppinsMedium.className} text-[24px] text-center mt-[70px] `}>Vamos nos conhecer</h1>
        <label htmlFor="">
          <input type="text" name="" id="" placeholder='Nome:' className='w-full mt-[16px] py-[20px] px-[10px] bg-[#404040] rounded-[8px] focus:outline-2 focus:outline-[#5B21B6] focus:outline text-white'/>
        </label>
        <label htmlFor="">
          <input type="text" name="" id="" placeholder='Email:' className='w-full mt-[16px] py-[20px] px-[10px] bg-[#404040] rounded-[8px] border-0 focus:outline-2 focus:outline-[#5B21B6] focus:outline text-white'/>
        </label>
        <label htmlFor="">
          <textarea placeholder='Mensagem:' className='w-full mt-[16px] py-[20px] px-[10px] bg-[#404040] rounded-[8px] border-0 focus:outline-2 focus:outline-[#5B21B6] focus:outline text-white'></textarea>
        </label>
        <div>
        <button className='mt-[16px] bg-[#A78BFA] py-[10px] px-[20px] rounded-[8px] uppercase font-bold text-[14px]'>Enviar</button>
        </div>
      </form>
      <div className='hidden xl:block'>
        <h1 className={`${poppinsBold.className} text-[32px] text-[#7C3AED]`}>Me contate</h1> 
        <p className={`${poppinsMedium.className} text-[#404040] text-[16px] dark:text-white`}>Posso te ajudar ou você pode me ajudar?<br/>Se sim, me chame por meio dessas redes sociais:</p>
        <div className='flex mt-[24px]'>
          <Image src={linkedinLightIcon} alt='Icone do LinkedIn' className='mr-[12px]'/>
          <Image src={whtasLightIcon} alt='Icone do whatsapp'/>
        </div>
      </div>
    </div>
  )
}
