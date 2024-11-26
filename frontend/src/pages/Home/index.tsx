import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

import filterIcon from 'src/assets/icons/filter.svg';

import * as Styled from './styles';
import Card from 'src/components/Card';
import LineChart from 'src/components/LineChart';
import LocationTable from 'src/components/LocationTable';
import BarChart from 'src/components/BarChart';
import FilterModal, { SchemaType } from 'src/components/FilterModal';
import List from './List';
import { Work } from 'src/types';
import { useGetWorks } from 'src/hooks/works';

const Home: React.FC = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const { data: OBRAS } = useGetWorks();

  const [filters, setFilters] = useState<SchemaType | null>(null);
  const filteredWorksCount = filters
    ? OBRAS?.filter((work) => {
        if (
          !work.nome
            .toLowerCase()
            .includes((filters.work.name || '').toLowerCase())
        )
          return false;

        return true;
      }).length
    : null;

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

  const labels1 = OBRAS?.map((obra) => obra.nome.trim()) ?? [];
  const data1 = OBRAS?.map((obra) => obra.orcamento) ?? [];

  const tiposContagem = OBRAS?.reduce((acc, item) => {
    const tipo = item.tipo.trim();
    if (!acc[tipo]) {
      acc[tipo] = 0;
    }
    acc[tipo]++;
    return acc;
  }, {} as Record<string, number>);

  const TIPOS = Object.keys(tiposContagem ?? {});
  const CONTAGEMTIPO = Object.values(tiposContagem ?? {});

  const instContagem = OBRAS?.reduce((acc, item) => {
    const loc = item.id_localizacao.trim();
    if (!acc[loc]) {
      acc[loc] = 0;
    }
    acc[loc]++;
    return acc;
  }, {} as Record<string, number>);

  const INST = Object.keys(instContagem ?? {});
  const CONTAGEMINST = Object.values(instContagem ?? {});

  return (
    <>
      <Header />
      <Styled.Wrapper>
        <Styled.Row>
          {filters ? (
            <Styled.Title withP>
              Re<b>$</b>ultado da Bu<b>$</b>ca
              <p>{filteredWorksCount} Obra(s) Encontrada(s)</p>
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
                title="Comparação de Orçamentos das Obras"
                label1="Orçamento"
                labels={labels1}
                data1={data1}
                data2={[]}
                duration={500}
                delay={0}
                width="100%"
              />
              <LocationTable
                locations={
                  OBRAS?.reduce((acc, obra) => {
                    const id = obra.id_localizacao.trim();

                    acc[id] = (acc[id] || 0) + 1;

                    return acc;
                  }, {} as Record<string, number>) || {}
                }
              />
            </Styled.Row>
            <Styled.Row>
              <BarChart
                title="Obras por Instituto"
                label1="Instituto"
                label2="Quantidade"
                labels={INST}
                data1={CONTAGEMINST}
                duration={5000}
                delay={800}
                width="50%"
              />
              <BarChart
                title="Obras por Tipo"
                label1="Tipo"
                label2="Quantidade"
                labels={TIPOS}
                data1={CONTAGEMTIPO}
                duration={5000}
                delay={800}
                width="50%"
              />
            </Styled.Row>
          </>
        ) : (
          <List works={OBRAS} filters={filters} />
        )}
      </Styled.Wrapper>
      <Footer />
    </>
  );
};

export default Home;
