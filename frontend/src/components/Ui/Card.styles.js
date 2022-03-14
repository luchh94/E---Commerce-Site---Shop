import styled from "styled-components";
import { FaInfoCircle } from "react-icons/fa";

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 327px;
  width: 259px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-top: 20px;
  justify-content: space-between;
  cursor: pointer;

  img {
    margin-bottom: 11px;
    height: 136px;
    width: auto;
  }
`;

export const ShadowDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: -20px;

  width: 259px;
  height: 327px;

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
  width: 100px;
  height: 56.25px;
  text-align: center;
  align-items: center;

  font-size: 16px;
  font-family: "Sintony", sans-serif;
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
