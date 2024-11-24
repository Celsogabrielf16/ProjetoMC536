import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  height: fit-content;
`

export const Tabs = styled.div`
  width: fit-content;
  
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const Tab = styled.div<{ checked?: boolean }>`
  width: fit-content;
  display: flex;
  flex-direction: column;
  
  cursor: pointer;

  ${({ checked }) => checked && css`
    border-bottom: 2px solid #FF4D4D;

    span {
      margin-bottom: 4px;
    }
  `}
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`

export const Button = styled.button<{ variant: 'clear'|'search' }>`
  border-radius: 12px;
  border: 2px solid ${({ variant }) => variant ==='clear' ? '#262626' : '#FF40401A'};
  padding: 4px 12px;
  
  color: white;

  :hover {
    background: none;
  }
`;