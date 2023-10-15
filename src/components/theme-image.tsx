import Image, { ImageProps, StaticImageData } from 'next/image'
import styles from '../styles/theme-image.module.css'
 
type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  height?: number
  width?: number
  className?: string
  srcLight: StaticImageData
  srcDark: StaticImageData
  alt: string
}
 
export const ThemeImage = (props: Props) => {
  const { className, srcLight, srcDark, ...rest } = props
 
  return (
    <>
      <Image {...rest} src={srcLight} height={props.height} width={props.width} className={`${styles.imgLight} cursor-pointer ${className}`} alt={props.alt}/>
      <Image {...rest} src={srcDark} height={props.height} width={props.width} className={`${styles.imgDark} cursor-pointer ${className}`} alt={props.alt}/>
    </>
  )
}