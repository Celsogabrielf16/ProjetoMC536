import React from 'react';

import * as Styled from './styles';
import { useFormContext } from 'react-hook-form';
import { SchemaType } from '../..';

const Location: React.FC = () => {
  const { register } = useFormContext<SchemaType>();

  return (
    <Styled.Wrapper>
      <Styled.InputBox>
        <span>Sigla da localização</span>
        <Styled.Input {...register('location.name')} />
      </Styled.InputBox>
    </Styled.Wrapper>
  );
};

export default Location;
