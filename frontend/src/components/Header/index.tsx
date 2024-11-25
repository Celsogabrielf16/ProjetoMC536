import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const logado: boolean = false;

  return (
    <header className='HeaderComponent'>
      <Link to="/"><h3 className='logo'>Fi<b className='moneyDetail'>$</b>cais da Tran<b className='moneyDetail'>$</b>parência</h3></Link>
      <nav>
        <Link to="/home" >Visão Geral</Link>
        {logado ? (
          <>
            <Link to="/submit-update" >Inserir Atualização</Link>
            <Link to="/submit-project" >Cadastrar Obra</Link>
          </>
        ) : <Link to="/sign-in" >Entrar</Link>}
      </nav>
    </header>
  )
}

export default Header;