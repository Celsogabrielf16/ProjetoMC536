import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

import filterIcon from 'src/assets/icons/filter.svg';

import * as Styled from './styles';
import Card from 'src/components/Card';
import LineChart from 'src/components/LineChart';
import LocalizationTable from 'src/components/LocalizationTable';
import BarChart from 'src/components/BarChart';
import FilterModal, { SchemaType } from 'src/components/FilterModal';
import List from './List';

const Home: React.FC = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const [filters, setFilters] = useState<SchemaType | null>(null);
  console.log(filters);

  const cardData1 = {
    title: 'Gasto Planejado em 2024',
    value: 22292150.19,
    relativeValue: 10000000.0,
  };

  const cardData2 = {
    title: 'Gasto Real em 2024',
    value: 15445226.19,
    relativeValue: 814666.0,
  };

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
        <Styled.Row>
          {filters ? (
            <Styled.Title withP>
              Re<b>$</b>ultado da Bu<b>$</b>ca
              <p>N Obras Encontradas</p>
            </Styled.Title>
          ) : (
            <Styled.Title>
              Vi<b>$</b>ão Geral das Obras
            </Styled.Title>
          )}
          <Styled.FilterButton onClick={() => setIsFilterModalOpen(true)}>
            <img src={filterIcon} width="16px" height="16px" />
            Filtrar por
          </Styled.FilterButton>
        </Styled.Row>

        <FilterModal
          isOpen={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)}
          onSaveFilters={(data) => setFilters(data)}
        />

        {!filters ? (
          <>
            <Styled.Row>
              <Card
                title={cardData1.title}
                value={cardData1.value}
                relativeValue={cardData1.relativeValue}
              />
              <Card
                title={cardData2.title}
                value={cardData2.value}
                relativeValue={cardData2.relativeValue}
              />
              <Card
                title={cardData1.title}
                value={cardData1.value}
                relativeValue={250000000}
              />
              <Card
                title={cardData2.title}
                value={cardData2.value}
                relativeValue={cardData2.relativeValue}
              />
            </Styled.Row>
            <Styled.Row>
              <LineChart
                title={lineChartData.title}
                label1={lineChartData.label1}
                label2={lineChartData.label2}
                labels={lineChartData.labels}
                data1={lineChartData.data1}
                data2={lineChartData.data2}
                duration={5000}
                delay={800}
                width="800px"
              />
              <LocalizationTable
                localizations={{
                  IC: 9,
                  IFGW: 2,
                  IMECC: 4,
                  IQ: 5,
                  FEA: 6,
                  FEEC: 8,
                  IFCH: 6,
                }}
              />
            </Styled.Row>
            <Styled.Row>
              <LocalizationTable
                localizations={{
                  IC: 9,
                  IFGW: 2,
                  IMECC: 4,
                  IQ: 5,
                  FEA: 6,
                  FEEC: 8,
                  IFCH: 6,
                }}
              />
              <BarChart
                title={lineChartData.title}
                label1={lineChartData.label1}
                label2={lineChartData.label2}
                labels={lineChartData.labels}
                data1={lineChartData.data1}
                data2={lineChartData.data2}
                duration={5000}
                delay={800}
                width="800px"
              />
            </Styled.Row>
          </>
        ) : (
          <List works={['', '']} />
        )}
      </Styled.Wrapper>
      <Footer />
    </>
  );
};

export default Home;
