import BackendIcon from '../../public/BackEndIcon.svg'
import PythonIcon from '../../public/PythonIcon.svg'
import DevIcon from '../../public/devIcon.svg'
import ServiceCard from './ServiceCard'
export default function Services() {

  const descriptionDev = 'Crio interfaces atraentes e funcionais. Utilizo HTML, CSS e JavaScript, além do framework ReactJS, para criar designs elegantes e responsivos.'

  const descriptionBackEnd = 'Utilizando Node.js, Express.js e MySQL, sou capaz de desenvolver APIs robustas, eficientemente gerenciar bancos de dados e otimizar o desempenho do servidor.'

  const descriptionWebScraping = 'Ultilizando Python eu posso coletar conteúdo e dados da internet, e então manipulá-los e analisá-los conforme necessário.'
  return (
    <div>
      <ServiceCard iconSrc={DevIcon} alt='Icone ilustrando um codigo' title='Desenvolvimento Web' borderColor='border-[#F5F5F5]' description={descriptionDev} titleColor='text-[#A78BFA]'/>
      <ServiceCard iconSrc={BackendIcon} alt='Icone ilustrando o que seria o backend' title='Back End' borderColor='border-[#8B5CF6]' description={descriptionBackEnd} titleColor='text-[#F5F5F5]'/>
      <ServiceCard iconSrc={PythonIcon} alt='Icone ilustrando python' title='Web Scraping' borderColor='border-[#F5F5F5]' description={descriptionWebScraping} titleColor='text-[#A78BFA]'/>
    </div>
  )
}
