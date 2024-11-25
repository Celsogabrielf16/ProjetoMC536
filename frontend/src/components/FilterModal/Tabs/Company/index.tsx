import React from 'react';

import * as Styled from './styles';
import { useFormContext } from 'react-hook-form';
import { SchemaType } from '../..';

const Company: React.FC = () => {
  const { register } = useFormContext<SchemaType>();

  return (
    <Styled.Wrapper>
      <Styled.InputBox>
        <span>Nome da empresa</span>
        <Styled.Input {...register('company.name')} />
      </Styled.InputBox>
      <Styled.InputBox>
        <span>CNPJ da empresa</span>
        <Styled.Input {...register('company.cnpj')} />
      </Styled.InputBox>
    </Styled.Wrapper>
  );
};

export default Company;
