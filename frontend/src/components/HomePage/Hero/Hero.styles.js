import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 580px;
  background-image: url("./assets/Tech42Day/pictures/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
`;

export const TextPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  max-height: 700px;
`;

export const Text = styled.text`
  color: white;
  font-size: 1.3rem;
  font-family: "Source Sans 3", sans-serif;
  text-align: center;

`;

export const Highlight = styled.text`
  font-size: 2.5rem;
  color: #ffe7d0;
`;

export const Bullseye = styled.img`
  fill: white;
  height: 5%;
  width: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  margin-top: 55px;
`;

export const ButtonAnchor = styled.a`
  text-decoration: none;
  background: transparent;
  border: 1px solid;
  border-color: #ffca99;
  color: white;
  padding: 15px 30px;
  font-size: 14px;
  letter-spacing: 5px;
`;

export const EmptyContainer = styled.div`
  width: 50%;
  height: auto;
`;
