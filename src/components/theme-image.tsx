import Image, { ImageProps, StaticImageData } from 'next/image'
import styles from './theme-image.module.css'
 
type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  className?: string
  srcLight: StaticImageData
  srcDark: StaticImageData
  alt: string
}
 
export const ThemeImage = (props: Props) => {
  const { className, srcLight, srcDark, ...rest } = props
 
  return (
    <>
      <Image {...rest} src={srcLight} className={`${styles.imgLight} cursor-pointer ${className}`} alt={props.alt}/>
      <Image {...rest} src={srcDark} className={`${styles.imgDark} cursor-pointer ${className}`} alt={props.alt}/>
    </>
  )
}