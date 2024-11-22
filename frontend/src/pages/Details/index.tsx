import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

import * as Styled from './styles';
import LineChart from 'src/components/LineChart';

const toCurrency = (value: string) =>
  parseFloat(
    value
      .replace(/[^0-9,-]+/g, '')
      .replace('.', '')
      .replace(',', '.')
  );

const Details: React.FC = () => {
  const [params] = useSearchParams();
  const workId = params.get('workId');

  const regex = /(R\$|\/)/g;
  const ORCAMENTO = 'R$ 22.292.150,19';
  const GASTO_REAL = 'R$ 12.292.150,19';
  const DATA_INICIO = '16/10/2023';
  const DATA_PREVISAO = '16/10/2024';

  const lineChartData = {
    title: 'Gasto Planejado & Gasto Real',
    label1: 'Planejado',
    label2: 'Real',
    labels: [
      'Agosto 2023',
      'Setembro 2023',
      'Outubro 2023',
      'Maio 2024',
      'Junho 2024',
      'Julho 2024',
      'Agosto 2024',
      'Setembro 2024',
      'Outubro 2024',
    ],
    data1: [
      0, 150000, 350000, 650000, 790000, 900000, 980000, 1100000, 1200000,
    ],
    data2: [0, 350000, 550000, 590000, 780000, 790000, 800000, 850000, 950000],
  };

  return (
    <>
      <Header />
      <Styled.Wrapper>
        <Styled.ContentRow>
          <Styled.ContentBox width="80%">
            <h3>Descrição</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dignissim bibendum libero id congue. Vestibulum et lacus purus.
              Mauris cursus laoreet risus, a laoreet lectus. Vestibulum non ex
              eu orci posuere luctus at eget est. Morbi maximus neque nec sapien
              finibus elementum. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Maecenas dignissim bibendum libero id congue.
              Vestibulum et lacus purus. Mauris cursus laoreet risus, a laoreet
              lectus. Vestibulum non ex eu orci posuere luctus at eget est.
              Morbi maximus neque nec sapien finibus elementum.
            </p>
          </Styled.ContentBox>
          <Styled.ContentBox width="20%">
            <h3>Tipo</h3>
            <p>Acessibilidade</p>
            <h3>Status</h3>
            <p>Andamento</p>
          </Styled.ContentBox>
        </Styled.ContentRow>
        <Styled.ContentRow>
          <Styled.ContentBox>
            <h3>Orçamento</h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {ORCAMENTO.split(regex).map((part) => (
                <Styled.HighlightedText highlight={regex.test(part)}>
                  {part}
                </Styled.HighlightedText>
              ))}
            </div>
          </Styled.ContentBox>
          <Styled.ContentBox>
            <h3>Gasto real</h3>
            <div style={{ display: 'flex' }}>
              {GASTO_REAL.split(regex).map((part) => (
                <Styled.HighlightedText highlight={regex.test(part)}>
                  {part}
                </Styled.HighlightedText>
              ))}
              <span id="percentage">
                {(
                  (toCurrency(GASTO_REAL) / toCurrency(ORCAMENTO)) *
                  100
                ).toFixed(2)}{' '}
                %
              </span>
            </div>
          </Styled.ContentBox>
          <Styled.ContentBox>
            <h3>Data de Início</h3>
            <div style={{ display: 'flex' }}>
              {DATA_INICIO.split(regex).map((part) => (
                <Styled.HighlightedText highlight={regex.test(part)}>
                  {part}
                </Styled.HighlightedText>
              ))}
            </div>
          </Styled.ContentBox>
          <Styled.ContentBox>
            <h3>Data de Previsão</h3>
            <div style={{ display: 'flex' }}>
              {DATA_PREVISAO.split(regex).map((part) => (
                <Styled.HighlightedText highlight={regex.test(part)}>
                  {part}
                </Styled.HighlightedText>
              ))}
            </div>
          </Styled.ContentBox>
        </Styled.ContentRow>
        <LineChart
          title={lineChartData.title}
          label1={lineChartData.label1}
          label2={lineChartData.label2}
          labels={lineChartData.labels}
          data1={lineChartData.data1}
          data2={lineChartData.data2}
          duration={5000}
          delay={800}
          width="100%"
        />
      </Styled.Wrapper>
      <Footer />
    </>
  );
};

export default Details;
