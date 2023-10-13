import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type PropsButton = {
  link: string,
  backgroundColor: string,
  border: boolean,
  borderColor?: string,
  icon: boolean,
  iconSrc: StaticImageData,
  aditionalIcon: boolean,
  aditionalIconSrc: StaticImageData,
  text: string,
  paddingY: string,
  paddingX: string,
  alt: string,
}

export default function ButtonMain(props: PropsButton) {
  return (
    <Link href={props.link}>
      <button className={`mt-[30px] px-[${props.paddingX}px] py-[${props.paddingY}px] bg-[${props.backgroundColor}] ${props.border ? ` border-[1px] border-[${props.borderColor}]` : 'border-0'}`}>
        {props.icon ? <Image src={props.iconSrc} alt={props.alt} /> : <span className='text-[14px] font-bold uppercase'>{props.text}</span>}
        {props.aditionalIcon ? <Image src={props.aditionalIconSrc} alt='icone adicional'/> : ''}
      </button>
    </Link>
  )
}
