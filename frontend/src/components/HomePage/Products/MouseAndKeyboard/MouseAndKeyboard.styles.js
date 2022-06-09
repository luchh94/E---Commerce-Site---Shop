import styled from "styled-components";

export const ProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Sintony", sans-serif;
  font-size: 42px;
`;

export const MouseAndKeyboardHeader = styled.img`
  width: 30%;
  height: auto;
`;

export const UnderLine = styled.img`
  height: 2px;
  width: 20%;
  margin-top: 25px;
`;

export const Container = styled.div`
  max-height: 1040px;
  width: 100%;
`;

export const Title = styled.div`
  height: 220px;
  max-width: 1440px;
  display: flex;
  align-items: center;
`;

export const Products = styled.div`
  height: 820px;
  max-width: 1440px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 60px;
  overflow: auto;

  @media (max-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
`;
