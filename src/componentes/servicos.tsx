/* eslint-disable jsx-a11y/heading-has-content */
import icon1 from '../imagens/icon1.png';
import icon2 from '../imagens/icon2.png';
import icon3 from '../imagens/icon3.png';

export function Servicos() {
  return (
    <div id='divServicos'>
      <h2>Como podemos te ajudar?</h2>

      <div className='divCards'>
        <div className='card'>
          <img src={icon1} alt="icone" />
          <h3>Design de interfaces web</h3>
          <span>Interfaces para websites e landing pages para qualquer nicho, focado em seu público e forte apelo visual.</span>
        </div>
        <div className='card'>
          <img src={icon2} alt="icone" />
          <h3>Design de interfaces mobile</h3>
          <span>Prototipação em alta fidelidade para celulares, com foco em usabilidade e objetivos de negocio.</span>
        </div>
        <div className='card'>
          <img src={icon3} alt="icone" />
          <h3>Desenvolvimento no-code</h3>
          <span>Implementação sem templates ou modelos prontos. Garantindo a qualidade e atenção aos detalhes da interface.</span>
        </div>
      </div>
    </div>
  )
}