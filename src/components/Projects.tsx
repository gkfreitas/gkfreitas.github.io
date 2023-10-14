import { useState } from 'react'
import ButtonFilter from './ButtonFilter'

export default function Projects() {

  const filters = ['Todos','Front End', 'Back End', 'Full Stack']
  const [filter, setFilter] = useState('Todos')
  return (
    <div className='flex justify-center mt-[40px]'>
      {filters.map((name) => (
        <ButtonFilter name={name} setFilter={() => setFilter(name)} key={name} selected={filter == name}/>
      ))}
    </div>
  )
}
