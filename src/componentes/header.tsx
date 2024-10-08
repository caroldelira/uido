import logoUido from '../imagens/logoUIDO.png';

export function Header() {

  return (
     <header className="divHeader">
        <div className='logoHeader'>
          <img src={logoUido} alt="logo da empresa UIDO onde tem seu nome colorido" />
        </div>
        <div className='divLink'>
          <a href="#divBanner">Início</a>
          <a href="#divContent">Quem somos</a>
          <a href="#divServicos">Serviços</a>
          <a href="#divProjetos ">Projetos</a>
          <a href="#orcamento ">Orçamento</a>
        </div>
      </header>
  )
}