import React from 'react';
import '../styles/AboutUs.css';
import truck from '../img/truck2.png';

const AboutUs: React.FC = () => {
  return (
    <div className='about-us-main-container'>
       <h2 className='title-about-us'>SOBRE NÓS</h2>
            <div className='content-about-us'>
                <div className='left-container-about-us'>
                       <img src={truck} alt="truck" className='image-truck' />
                </div>
                <div className='right-container-about-us'>
                    <p>Atuando no ramo de derivados de petróleo há mais de 20 anos, nós da Satyro Representações Comerciais, somos referência no quesito segurança, praticidade e alta qualidade.</p>
                    <p>O nosso fundador, Eraldo Satyro da Silva, possui ampla experiência no mercado, atuando com diversos clientes de diversos segmentos, todos no estado do Mato Grosso do Sul.</p>
                    <p>Ao longo desta trajetória, conseguimos realizar inúmeros negócios, fazer amizades e estabeler conexões, resultado de um ótimo trabalho realizado diariamente, com todos os nossos clientes e parceiros.</p>
                    <p>Hoje, buscamos ainda mais continuarmos esta nossa história, cheia de conquistas, realizações e sucessos, e seguimos em frente, cada vez mais, realizando sonhos por todo canto do nosso estado.</p>    
                </div>
            </div>
    </div>
  );
};

export default AboutUs;
