import React from 'react';
import { Location } from 'src/types';

import * as Styled from './styles';

interface Props {
  id: string;
  quantity: number;
}

const LOCALIZACOES: Location[] = [
  {
    id: '1                                   ',
    nome: 'FCM',
  },
  {
    id: '2                                   ',
    nome: 'IEL',
  },
  {
    id: '3                                   ',
    nome: 'IMECC',
  },
  {
    id: '4                                   ',
    nome: 'IFCH',
  },
  {
    id: '5                                   ',
    nome: 'CEL',
  },
  {
    id: '6                                   ',
    nome: 'EB',
  },
  {
    id: '7                                   ',
    nome: 'IA',
  },
  {
    id: '8                                   ',
    nome: 'FE',
  },
  {
    id: '9                                   ',
    nome: 'FEM',
  },
  {
    id: '10                                  ',
    nome: 'BORA',
  },
  {
    id: '11                                  ',
    nome: 'BC',
  },
  {
    id: '12                                  ',
    nome: 'IB',
  },
  {
    id: '13                                  ',
    nome: 'CBII',
  },
];

const Row: React.FC<Props> = ({ id, quantity }) => {
  const location = LOCALIZACOES.find((l) => l.id.trim() === id);

  return (
    <tr key={id}>
      <Styled.TableCell>{location?.nome ?? '---'}</Styled.TableCell>
      <Styled.TableCell>{quantity}</Styled.TableCell>
    </tr>
  );
};

export default Row;
