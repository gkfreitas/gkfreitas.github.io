'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type PropsButton = {
  link: string,
  icon: StaticImageData
  alt: string
}

export default function ButtonMain(props: PropsButton) {
  return (
    <Link href={props.link} target='_blank'>
      <button className={`mt-[30px] py-[10px] px-[10px] dark:bg-[#DDD6FE] bg-[#7C3AED] rounded-[5px] mr-[25px] cursor-pointer`}>
          {<Image src={props.icon} alt={props.alt} />}
      </button>
    </Link>
  )
}
