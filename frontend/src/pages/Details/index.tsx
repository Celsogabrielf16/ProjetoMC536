import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

import * as Styled from './styles';
import LineChart from 'src/components/LineChart';
import { useGetWork } from 'src/hooks/work';
import { format, parse } from 'date-fns';

const formatDate = (date: string) => {
  const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
  return format(parsedDate, 'dd/MM/yyyy');
};

const formatToCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

function isBeforeToday(date: string) {
  const inputDate = new Date(date);

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return inputDate < today;
}

const Details: React.FC = () => {
  const { id = '' } = useParams();

  const { data: work, isLoading } = useGetWork(id);

  if (isLoading) {
    return null;
  }

  console.log(work);

  const regex = /(R\$|\/)/g;

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
      0,
      150000,
      350000,
      650000,
      790000,
      900000,
      980000,
      1100000,
      (work?.orcamento ?? 0) < 950000
        ? 950000
        : (work?.orcamento ?? 0) + 100000,
    ],
    data2: [0, 350000, 550000, 590000, 780000, 790000, 800000, 850000, 950000],
  };

  return (
    <>
      <Header />
      <Styled.Wrapper>
        <h3>{work?.nome}</h3>
        <Styled.ContentRow>
          <Styled.ContentBox width="80%">
            <h3>Descrição</h3>
            <p>{work?.descricao}</p>
          </Styled.ContentBox>
          <Styled.ContentBox width="20%">
            <h3>Tipo</h3>
            <p>{work?.tipo}</p>
            <h3>Status</h3>
            <p>{work?.status}</p>
          </Styled.ContentBox>
        </Styled.ContentRow>
        <Styled.ContentRow>
          <Styled.ContentBox>
            <h3>Orçamento</h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {formatToCurrency(Number(work?.orcamento))
                .split(regex)
                .map((part) => (
                  <Styled.HighlightedText highlight={regex.test(part)}>
                    {part}
                  </Styled.HighlightedText>
                ))}
            </div>
          </Styled.ContentBox>
          <Styled.ContentBox>
            <h3>Data de Início</h3>
            <div style={{ display: 'flex' }}>
              {formatDate(work?.data_inicio ?? '')
                .split(regex)
                .map((part) => (
                  <Styled.HighlightedText highlight={regex.test(part)}>
                    {part}
                  </Styled.HighlightedText>
                ))}
            </div>
          </Styled.ContentBox>
          <Styled.ContentBox>
            <h3>Data de Previsão</h3>
            <div style={{ display: 'flex' }}>
              {formatDate(work?.data_previsao ?? '')
                .split(regex)
                .map((part) => (
                  <Styled.HighlightedText highlight={regex.test(part)}>
                    {part}
                  </Styled.HighlightedText>
                ))}
            </div>
          </Styled.ContentBox>
          {isBeforeToday(work?.data_previsao ?? '') &&
            work?.status !== 'Concluída' && (
              <Styled.ContentBox>
                <h3>Em atraso</h3>
                <p>Essa obra já devia ter sido finalizada.</p>
              </Styled.ContentBox>
            )}
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
