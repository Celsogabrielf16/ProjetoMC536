import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='FooterComponent'>
      <div className="footer__detail"></div>
      <div className="footer__informations">
        <div className="information-project">
          <h1 className='logo'>Fi<b className='moneyDetail'>$</b>cais da Tran<b className='moneyDetail'>$</b>parência</h1>
          <p className="information-description">Site de avaliações de filmes implementado Orientado a Objetos, desenvolvido como projeto final do curso de Programação Orientada a Objetos, do Bacharelado em Ciência da Computação na Universidade Estadual de Campinas - UNICAMP</p>
        </div>
        <div className="information-developers">
            <h4 className="information-title">De<b className='moneyDetail'>$</b>envolvedores</h4>
            <div className="information-text">
              <p>Artur Dias De Oliveira</p>
              <p>Celso Gabriel Prado</p>
              <p>Felipe Pires Araujo</p>
              <p>Luiza Viana Souza</p>
              <p>Vitor Ferreira Lacerda</p>
            </div>
        </div>
        <div className="information-tools">
            <h4 className="information-title">Usados no de<b className='moneyDetail'>$</b>envolvimento</h4>
            <div className="information-text">
              <p>Figma</p>
              <p>React</p>
              <p>SQL</p>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;