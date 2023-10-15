import { StaticImageData } from "next/image";
import { poppinsMedium, poppinsSemiBold } from '../utils/fonts';
import { ThemeImage } from './theme-image';


type propsCard = {
  iconDark: StaticImageData
  iconLight: StaticImageData
  alt: string
  title: string
  description: string
  borderColor: string
  titleColor: string
}

export default function ServiceCard(props: propsCard) {
  return (
    <div className={`border-[3px] rounded-[15px] flex flex-col items-center justify-center p-[3px] w-[340px] h-[340px] mx-auto mt-[40px] ${props.borderColor} `}>
      <ThemeImage srcDark={props.iconDark} srcLight={props.iconLight} alt={props.alt}/>
      <h1 className={`${poppinsSemiBold.className} text-[24px] ${props.titleColor} p-[10px]`}>{props.title}</h1>
      <p className={`${poppinsMedium.className} text-[17px] px-[3px] text-center`}>{props.description}</p>
    </div>
  )
}
