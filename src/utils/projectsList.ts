import javascriptIcon from '../../public/favicons/techIcons/javascript-js.svg'
import nextJsIcon from '../../public/favicons/techIcons/next-js.svg'
import reactIcon from '../../public/favicons/techIcons/react.svg'
import tailwindIcon from '../../public/favicons/techIcons/tailwind-css.svg'
import typescriptIcon from '../../public/favicons/techIcons/typescript.png'
import portifiolioPreview from '../../public/preview/PortifolioMain.png'
import trybeWalletPreview from '../../public/preview/TrybeWallet-wallet.png'

const portifolio = {
  imagePreview: portifiolioPreview,
  githubLinkCode: 'https://github.com/gkfreitas/gkfreitas.github.io',
  liveAppLink: 'https://gkfreitas.github.io/',
  alt: 'Preview do site do meu portifólio',
  name: 'Portifólio',
  description: 'Portifólio que apresenta minhas habilidades como programador e projetos feitos por mim.',
  techIcons: [reactIcon, nextJsIcon, typescriptIcon, tailwindIcon],
  stack: 'Front End',
}

const trybeWallet = {
  imagePreview: trybeWalletPreview,
  githubLinkCode: 'https://github.com/gkfreitas/trybewallet/',
  liveAppLink: 'https://gkfreitas.github.io/trybewallet',
  alt: 'Preview do site do meu projeto TrybeWallet',
  name: 'TrybeWallet',
  description: 'TrybeWallet é um site feito para registro de suas despesas diárias internacionais',
  techIcons: [reactIcon, tailwindIcon, javascriptIcon],
  stack: 'Front End',
}

export const projetcs = [trybeWallet]