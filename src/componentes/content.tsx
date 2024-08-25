/* eslint-disable jsx-a11y/heading-has-content */
import imgCarol from '../imagens/carolFoto.png';
import imgAlex from '../imagens/alexFoto.png';


export function Content() {
  return (
     <div id="divContent">
      <div className='divImg'>
        <img className='imgCarol' src={imgCarol} alt="imagem de uma mulher" />
        <img className='imgAlex' src={imgAlex} alt="imagem de um homem" />
      </div>
      <div className='divText'>
        <span>Quem somos?</span>
        <h2>Um pouco sobre Nós...</h2>
        <span>O UIDO foi criado por Carol De Lira, desenvolvedora experiente em UX/UI Design, e Alexsandro Santos, designer de UX/UI com uma visão única. Ambos compartilham a paixão por ajudar empresas a melhorarem virtualmente, transformando essa dedicação em uma empresa focada no design e desenvolvimento UX/UI.
        <br /><br />
        A metodologia do UIDO é baseada em inovação, acessibilidade e soluções tecnológicas, sempre visando projetos assertivos e atemporais. A dupla criativa pensa em cada detalhe, garantindo resultados de alta qualidade para seus clientes.</span>
      </div>
    </div>
  )
}