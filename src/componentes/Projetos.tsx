/* eslint-disable jsx-a11y/heading-has-content */

import imgPortal from '../imagens/projetoDiaspora.png';
import imgProlimpa from '../imagens/projetoProlimpa.png';
import imgAirgang from '../imagens/projetoAirGang.png';
import iconBehance from '../imagens/iconBehance.png';
import iconWhatsapp from '../imagens/iconWhatsapp.png';
  
export function Projetos() {
  return (
    <div id="divProjetos">
      <h2>Projetos reais</h2>
      <div className='divCardProjeto'>
        <div className='imgCardProjeto'>
          <img src={imgPortal} alt="capa de projeto do blog portal diaspora" />
        </div>
        <div className='divcardProjetoText'>
          <div className='divCardProjetoSpan'>
            <h3>Portal Diaspora</h3>
            <span className='subTitulo'>UI/ UX design / Desenvolvimento No-Code Web e Mobile</span>
            <span>Este Blog foi cuidadosamente desenvolvido para difundir e compartilhar a riqueza da cultura africana.</span>
            <span className='detalhes'>Feito pela UIDO do design ao desenvolvimento</span>
          </div>
          <div className='divLinkProjetos'>
            <a href="https://www.behance.net/gallery/194949013/Blog" target="_blank" rel="noreferrer">Ver projeto</a>
            <a href="https://portaldiaspora.com.br/" target="_blank" rel="noreferrer">Ver site</a>
          </div>
        </div>
      </div>
      <div className='divCardProjeto'>
        <div className='imgCardProjeto'>
          <img src={imgProlimpa} alt="capa de projeto do blog portal diaspora" />
        </div>
        <div className='divcardProjetoText'>
          <div className='divCardProjetoSpan'>
            <h3>ProLimpa</h3>
            <span className='subTitulo'>UI/ UX design / Desenvolvimento No-Code</span>
            <span>ProLimpa visa praticidade e eficiência aos clientes, proporcionando uma maneira intuitiva para facilitar a compra.</span>
            <span className='detalhes'>Feito pela UIDO do design ao desenvolvimento</span>
          </div>
          <div className='divLinkProjetos'>
            <a href="https://www.behance.net/gallery/194949915/E-Commerce-Catalogo" target="_blank" rel="noreferrer">Ver projeto</a>
            <a href="https://prolimpa.com/" target="_blank" rel="noreferrer">Ver site</a>
          </div>
        </div>
      </div>
      <div className='divCardProjeto'>
        <div className='imgCardProjeto'>
          <img src={imgAirgang} alt="capa de projeto do blog portal diaspora" />
        </div>
        <div className='divcardProjetoText'>
          <div className='divCardProjetoSpan'>
            <h3>AirGang</h3>
            <span className='subTitulo'>UI/UX design</span>
            <span>Projeto Web 3, que trouxe inovação para a criação de comunidade em poucos minutos em NFT.</span>
          </div>
          <div className='divLinkProjetos'>
            <a href="https://www.behance.net/gallery/194950615/LP-para-Web-30" target="_blank" rel="noreferrer">Ver projeto</a>
          </div>
        </div>
      </div>

      <div className='ondeNosAchar'>
        <h2>Onde você pode nos achar</h2>
        <div className='linksOndeNosAchar'>
          <a href="https://www.behance.net/uidodesenvo" target="_blank" rel="noreferrer">
            <img src={iconBehance} alt="" />
          </a>
          <a href="https://wa.me/5571981365581?text=Olá,%20quero%20mais%20informações" target="_blank" rel="noreferrer">
            <img src={iconWhatsapp} alt="" />
          </a> 
        </div>
      </div>
    </div>
  )
}