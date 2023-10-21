import { projetcs } from '@/utils/projectsList'
import { useState } from 'react'
import ButtonFilter from './ButtonFilter'
import CardProject from './CardProject'

export default function Projects() {

  const filters = ['Todos','Front End', 'Back End', 'Full Stack']
  const [filter, setFilter] = useState('Todos')

  const projectsFiltered = filter != 'Todos' ? projetcs.filter(({stack}) => stack.toLocaleLowerCase() === filter.toLocaleLowerCase()) : projetcs
  return (
    <div id='projetos' className='mt-[40px] mx-[14px]'>
      <div className='flex justify-center'>
        {filters.map((name) => (
          <ButtonFilter name={name} setFilter={() => setFilter(name)} key={name} selected={filter == name}/>
        ))}
      </div>
      <div className='flex  items-center flex-wrap justify-around'>
      {projectsFiltered.map(({imagePreview, name, description, techIcons, alt, liveAppLink, githubLinkCode, stack}) => (
        <CardProject imagePreview={imagePreview} name={name} description={description} techIcons={techIcons} alt={alt} liveAppLink={liveAppLink} githubLinkCode={githubLinkCode} key={name} stack={stack}/>
      ))}
      </div>
    </div>
  )
}
