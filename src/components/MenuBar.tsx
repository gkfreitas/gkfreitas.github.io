type MenuBarProps = {
  display: boolean
}
export default function MenuBar(props: MenuBarProps) {
  
  const links = ['🏠 Home', '💻 Serviços', '🌐 Projetos', '📱 Contato']
  return (

      <ul className={`overflow-hidden text-center border-b pb-[10px] dark:border-[#404040] border-[#DDD6FE] sm:hidden ${props.display ? 'block duration-300 h-[180px]' : 'h-0 duration-300'} `}>
        {links.map((link) => (
        <li className="font-medium cursor-pointer text-[18px] mt-[15px] dark:hover:text-[#C4B5FD] duration-200 hover:text-[#7C3AED]" key={link}>{link}</li>
        ))}
      </ul>
  )
}
