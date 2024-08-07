import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  padding: 24px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const FlexContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 16px;
`;

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const UploadButton = styled.button`
  appearance: none;
  background: rgba(255, 255, 255);
  border: 1px solid currentColor;
  border-radius: 4px;
  cursor: pointer;
  font: inherit;
  min-height: 48px;
  min-width: 48px;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const OCRDataViewer = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid black;
`;
