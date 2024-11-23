import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 32px 100px 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const Title = styled.h3`
  font-family: var(--font-display);
  font-size: var(--font-size-logo);

  & > b {
    font-size: var(--font-size-paragraph);
    color: var(--cor-light-red);
  }
`;

export const FilterButton = styled.button`
  font-family: var(--font-main);
  border: 1px solid #212121;
  border-radius: 12px;
  background: #1E1E1F;
  padding: 12px;

  display: flex;
  align-items: center;
  gap: 8px;

  box-shadow: 4px 4px 10px rgba(255, 77, 77, 0.05);
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #CCCCCC;

  cursor: pointer;
`;