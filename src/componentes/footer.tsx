import logoUido from '../imagens/logoUIDO.png';

export function Footer() {
  return (
    <div className='divFooter'>
      <a className='linkFooter' href="#divBanner">
        <img src={logoUido} alt="logo da empresa UIDO escrito UIDO" />
      </a>
      <span className='spanFooter'>Vamos criar um projeto juntos!</span>
    </div>
  )
}