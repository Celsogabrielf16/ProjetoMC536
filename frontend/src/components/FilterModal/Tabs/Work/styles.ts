import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 8px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const InputBox = styled.div<{ flex?: boolean }>`
  display: flex;
  flex-direction: ${({ flex }) => flex ? 'row': 'column'};
  gap: 4px;
  width: 100%;

  ${({flex}) => flex && css`
    justify-content: space-between;
  `}

  span, p {
    text-align: left;
  }

  p {
    color: #CCCCCC;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  border: 1px solid #262626;

  margin-top: 4px;

  :focus {
    border: 1px solid #262626; 
    background: none;
  }
`;