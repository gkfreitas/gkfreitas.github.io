import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import favicon from './favicon.ico'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gabriel Kelvin Freitas',
  description: 'Desenvolvedor Full-Stack apaixonado por inovação e soluções digitais. Experiência em front-end e back-end, criação de interfaces de usuário envolventes e servidores escaláveis. Explore meu portfólio de projetos e habilidades.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="br">
      <head>
        <link rel='icon' href={favicon.src} sizes='any'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
