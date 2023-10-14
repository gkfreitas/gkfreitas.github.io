import BackendIcon from '../../public/BackEndIcon.svg'
import BackEndIconLight from '../../public/BackEndLight.svg'
import DevIconLight from '../../public/DevIconLight.svg'
import PythonIcon from '../../public/PythonIcon.svg'
import PythonIconLight from '../../public/WebScrapingLight.svg'
import DevIcon from '../../public/devIcon.svg'
import ServiceCard from './ServiceCard'

export default function Services() {

  const descriptionDev = 'Crio interfaces atraentes e funcionais. Utilizo HTML, CSS e JavaScript, além do framework ReactJS, para criar designs elegantes e responsivos.'

  const descriptionBackEnd = 'Utilizando Node.js, Express.js e MySQL, sou capaz de desenvolver APIs robustas, eficientemente gerenciar bancos de dados e otimizar o desempenho do servidor.'

  const descriptionWebScraping = 'Ultilizando Python eu posso coletar conteúdo e dados da internet, e então manipulá-los e analisá-los conforme necessário.'
  return (
    <div>
      <ServiceCard iconDark={DevIcon}  iconLight={DevIconLight} alt='Icone ilustrando um codigo' title='Desenvolvimento Web' borderColor='dark:border-[#F5F5F5] border-[#D4D4D4]' description={descriptionDev} titleColor='dark:text-[#A78BFA] text-[#6D28D9]'/> 
      <ServiceCard iconDark={BackendIcon} alt='Icone ilustrando o que seria o backend' title='Back End' borderColor='border-[#8B5CF6]' description={descriptionBackEnd} titleColor='dark:text-[#F5F5F5] text-[#262626]' iconLight={BackEndIconLight}/>
      <ServiceCard iconDark={PythonIcon} alt='Icone ilustrando python' title='Web Scraping' borderColor='dark:border-[#F5F5F5] border-[#D4D4D4]' description={descriptionWebScraping} titleColor='dark:text-[#A78BFA] text-[#6D28D9]' iconLight={PythonIconLight}/>
    </div>
  )
}
