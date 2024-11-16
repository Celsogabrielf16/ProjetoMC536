import React from 'react';

import './landingPage.css';
import { ReactComponent as DownArrow } from "../../assets/icons/downArrow.svg";

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Card from 'src/components/Card';
import LineChart from 'src/components/LineChart';
import BarChart from 'src/components/BarChart';

const LandingPage: React.FC = () => {
  const cardData = {
    title: "Gasto Planejado em 2024",
    value: 22292150.19,
    relativeValue: 10000000.00
  }

  const lineChartData = {
      title: 'Gasto Planejado & Gasto Real',
      label1: 'Planejado',
      label2: 'Real',
      labels: ['Agosto 2023', 'Setembro 2023', 'Outubro 2023', 'Maio 2024', 'Junho 2024', 'Julho 2024', 'Agosto 2024', 'Setembro 2024', 'Outubro 2024'],
      data1: [0, 150000, 350000, 650000, 790000, 900000, 980000, 1100000, 1200000],
      data2: [0, 350000, 550000, 590000, 780000, 790000, 800000, 850000, 950000]
  }

  const [isVisibleFirst, setIsVisibleFirst] = React.useState<boolean>(false);
  const [isVisibleSecond, setIsVisibleSecond] = React.useState<boolean>(false);
  const [isVisibleThird, setIsVisibleThird] = React.useState<boolean>(false);

  const refFirst = React.useRef<HTMLDivElement | null>(null);
  const refSecond = React.useRef<HTMLDivElement | null>(null);
  const refThird = React.useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (refFirst.current) {
      const rect = refFirst.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisibleFirst(true);
      }
    }

    if (refSecond.current) {
      const rect = refSecond.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisibleSecond(true);
      }
    }
    
    if (refThird.current) {
      const rect = refThird.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisibleThird(true);
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <div className='banner__image'>
              <div className="bar-chart">
                <BarChart title={ lineChartData.title} label1={ lineChartData.label1} label2={ lineChartData.label2} labels={ lineChartData.labels} data1={ lineChartData.data1} data2={ lineChartData.data2} duration={3000} delay={0} />
              </div>
              <div className="line-chart">
                <LineChart title={ lineChartData.title} label1={ lineChartData.label1} label2={ lineChartData.label2} labels={ lineChartData.labels} data1={ lineChartData.data1} data2={ lineChartData.data2} duration={3000} delay={0} />
              </div>
            </div>
            <div className='banner__arrow'><DownArrow /></div>
          </div>
        </section>
        <section ref={refFirst} className={`first-information ${isVisibleFirst ? "animeOpacity" : ""}`}>
          <h3 className='information__title'>Ace<b className='moneyDetail'>$$</b>o Fácil a Dados Públicos</h3>
          <p className='information__description'>Exibir dados de forma clara permite que todos compreendam o andamento de projetos públicos. Na Unicamp, isso fortalece a gestão participativa e promove o diálogo com a sociedade, facilitando que qualquer cidadão fiscalize e contribua para uma gestão eficiente.</p>
          <div className='first-information__cards'>
          {isVisibleFirst && (<Card title={ cardData.title } value={ cardData.value } relativeValue={ cardData.relativeValue }/>)}
          {isVisibleFirst && (<Card title={ cardData.title } value={ cardData.value } relativeValue={ cardData.relativeValue }/>)}
          {isVisibleFirst && (<Card title={ cardData.title } value={ cardData.value } relativeValue={ 250000000 }/>)}
          {isVisibleFirst && (<Card title={ cardData.title } value={ cardData.value } relativeValue={ cardData.relativeValue }/>)}
          </div>
        </section>
        <section ref={refSecond} className={`second-information ${isVisibleSecond ? "animeRight" : ""}`}>
          <div className='second-information__text'>
            <h3 className='information__title'>Tran<b className='moneyDetail'>$</b>parência nas In<b className='moneyDetail'>$</b>tituições Públicas</h3>
            <p className='information__description'>Transparência em instituições como a Unicamp promove confiança e responsabilidade. Ao facilitar o acesso aos dados de obras, qualquer cidadão pode acompanhar e fiscalizar o uso de recursos, garantindo que sejam aplicados para o bem da sociedade.</p>
          </div>
          <div className='second-information__cards'>
            {isVisibleSecond && (
              <LineChart title={ lineChartData.title} label1={ lineChartData.label1} label2={ lineChartData.label2} labels={ lineChartData.labels} data1={ lineChartData.data1} data2={ lineChartData.data2} duration={5000} delay={800}/>
            )}
          </div>
        </section>
        <section ref={refThird} className={`third-information ${isVisibleThird ? "animeLeft" : ""}`}>
          <div className='third-information__cards'>
            {isVisibleThird && (
              <BarChart title={ lineChartData.title} label1={ lineChartData.label1} label2={ lineChartData.label2} labels={ lineChartData.labels} data1={ lineChartData.data1} data2={ lineChartData.data2} duration={5000} delay={800}/>
            )}
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