import styled from "styled-components";

export const ProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Sintony", sans-serif;
  font-size: 42px;
`;

export const CameraHeader = styled.img`
 width: 15%;
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
  background-color: #f9f9f9;
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

  @media (max-width: 550px){
    grid-template-columns: 1fr 1fr;

  }
`;
