import { useState } from 'react'
import icon from '../../public/favicons/BackEndIcon.svg'
import image from '../../public/favicons/programmingMain.svg'
import ButtonFilter from './ButtonFilter'
import CardProject from './CardProject'

export default function Projects() {

  const projectData = {
    imagePreview: image,
    name: 'Teste',
    description: 'Descrição aaa',
    techIcons: [icon, icon, icon],
    alt: 'Imagem do projeto',
    liveAppLink: 'https://www.youtube.com/',
    githubLinkCode: 'https://www.youtube.com/',
    stack: 'full stack'
  }

  const projects = [projectData, projectData, projectData, projectData, projectData, projectData]

  const filters = ['Todos','Front End', 'Back End', 'Full Stack']
  const [filter, setFilter] = useState('Todos')
  return (
    <div id='projetos' className='mt-[40px] mx-[14px]'>
      <div className='flex justify-center'>
        {filters.map((name) => (
          <ButtonFilter name={name} setFilter={() => setFilter(name)} key={name} selected={filter == name}/>
        ))}
      </div>
      <div className='flex  items-center flex-wrap justify-around'>
      {projects.map(({imagePreview, name, description, techIcons, alt, liveAppLink, githubLinkCode}) => (
        <CardProject imagePreview={imagePreview} name={name} description={description} techIcons={techIcons} alt={alt} liveAppLink={liveAppLink} githubLinkCode={githubLinkCode} key={name}/>
      ))}
      </div>
    </div>
  )
}
