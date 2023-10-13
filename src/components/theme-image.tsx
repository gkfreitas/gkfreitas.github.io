import Image, { ImageProps } from 'next/image'
import styles from './theme-image.module.css'
 
type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: string
  srcDark: string
  alt: string
}
 
export const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props
 
  return (
    <>
      <Image {...rest} src={srcLight} className={`${styles.imgLight} cursor-pointer`} alt={props.alt}/>
      <Image {...rest} src={srcDark} className={`${styles.imgDark} cursor-pointer`} alt={props.alt}/>
    </>
  )
}