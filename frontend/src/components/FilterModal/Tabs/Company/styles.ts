import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  span {
    text-align: left;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  border: 1px solid #262626;

  :focus {
    border: 1px solid #262626; 
    background: none;
  }
`;