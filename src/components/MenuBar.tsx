type MenuBarProps = {
  display: boolean
}
export default function MenuBar(props: MenuBarProps) {
  
  const links = ['💻 Serviços', '🌐 Projetos', '📱 Contato']
  const handleScroll = (name: string) => {
    const nameEl = name.split(' ')[1].toLocaleLowerCase()
    const element = document.getElementById(nameEl.toLocaleLowerCase())
    element?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
  return (

      <ul className={`overflow-hidden text-center border-b pb-[10px] dark:border-[#404040] border-[#DDD6FE] sm:hidden ${props.display ? 'block duration-300 h-[180px]' : 'h-0 duration-300'} `}>
        {links.map((link) => (
        <li onClick={() => handleScroll(link)} className="font-medium cursor-pointer text-[18px] mt-[15px] dark:hover:text-[#C4B5FD] duration-200 hover:text-[#7C3AED]" key={link}>{link}</li>
        ))}
      </ul>
  )
}
