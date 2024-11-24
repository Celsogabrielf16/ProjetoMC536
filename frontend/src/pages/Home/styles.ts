import styled, { css } from "styled-components";

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

export const Title = styled.h3<{ withP?: boolean }>`
  font-family: var(--font-display);
  font-size: var(--font-size-logo);

  & > b {
    font-size: var(--font-size-paragraph);
    color: var(--cor-light-red);
  }

  ${({ withP }) => withP && css`
    p {
      font-size: 14px;
      color: #CCCCCC;

      margin-top: 8px;
    }
  `}
`;

export const FilterButton = styled.button`
  width: fit-content;
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

export const Card = styled.div`
  width: 100%;
  height: fit-content;
  background: #1E1E1F;
  box-shadow: 4px 4px 10px rgba(255, 77, 77, 0.05);

  display: flex;
  justify-content: space-between;
  
  padding: 24px;
  border-radius: 12px;
`;

export const NameAndDescription = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;

  h3 {
    color: #ffffff;
    font-weight: 400;
    font-size: 24px;
    line-height: 18px;
  }

  p {
    color: #cccccc;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-top: 14px;
  }
`;

export const TypeAndStatus = styled.div`
  width: 15%;
  height: 100%;

  display: flex;
  flex-direction: column;


  h3 {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    margin-top: 8px;
  }

  p {
    color: #cccccc;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-top: 8px;
  }
`;