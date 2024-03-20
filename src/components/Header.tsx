import React, { useState } from 'react';
import '../styles/Header.css'
import Logo from '../img/logo.png';
import Truck from '../img/truck.png';
import { BrowserRouter as Router, Link} from 'react-router-dom';

function Header() {
  return (
    <Router>
      <div className='main-container'>
          <div className='main-container-content'>
              <div className='logo-main-container'>
                <Link to='/'>
                  <img src={Logo} alt="logo-satyros" className='logo-satyros'/>
                </Link>
              </div>
              <div className='navigation-main-container'>
                <Link to='/'>
                  <h5 className='style-navigation-1'>INÍCIO</h5>
                </Link>
                <a href='#about-us'><h5 className='style-navigation-2'>SOBRE NÓS</h5></a>
                <a href="#products"><h5 className='style-navigation-3'>PRODUTOS E SERVIÇOS</h5></a>
                <a href="#contact"><h5 className='style-navigation-4'>CONTATO</h5></a>
                <a href="mailto:eraldo@satyrorepresentacao.com, nicholas@satyrorepresentacao.com?subject=Cotação%20Satyro%20Representação%20Comercial">
                  <button className='style-navigation-button'><img src={Truck} alt="Faça uma Cotação"/></button>
                </a>
              </div>
          </div>
      </div>
    </Router>
  );
}

export default Header;
