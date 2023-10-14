'use client'

import Header from '@/components/Header'
import Main from '@/components/Main'
import NextSection from '@/components/NextSection'
import Services from '@/components/Services'

export default function Home() {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <Header/>
      <Main />
      <NextSection sectionName='Serviços' scrollFunction={() => console.log('Scroll para serviços')}/>
      <Services />
    </div>
  )
}
