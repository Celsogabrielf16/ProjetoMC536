import React from 'react';

import './landingPage.css';
import { ReactComponent as DownArrow } from "../../assets/icons/downArrow.svg";

import Header from 'src/components/Header';


const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className='LandingPageMain'>
        <section className='banner'>
          <div className='banner__content'>
            <div className='banner__title'>
              <h3>Transparência em Obras da Unicamp</h3>
              <h1>Fi<b className='moneyDetail'>$</b>cais da Tran<b className='moneyDetail'>$</b>parência</h1>
            </div>
            <div className='banner__image'></div>
            <div className='banner__arrow'><DownArrow /></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LandingPage;