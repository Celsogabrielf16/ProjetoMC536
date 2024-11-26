import React from 'react';

import * as Styled from './styles';
import { useFormContext } from 'react-hook-form';
import { SchemaType } from '../..';

const Work: React.FC = () => {
  const { register } = useFormContext<SchemaType>();

  return (
    <Styled.Wrapper>
      <Styled.Row>
        <Styled.InputBox>
          <span>Nome da Obra</span>
          <Styled.Input {...register('work.name')} />
        </Styled.InputBox>
        <Styled.InputBox>
          <span>Localização</span>
          <Styled.Input {...register('location.name')} />
        </Styled.InputBox>
      </Styled.Row>
      <Styled.Row>
        <Styled.InputBox>
          <span>Intervalo de Datas</span>
          <Styled.InputBox flex>
            <div style={{ width: '100%' }}>
              <p>De</p>
              <Styled.Input {...register('work.date.start')} />
            </div>

            <div style={{ width: '100%' }}>
              <p>Até</p>
              <Styled.Input {...register('work.date.end')} />
            </div>
          </Styled.InputBox>
        </Styled.InputBox>
        <Styled.InputBox>
          <span>Intervalo de Orçamento</span>
          <Styled.InputBox flex>
            <div style={{ width: '100%' }}>
              <p>De</p>
              <Styled.Input {...register('work.min')} />
            </div>

            <div style={{ width: '100%' }}>
              <p>Até</p>
              <Styled.Input {...register('work.max')} />
            </div>
          </Styled.InputBox>
        </Styled.InputBox>
      </Styled.Row>
      <Styled.Row>
        <Styled.InputBox flex>
          <Styled.InputBox>
            <span>Tipo</span>
            <Styled.Input {...register('work.type')} />
          </Styled.InputBox>
          <Styled.InputBox>
            <span>Status</span>
            <Styled.Input {...register('work.status')} />
          </Styled.InputBox>
        </Styled.InputBox>
        <Styled.InputBox>
          <span>Empresa</span>
          <Styled.Input {...register('company.name')} />
        </Styled.InputBox>
      </Styled.Row>
    </Styled.Wrapper>
  );
};

export default Work;
