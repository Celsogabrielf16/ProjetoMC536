import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const logado = false;

  return (
    <header className='HeaderComponent'>
      <h3 className='logo'>Fi<b className='moneyDetail'>$</b>cais da Tran<b className='moneyDetail'>$</b>parência</h3>
      <nav>
        <Link to="/home" >Visão Geral</Link>
        {logado ? (<Link to="/home" >Nome Usuario</Link>) : <Link to="/sign-in" >Entrar</Link>}
      </nav>
    </header>
  )
}

export default Header;