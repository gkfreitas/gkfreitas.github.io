import ArrowDownIcon from '../../public/favicons/arrowDownIcon.svg'
import ArrowDownLight from '../../public/favicons/arrowDownIconLight.svg'
import { ThemeImage } from "./theme-image"

type propsSection = {
  sectionName: string
}

export default function NextSection(props: propsSection) {
  return (
    <div className="flex flex-col items-center  mt-[70px]">
      <p className="dark:text-[#D4D4D4] text-[#262626] font-[12px]">{props.sectionName}</p>
      <ThemeImage srcLight={ArrowDownLight} srcDark={ArrowDownIcon} alt="Flecha apontada para baixo"/>
    </div>
  )
}
