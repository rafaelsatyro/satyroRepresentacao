import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Whats from '../img/whats.png';
import '../styles/HomePage.css';



function HomePage() {
  return (
    <>  
        <div id="/"><Header/></div>
        <Banner/>
        <div id="about-us"><AboutUs/></div>
        <div id="products"><Products/></div>
        <div id="contact"><Contact/></div>
        <Footer/>
        <div className='whats-button'>
          <a href="https://api.whatsapp.com/send?phone=556799856107&text=Ol%C3%A1%20Eraldo,%20tudo%20certo?%20Estou%20entrando%20em%20contato,%20atrav%C3%A9s%20do%20site%20da%20Satyro%20Representa%C3%A7%C3%A3o%20Comercial,%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%0A" target='_blank'>
            <img src={Whats} alt="Whats Button" className='whats-icon'/>
          </a>
        </div>
    </>
  );
}

export default HomePage;
