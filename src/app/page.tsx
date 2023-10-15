'use client'

import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import NextSection from '@/components/NextSection'
import Projects from '@/components/Projects'
import Services from '@/components/Services'

export default function Home() {
  return (
    <div className='max-w-[1280px] mx-auto container'>
      <Header/>
      <Main />
      <NextSection sectionName='Serviços' />
      <Services />
      <NextSection sectionName='Projetos' />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  )
}
