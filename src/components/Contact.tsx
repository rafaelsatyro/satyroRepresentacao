import React from 'react';
import '../styles/Contact.css';
import Email from '../img/email.png';
import bomb from '../img/bomba.png';

const Contact: React.FC = () => {
  return (
    <div className='main-container-contact'>
        <h2 className='contact-title'>ENTRE EM CONTATO</h2>
            <div className='contact-container'>
                <div className='left-side-contact-container'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.541460460934!2d-54.5883997!3d-20.442942499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e88b5a2d301f%3A0x119b9d9d5e976526!2sR.%20Jales%2C%20561%20-%20Monte%20Carlo%2C%20Campo%20Grande%20-%20MS%2C%2079022-120!5e0!3m2!1spt-BR!2sbr!4v1710961237699!5m2!1spt-BR!2sbr" loading="lazy" className='map'></iframe>
                </div>
                <div className='right-side-contact-container'>
                    <h2 className='title-adress'>ENDEREÇO</h2>
                    <p className='adress'>R. Jales, 561 - Sala 02 - Monte Carlo - CEP 79022-120 - Campo Grande - MS</p>
                    <h2 className='title-adress'>E-MAIL</h2>
                    <div className='container-adress'>
                        <a href="mailto:eraldo@satyrorepresentacao.com" className='email-anchor'>
                            <p className='adress'>eraldo@satyrorepresentacao.com</p>
                            <img src={Email} alt="email" className='email'/>
                        </a>
                    </div>
                    <div className='container-adress'>
                        <a href="mailto:nicholas@satyrorepresentacao.com" className='email-anchor'>
                            <p className='adress'>nicholas@satyrorepresentacao.com</p>
                            <img src={Email} alt="email" className='email'/>
                        </a>
                    </div>
                    <a href="mailto:eraldo@satyrorepresentacao.com, nicholas@satyrorepresentacao.com?subject=Cotação%20Satyro%20Representação%20Comercial">
                        <button className='button-cotacao'>FAÇA UMA COTAÇÃO <img src={bomb} alt="Bomba de Gasolina" className='bomb'/></button>
                    </a>                
                </div>
            </div>
            
    </div>
  );
};

export default Contact;
