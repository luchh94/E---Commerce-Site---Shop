import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1440px;
  height: 600px;
  background-image: url("./assets/Tech42Day/pictures/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
`;

export const TextPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;
  height: auto;
`;

export const Text = styled.text`
  color: white;
  font-size: 24px;
  font-family: "Source Sans 3", sans-serif;
  text-align: center;
  margin-top: 65px;
`;

export const Highlight = styled.text`
  font-size: 40px;
  color: #FFE7D0;
`;

export const Bullseye = styled.img`
  fill: white;
  height: 26px;
  width: 26px;
  margin-top: 40px;
`;


export const ButtonContainer = styled.div`
margin-top: 55px;
`

export const ButtonAnchor = styled.a`
text-decoration: none;
background: transparent;
border: 1px solid;
border-color: #FFCA99;
color: white;
padding: 15px 30px;
font-size: 14px;
letter-spacing:  5px;

`

export const EmptyContainer = styled.div`
  width: 720px;
  height: auto;
`;
