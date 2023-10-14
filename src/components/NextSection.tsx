import ArrowDownIcon from '../../public/arrowDownIcon.svg'
import ArrowDownLight from '../../public/arrowDownIconLight.svg'
import { ThemeImage } from "./theme-image"
type propsSection = {
  sectionName: string
  scrollFunction(): void
}

export default function NextSection(props: propsSection) {
  return (
    <div onClick={props.scrollFunction} className="flex flex-col items-center cursor-pointer mt-[70px]">
      <p className="dark:text-[#D4D4D4] text-[#262626] font-[12px]">{props.sectionName}</p>
      <ThemeImage srcLight={ArrowDownLight} srcDark={ArrowDownIcon} alt="Flecha apontada para baixo"/>
    </div>
  )
}
