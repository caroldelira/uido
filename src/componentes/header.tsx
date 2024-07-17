/* eslint-disable jsx-a11y/anchor-is-valid */
import logoUido from '../imagens/logoUIDO.png';

export function Header() {
  return (
     <header className="divHeader">
        <div>
          <img src={logoUido} alt="logo da empresa UIDO onde tem seu nome colorido" />
        </div>
        <div className='divLink'>
          <a href="#">Início</a>
          <a href="#">Quem somos</a>
          <a href="#">Projetos</a>
          <a href="#">Serviços</a>

          <button>Entrar em contato</button>
        </div>
      </header>
  )
}