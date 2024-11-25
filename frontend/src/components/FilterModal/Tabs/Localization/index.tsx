import React from 'react';

import * as Styled from './styles';
import { useFormContext } from 'react-hook-form';
import { SchemaType } from '../..';

const Localization: React.FC = () => {
  const { register } = useFormContext<SchemaType>();

  return (
    <Styled.Wrapper>
      <Styled.InputBox>
        <span>Sigla da localização</span>
        <Styled.Input {...register('localization.name')} />
      </Styled.InputBox>
    </Styled.Wrapper>
  );
};

export default Localization;
