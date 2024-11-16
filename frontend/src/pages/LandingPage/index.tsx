import React from 'react';

import './landingPage.css';
import { ReactComponent as DownArrow } from "../../assets/icons/downArrow.svg";

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Card from 'src/components/Card';

const LandingPage: React.FC = () => {
  const data = {
    title: "Gasto Planejado em 2024",
    value: 22292150.19,
    relativeValue: 10000000.00
  }

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
        <section className='first-information'>
          <h3 className='information__title'>Ace<b className='moneyDetail'>$$</b>o Fácil a Dados Públicos</h3>
          <p className='information__description'>Exibir dados de forma clara permite que todos compreendam o andamento de projetos públicos. Na Unicamp, isso fortalece a gestão participativa e promove o diálogo com a sociedade, facilitando que qualquer cidadão fiscalize e contribua para uma gestão eficiente.</p>
          <div className='first-information__cards'>
            <Card title={ data.title } value={ data.value } relativeValue={ data.relativeValue }/>
            <Card title={ data.title } value={ data.value } relativeValue={ data.relativeValue }/>
            <Card title={ data.title } value={ data.value } relativeValue={ 250000000 }/>
            <Card title={ data.title } value={ data.value } relativeValue={ data.relativeValue }/>
          </div>
        </section>
        <section className='second-information'>
          <div className='second-information__text'>
            <h3 className='information__title'>Tran<b className='moneyDetail'>$</b>parência nas In<b className='moneyDetail'>$</b>tituições Públicas</h3>
            <p className='information__description'>Transparência em instituições como a Unicamp promove confiança e responsabilidade. Ao facilitar o acesso aos dados de obras, qualquer cidadão pode acompanhar e fiscalizar o uso de recursos, garantindo que sejam aplicados para o bem da sociedade.</p>
          </div>
          <div className='second-information__cards'>
            Card 1
          </div>
        </section>
        <section className='third-information'>
          <div className='third-information__cards'>
            Card 1
          </div>
          <div className='third-information__text'>
            <h3 className='information__title'>Fi<b className='moneyDetail'>$</b>calização Popular: Um Direito</h3>
            <p className='information__description'>A fiscalização pública de obras é essencial para o uso ético dos recursos. Na Unicamp, facilitar o acesso aos dados de projetos permite que a sociedade acompanhe prazos, custos e resultados, fortalecendo o papel cidadão e promovendo uma gestão transparente e responsável.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;