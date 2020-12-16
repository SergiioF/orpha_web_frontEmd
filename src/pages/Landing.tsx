import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import '../styles/pages/landing.css';
import logoImg from '../images/Logo.svg'

// import { Container } from './styles';
function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />
        <main>
          <h1>Gives happy to the world</h1>
          <p>Visite orfanatos e mude o dia
de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>In your heart</strong>
          <span>Minga Guazú</span>
        </div>
        <Link to="/app" className="enter-app" >
          <FiArrowRight size={24} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;