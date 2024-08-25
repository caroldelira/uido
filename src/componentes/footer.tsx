import iconWhatsapp from '../imagens/iconWhatsapp.png';
import logoUido from '../imagens/logoUIDO.png';

export function Footer() {
  return (
    <div className='divFooter'>
      <img className='logoFooter' src={logoUido} alt="logo da empresa UIDO escrito UIDO" />
      <span className='spanFooter'>Vamos criar um projeto juntos?</span>
      <a className='linkFooter' href="">
        <img src={iconWhatsapp} alt="logo do whatsapp" />
      </a>
    </div>
  )
}