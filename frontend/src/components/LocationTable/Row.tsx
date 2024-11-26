import React from 'react';
import { Location } from 'src/types';

import * as Styled from './styles';
import { useGetLocation } from 'src/hooks/location';

interface Props {
  id: string;
  quantity: number;
}

const Row: React.FC<Props> = ({ id, quantity }) => {
  const { data: location } = useGetLocation(id);

  return (
    <tr key={id}>
      <Styled.TableCell>{location?.nome ?? '---'}</Styled.TableCell>
      <Styled.TableCell>{quantity}</Styled.TableCell>
    </tr>
  );
};

export default Row;
