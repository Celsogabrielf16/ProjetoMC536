import React from 'react';

interface LocationTableProps {
  locations: Record<string, number>;
}

import * as Styled from './styles';
import Row from './Row';

const LocationTable: React.FC<LocationTableProps> = ({ locations }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>
        Localizaçõe<b>$</b> das Obras
      </Styled.Title>
      <Styled.Table>
        <thead>
          <th>Localização</th>
          <th>Quantidade</th>
        </thead>
        <tbody>
          {Object.entries(locations).map(([id, quantity]) => (
            <Row id={id} quantity={quantity} />
          ))}
        </tbody>
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default LocationTable;
