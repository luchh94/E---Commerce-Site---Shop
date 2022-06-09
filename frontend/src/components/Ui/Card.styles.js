import styled from "styled-components";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ProductLink = styled(Link)`
  height: 0px;
  width: 0px;
`;
export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 327px;
  width: 240px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-top: 20px;
  justify-content: space-around;

  transition-duration: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }

  img {
    margin-bottom: 11px;
    max-width: 150px;

    @media (max-width: 950px) {
      max-width: 80px;
      max-height: 250px;
    }

    @media (max-width: 550px) {
      max-width: 60px;
      max-height: 200px;
    }
  }

  @media (max-width: 950px) {
    width: 170px;
    height: 250px;
  }

  @media (max-width: 550px) {
    width: 150px;
    height: 220px;
  }
`;

export const ShadowDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: -20px;

  width: 14%;
  height: 330px;

  opacity: 0%;
  transform: translateY(30px);
  transform: translateX(-130px);

  cursor: pointer;
  z-index: 9999;

  &:hover {
    opacity: 80%;
    background-color: grey;
    transition-duration: 0.4s;
  }
`;

export const Cart = styled.div``;

export const InfoIcon = styled(FaInfoCircle)`
  width: 70px;
  height: auto;
  margin-bottom: 65px;
`;

export const Name = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  height: 10.25px;
  justify-content: center;

  font-size: 16px;
  font-family: "Sintony", sans-serif;

  @media (max-width: 550px) {
    font-size: 12px;
  }
`;

export const StarContainer = styled.div`
  width: 80px;
  display: flex;
  margin-bottom: 20px;
`;

export const FullStars = styled.div`
  justify-content: center;
  z-index: 1;
  color: yellow;
  width: 100%;
`;

export const EmptyStars = styled.div`
  width: 100%;
  margin-left: -100%;
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  font-size: 16px;
`;
