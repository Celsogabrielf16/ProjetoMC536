import styled from "styled-components";

export const Wrapper =  styled.div`
  width: 400px;
  height: 471px;

  padding: 16px;
  background: var(--cor-charcoal);

  border-radius: 8px;
  box-shadow: 4px 4px 10px rgba(255, 77, 77, 0.05);
`;

export const Title = styled.h3`
  font-family: var(--font-display);
  font-size: 16px;
  text-align: center;

  & > b {
    font-size: var(--font-size-paragraph);
    color: var(--cor-light-red);
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 32px;
  border-collapse: collapse;

  font-size: 12px;

  th, td {
    color: #CCCCCC;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  text-align: center;
`;
