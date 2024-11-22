import React from 'react';

interface LocalizationTableProps {
  localizations: Record<string, number>;
}

import * as Styled from './styles';

const LocalizationTable: React.FC<LocalizationTableProps> = ({
  localizations,
}) => {
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
          {Object.entries(localizations).map(([name, quantity]) => (
            <tr key={name}>
              <Styled.TableCell>{name}</Styled.TableCell>
              <Styled.TableCell>{quantity}</Styled.TableCell>
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default LocalizationTable;
