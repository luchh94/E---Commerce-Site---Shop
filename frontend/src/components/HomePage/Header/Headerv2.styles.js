import styled, { css } from "styled-components";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import {
  AiOutlineSearch,
  AiOutlineCloseCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const CloseIcon = styled(AiOutlineCloseCircle)`
  width: 4em;
  height: auto;
  cursor: pointer;

  transition-duration: 300ms;

  &:hover {
    transform: scale(1.2);
  }
`;

export const RegisterLink = styled(Link)``;

export const Bars = styled(FaBars)`
  height: 1.2em;
  width: auto;
  cursor: pointer;

  transition-duration: 300ms;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 600px) {
    height: 1em;
    width: auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  justify-content: space-between;
  animation: nav-load 500ms ease-in-out;
  font-family: "Nanum Gothic", sans-serif;

  > div {
    > img {
      width: 10em;
      height: auto;
      cursor: pointer;
    }
  }

  @keyframes nav-load {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0%);
    }
  }
`;

export const List = styled.ul`
  display: flex;
  margin: 0 0;
  width: 100%;
  justify-content: space-between;
  list-style-type: none;
  max-width: 30em;

  > li {
    position: relative;
    cursor: pointer;
    transition-duration: 300ms;

    &:hover {
      transform: scale(1.2);
    }
  }

  > div {
    transition-duration: 300ms;
    &:hover {
      transform: scale(1.2);
    }
  }

  > a {
    transition-duration: 300ms;

    &:hover {
      transform: scale(1.2);
    }
  }

  > div {
    position: relative;
    cursor: pointer;
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  width: 1.2em;
  height: auto;
  margin: 0 0;
  cursor: pointer;
  transition-duration: 300ms;

  &:hover {
    transform: scale(1.2);
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  width: 1.2em;
  height: auto;
  margin: 0 0;
  cursor: pointer;

  transition-duration: 300ms;

  &:hover {
    transform: scale(1.2);
  }
`;

export const SearchbarDiv = styled.div`
  margin: 0 0;
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const InputDiv = styled.form`
  position: absolute;
  top: 4em;
  left: 4em;
  width: 100%;
  height: 1em;
  display: ${(props) => (props.visibility ? `none` : `flex`)};
  z-index: 10;
  align-items: center;
  animation: load-input 300ms ease-in-out;
  > button {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0%;
    background-color: rgb(0, 0, 0, 0);
    border: none;
    cursor: pointer;
    color: white;
    border: 1px solid white;
  }
  > input {
    width: 15em;
    height: 3em;
  }

  @keyframes load-input {
    0% {
      transform: translateY(-50%);
    }

    100% {
      transform: translateY(0%);
    }
  }
`;

export const InputDivMobile = styled.form`
  position: absolute;
  top: 4em;

  left: 0%;
  width: 100%;
  height: 1em;
  display: ${(props) => (props.visibility ? `none` : `flex`)};
  z-index: 10;
  align-items: center;
  animation: load-input 300ms ease-in-out;
  > button {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0%;
    background-color: rgb(0, 0, 0, 0);
    border: none;
    cursor: pointer;
    color: white;
    border: 1px solid white;
  }
  > input {
    width: 15em;
    height: 3em;
  }

  @keyframes load-input {
    0% {
      transform: translateY(-50%);
    }

    100% {
      transform: translateY(0%);
    }
  }
`;

export const ArrowIcon = styled(AiOutlineArrowRight)`
  height: 2em;
  width: auto;
`;

export const DesktopContainer = styled.div`
  display: none;
  width: 100%;
  height: auto;
  justify-content: space-between;

  > div {
    width: 30rem;
    display: flex;
    align-items: center;

    > img {
      max-width: 15rem;
      height: auto;
      cursor: pointer;
    }
  }

  @media (min-width: 950px) {
    display: flex;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  > div {
    margin: 0 0;
    display: flex;
    justify-content: space-between;
    width: 60%;
    > img {
      width: 10em;
      height: auto;
      cursor: pointer;

      @media (max-width: 600px) {
        width: 6em;
        height: auto;
      }
    }
  }

  @media (min-width: 950px) {
    display: none;
  }
`;

export const MobileOverlay = styled.div`
  z-index: 99;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  justify-content: center;
  align-items: center;
  animation: load-overlay 300ms ease-in-out;

  @keyframes load-overlay {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0%);
    }
  }

  display: ${(props) => props.hidden};

  > ul {
    list-style: none;
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: space-between;
    > a {
      color: white;
    }
    > a {
      color: white;
      font-size: 2em;
      cursor: pointer;
      transition-duration: 300ms;

      &:hover {
        transform: scale(1.2);
      }
    }
    > li {
      color: white;
      font-size: 2em;
      cursor: pointer;
      transition-duration: 300ms;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export const MobileProductList = styled.ul`
  display: ${(props) => props.hidden};
  width: 100%;
  height: 30%;
  flex-direction: column;
  justify-content: space-between;
  transition-duration: 300ms;
  list-style: none;

  > li {
    font-size: 1.2em;
    cursor: pointer;
  }

  > a {
    color: white;
    transition-duration: 300ms;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const DesktopProductList = styled.div`
  display: flex;
  opacity: ${(props) => (props.hidden ? `100%` : `0%`)};
  justify-content: space-around;
  flex-direction: column;
  z-index: ${(props) => (props.hidden ? `5` : `-1`)};
  background-color: white;
  position: absolute;
  height: ${(props) => (props.hidden ? `10em` : `0em`)};
  transition: all 0.3s;
  width: 10em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  margin-top: 2em;

  left: 0%;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15em;
`;

export const MobileRightContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25em;

  > div {
    width: 10em;
    display: flex;
    justify-content: space-around;
  }
`;
