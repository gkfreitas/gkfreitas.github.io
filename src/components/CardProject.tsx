import { Sora } from 'next/font/google'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

const soraBold = Sora({subsets: ['latin'],weight: '700'}) 
type PropsCard = {
  imagePreview: StaticImageData
  githubLinkCode: string
  liveAppLink: string
  alt: string
  name: string
  description: string
  techIcons: StaticImageData[]
}

export default function CardProject(props: PropsCard) {
  const { imagePreview, name, description, techIcons, alt, liveAppLink, githubLinkCode} = props

  
  return (
    <div className=' border-[1px] border-[#525252] flex flex-col mt-[24px]'>
      <Image src={imagePreview} alt={alt} className='w-[345px] h-[310px] object-cover bg-[#acacac]'/>
      <div className='py-[24px] px-[16px]'>
        <h1 className={`${soraBold.className}`}>{name}</h1>
        <p className='mt-[16px] font-[16px] text-[#262626] dark:text-[#E5E5E5] flex flex-wrap'>{description}</p>
        <div className='flex'>
        {techIcons.map((icon, i) => (
          <Image src={icon} alt='icone' key={i} className=' mt-[30px] mr-[16px] w-[30px] h-[30px]'/>
        ))}
        </div>
        <div className='flex mt-[30px]'>
          <Link href={liveAppLink} target='_blank'>
            <button className='uppercase border-[1px] border-[#525252] py-[10px] px-[16px] rounded-[5px] font-bold mr-[8px]'>Live Demo</button>
          </Link>
          <Link href={githubLinkCode} target='_blank'>
            <button className='uppercase dark:text-black text-white dark:bg-[#DDD6FE] bg-[#5B21B6] py-[10px] px-[16px] rounded-[5px] font-bold'>View Code</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
