import { StaticImageData } from "next/image"
import { ThemeImage } from "./theme-image"

type PropsButton = {
  width: number,
  height: number,
  className: string
  text: string
  iconDark: StaticImageData
  iconLight: StaticImageData
  alt: string
  handleFunction(): void
}

export default function OtherButton(props: PropsButton) {
  return (
    <div>
      <button onClick={props.handleFunction} className={`flex uppercase justify-between items-center mt-[30px] rounded-[5px] border-[1px] border-[#737373] text-[13px] font-bold dark:text-[#EDE9FE] text-[#6D28D9] px-[16px] py-[12px] hover:border-[#4C1D95] hover:shadow-2xl shadow-[#4d1d95] ${props.className}`}>
        {props.text}
        <ThemeImage alt="Icone de download" srcDark={props.iconDark} srcLight={props.iconLight} className={`ml-[10px]`} height={props.height} width={props.width}/>
      </button>
    </div>
  )
}
