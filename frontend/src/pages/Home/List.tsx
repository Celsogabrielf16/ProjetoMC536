import React from 'react';

interface Props {
  works?: Work[];
  filters: SchemaType;
}

import * as Styled from './styles';
import { SchemaType } from 'src/components/FilterModal';
import { Work } from 'src/types';
import { useNavigate } from 'react-router-dom';

const List: React.FC<Props> = ({ works, filters }) => {
  const navigate = useNavigate();

  const filteredWorks = works?.filter((work) => {
    if (
      !work.nome.toLowerCase().includes((filters.work.name || '').toLowerCase())
    )
      return false;

    return true;
  });

  return (
    <>
      {filteredWorks?.map((work) => (
        <Styled.Card onClick={() => navigate(`/details/${work.id.trim()}`)}>
          <Styled.NameAndDescription>
            <h3>{work.nome}</h3>
            <p>{work.descricao}</p>
          </Styled.NameAndDescription>
          <Styled.TypeAndStatus>
            <h3>Tipo</h3>
            <p>{work.tipo}</p>
            <h3>Status</h3>
            <p>{work.status}</p>
          </Styled.TypeAndStatus>
        </Styled.Card>
      ))}
    </>
  );
};

export default List;
