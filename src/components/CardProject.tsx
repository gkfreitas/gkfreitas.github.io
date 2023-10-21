import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { soraBold } from '../utils/fonts'
type PropsCard = {
  imagePreview: StaticImageData
  githubLinkCode: string
  liveAppLink: string
  alt: string
  name: string
  description: string
  techIcons: StaticImageData[]
  stack: string
}

export default function CardProject(props: PropsCard) {
  const { imagePreview, name, description, techIcons, alt, liveAppLink, githubLinkCode, stack} = props

  
  return (
    <div className=' border-[1px] border-[#525252] flex flex-col mt-[24px] w-[500px]'>
      <Link href={liveAppLink} target='_blank'>
      <Image src={imagePreview} alt={alt} className=' brightness-50 hover:brightness-100 cursor-pointer duration-200' />
          </Link>
        
      <div className='py-[24px] px-[16px]'>
        <h1 className={`${soraBold.className}`}>{name} - <span className='text-[12px] text-slate-500'>{stack}</span></h1>
        <p className='mt-[16px] font-[16px] text-[#262626] dark:text-[#E5E5E5] flex flex-wrap'>{description}</p>
        <div className='flex'>
        {techIcons.map((icon, i) => (
          <Image src={icon} alt='icone' key={i} className=' mt-[30px] mr-[16px] w-[30px] h-[30px]'/>
        ))}
        </div>
        <div className='flex mt-[30px]'>
          <Link href={liveAppLink} target='_blank'>
            <button className='uppercase border-[1px] border-[#525252] py-[10px] px-[16px] rounded-[5px] font-bold mr-[8px]'>Deploy</button>
          </Link>
          <Link href={githubLinkCode} target='_blank'>
            <button className='uppercase dark:text-black text-white dark:bg-[#DDD6FE] bg-[#5B21B6] py-[10px] px-[16px] rounded-[5px] font-bold'>Github Code</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
