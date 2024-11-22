import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 80px;
  padding: 0 56px;

  gap: 32px;
`;

export const ContentRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 32px;
`

export const ContentBox = styled.div<{ width?: string | number }>`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${({ width }) => width ?? '100%'};

  background: #1E1E1F;
  border: 1px solid #212121;
  border-radius: 12px;
  box-shadow: #FF4D4D1A 1.;

  h3 {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    margin-top: 4px;
  }

  p {
    color: #cccccc;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-top: 4px;
  }

  div > span#percentage {
    color: #cccccc;
    font-size: 12px;

    margin-top: 8px;
    margin-left: 8px;
  }
`;

export const HighlightedText = styled.span<{ highlight: boolean }>`
  color: ${({ highlight }) => (highlight ? "red" : "#ffffff")};

  margin-top: 8px;
  font-size: 16px;
`;
