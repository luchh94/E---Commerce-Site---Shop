import styled from "styled-components";

export const ProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Sintony", sans-serif;
  font-size: 42px;
`;

export const MouseAndKeyboardHeader = styled.img`
  height: 40px;
  width: auto;
`;

export const UnderLine = styled.img`
  height: 2px;
  width: 335px;
  margin-top: 25px;
`;

export const Container = styled.div`
  height: auto;
  width: 80%;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;

`;

export const Title = styled.div`
  height: 220px;
  width: 1440px;
  display: flex;
  align-items: center;
`;

export const Products = styled.div`
  height: 850px;
  width: 1440px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 60px;
  overflow: auto;
`;
