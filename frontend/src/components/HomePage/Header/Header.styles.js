import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

import ProductMenu from "./ProductMenu";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

///////////// GENERAL HEADER ///////////////

export const HeaderDiv = styled.header`
  display: flex;
  justify-content: center;
  max-height: 250px;
  width: 100%;
`;

export const Navbar = styled.nav`
  display: flex;
  height: 200px;
  width: 100%;
  align-items: center;
`;

export const MenuMobile = styled.div`
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 100%;
  display: flex;
  @media (min-width: 950px) {
    display: none;
  }
`;

export const MobileDiv1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MobileDiv2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MobileDiv3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const Bars = styled(FaBars)`
width: 30px;
height: auto;`;


//////////// LIST /////////////

export const ContainerOne = styled.div`
  grid-area: item1;
  display: flex;

  list-style-type: none;
  width: 100%;
  > a {
    text-decoration-line: none;
    color: black;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

export const LinkElement = styled.a`
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  font-size: 1rem;
  color: black;
  border: 1px;
`;

export const ListElement = styled.li`
  text-transform: uppercase;
  font-family: "Source Sans 3", sans-serif;

  font-size: 1.1rem;

  @media (max-width: 500px) {
    font-size: 5px;
  }

  &:before {
    content: "";

    height: 0.25rem;
    width: 5rem;

    background-color: black;
    position: absolute;
    transform: translateY(40px);
    opacity: 0%;
    -webkit-transition: all 5ms;
    transition: all 5ms;
  }

  &:hover:before {
    height: 0.25rem;
    width: 5%;

    opacity: 20%;
    -webkit-transition: all 0.1s;
    transition: all 0.1s;
  }
`;

export const ProductElement = styled.li`
  text-transform: uppercase;
  font-family: "Source Sans 3", sans-serif;
  font-size: 1.1rem;

  &:before {
    content: ${ProductMenu};
    width: 500%;
    height: auto;
  }
`;

///////////// LOGO ///////////////

export const ContainerTwo = styled.div`
  grid-area: item2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 85%;
  @media (max-width: 950px) {
    width: 40%;
  }
`;

///////////// SEARCHBAR ///////////////

export const ContainerThree = styled.div`
  grid-area: item3;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const SearchbarInput = styled.input`
  border: none;
  background: none;
  outline: none;
  font-size: 14px;
  transition: 0.4s;
  width: 300%;
`;
export const SearchBarContainer = styled.div`
  height: 40px;
  width: 70%;
  padding: 3px 20px;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #eeeeee;
  > form {
    width: 95%;
    margin: 0 0;
    display: flex;
    justify-content: space-around;

    > button {
      border: none;
      margin: 0 0;
      transition-duration: 0.15s;
      cursor: pointer;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
`;

export const SearchBtn = styled.a`
  display: flex;
  opacity: 50%;
  border-radius: 30px;
  height: 30px;
  width: 30px;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  margin-top: 5px;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
`;

//////////// ICONS ////////////////

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0px 0px;
  width: 100%;
`;

export const ProfileAnchor = styled.div`
  margin: 0px 0px;
  text-decoration: none;
  min-width: 30px;
  margin-right: 50px;
`;

export const SignInLink = styled(Link)`
  margin: 0px 0px;
  font-size: 1rem;
  text-decoration: none;
  font-family: "Source Sans 3", sans-serif;
  color: black;
  font-weight: normal;
  border-left: 1px solid black;
  padding-left: 5px;
`;

export const CartAnchor = styled(Link)`
  width: 7%;
  margin: 0px 0px;
  margin-left: 50px;
  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 950px) {
    width: 25px;
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  width: 100%;
  height: auto;
  color: black;
`;
