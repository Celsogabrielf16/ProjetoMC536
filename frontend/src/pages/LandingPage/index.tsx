import React from 'react';

import './landingPage.css';
import { ReactComponent as DownArrow } from '../../assets/icons/downArrow.svg';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Card from 'src/components/Card';
import LineChart from 'src/components/LineChart';
import BarChart from 'src/components/BarChart';

const LandingPage: React.FC = () => {
  const imecc = {
    title: "Gasto Planejado & Gasto Real Reforma IMECC",
    label1: 'Planejado',
    label2: 'Real',
    labels: ['Novembro 2023', 'Dezembro 2023', 'Janeiro 2024', 'Fevereiro 2024', 'Março 2024', 'Abril 2024', 'Maio 2024', 'Junho 2024', 'Julho 2024', 'Agosto 2024', 'Setembro 2024'],
    data1: [18027.64, 83526.02, 226807.17, 412593.96, 551501.91, 620010.96, 664958.14, 691636.13, 767174.68, 915872.30, 1071764.62],
    data2: [10490.05, 24182.38, 46840.29, 83908.14, 97433.69, 119267.23, 166491.54, 257361.80, 338021.14, 425096.41, 477895.17]
  }

  const gastoMensal = {
    title: "Gasto Planejado & Gasto Real por Mês",
    label1: 'Planejado',
    label2: 'Real',
    labels: ['Outubro 2021', 'Stembro 2022', 'Abril 2023', 'Julho 2023', 'Agosto 2023', 'Setembro 2023', 'Outubro 2023', 'Novembro 2023', 'Dezembro 2023', 'Janeiro 2024', 'Fevereiro 2024', 'Março 2024', 'Abril 2024', 'Maio 2024', 'Junho 2024', 'Julho 2024', 'Agosto 2024', 'Setembro 2024'],
    data1: [445913.13, 398909.00, 350000.00, 249645.46, 185919.64, 427845.08, 862065.48, 723069.07, 864929.78, 1185235.91, 1548227.92, 2091653.69, 2818601.01, 3799593.92, 4264984.41, 5312404.48, 4730824.79, 5011428.84],
    data2: [445913.13, 348644.17, 350000.00, 249645.46, 137861.93, 175181.17, 301323.94, 256475.59, 330080.98, 405344.79, 556857.25, 723335.42, 1207011.75, 1599289.97, 1914049.07, 2900471.43, 2502582.90, 2683755.66]
  }

  const gastoReal2021 = {
    title: "Gasto Real em 2021",
    value: 445913.13,
    relativeValue: 325928.17
  }

  const gastoReal2022 = {
    title: "Gasto Real em 2022",
    value: 348644.17,
    relativeValue: 445913.13
  }

  const gastoReal2023 = {
    title: "Gasto Real em 2023",
    value: 1800569.07,
    relativeValue: 348644.17
  }

  const gastoReal2024 = {
    title: "Gasto Real em 2024",
    value: 14492698.90,
    relativeValue: 1800569.07
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
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="LandingPageMain">
        <section className="banner">
          <div className="banner__content">
            <div className="banner__title">
              <h3>Transparência em Obras da Unicamp</h3>
              <h1>
                Fi<b className="moneyDetail">$</b>cais da Tran
                <b className="moneyDetail">$</b>parência
              </h1>
            </div>
            <div className="banner__image">
              <div className="bar-chart">
                <BarChart title={ imecc.title} label1={ imecc.label1} label2={ imecc.label2} labels={ imecc.labels} data1={ imecc.data1} data2={ imecc.data2} duration={3000} delay={0} />
              </div>
              <div className="line-chart">
                <LineChart title={ gastoMensal.title} label1={ gastoMensal.label1} label2={ gastoMensal.label2} labels={ gastoMensal.labels} data1={ gastoMensal.data1} data2={ gastoMensal.data2} duration={3000} delay={0} />
              </div>
            </div>
            <div className="banner__arrow">
              <DownArrow />
            </div>
          </div>
        </section>
        <section ref={refFirst} className={`first-information ${isVisibleFirst ? "animeOpacity" : ""}`}>
          <h3 className='information__title'>Ace<b className='moneyDetail'>$$</b>o Fácil a Dados Públicos</h3>
          <p className='information__description'>Exibir dados de forma clara permite que todos compreendam o andamento de projetos públicos. Na Unicamp, isso fortalece a gestão participativa e promove o diálogo com a sociedade, facilitando que qualquer cidadão fiscalize e contribua para uma gestão eficiente.</p>
          <div className='first-information__cards'>
          {isVisibleFirst && (<Card title={ gastoReal2021.title } value={ gastoReal2021.value } relativeValue={ gastoReal2021.relativeValue }/>)}
          {isVisibleFirst && (<Card title={ gastoReal2022.title } value={ gastoReal2022.value } relativeValue={ gastoReal2022.relativeValue }/>)}
          {isVisibleFirst && (<Card title={ gastoReal2023.title } value={ gastoReal2023.value } relativeValue={ gastoReal2023.relativeValue }/>)}
          {isVisibleFirst && (<Card title={ gastoReal2024.title } value={ gastoReal2024.value } relativeValue={ gastoReal2024.relativeValue }/>)}
          </div>
        </section>
        <section
          ref={refSecond}
          className={`second-information ${
            isVisibleSecond ? 'animeRight' : ''
          }`}
        >
          <div className="second-information__text">
            <h3 className="information__title">
              Tran<b className="moneyDetail">$</b>parência nas In
              <b className="moneyDetail">$</b>tituições Públicas
            </h3>
            <p className="information__description">
              Transparência em instituições como a Unicamp promove confiança e
              responsabilidade. Ao facilitar o acesso aos dados de obras,
              qualquer cidadão pode acompanhar e fiscalizar o uso de recursos,
              garantindo que sejam aplicados para o bem da sociedade.
            </p>
          </div>
          <div className="second-information__cards">
            {isVisibleSecond && (
              <LineChart title={ imecc.title} label1={ imecc.label1} label2={ imecc.label2} labels={ imecc.labels} data1={ imecc.data1} data2={ imecc.data2} duration={5000} delay={800}/>
            )}
          </div>
        </section>
        <section
          ref={refThird}
          className={`third-information ${isVisibleThird ? 'animeLeft' : ''}`}
        >
          <div className="third-information__cards">
            {isVisibleThird && (
              <BarChart title={gastoMensal.title} label1={gastoMensal.label1} label2={gastoMensal.label2} labels={gastoMensal.labels} data1={ gastoMensal.data1} data2={ gastoMensal.data2} duration={5000} delay={800}/>
            )}
          </div>
          <div className="third-information__text">
            <h3 className="information__title">
              Fi<b className="moneyDetail">$</b>calização Popular: Um Direito
            </h3>
            <p className="information__description">
              A fiscalização pública de obras é essencial para o uso ético dos
              recursos. Na Unicamp, facilitar o acesso aos dados de projetos
              permite que a sociedade acompanhe prazos, custos e resultados,
              fortalecendo o papel cidadão e promovendo uma gestão transparente
              e responsável.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
