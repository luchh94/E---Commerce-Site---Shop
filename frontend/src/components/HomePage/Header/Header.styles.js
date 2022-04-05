import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

import ProductMenu from "./ProductMenu";
import { Link } from "react-router-dom";

///////////// GENERAL HEADER ///////////////

export const HeaderDiv = styled.header`
  display: flex;
  justify-content: center;
  max-height: 250px;
  width: 100%;
`;

export const Navbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  grid-template-areas: "item1 item2 item3";
  height: 200px;
  width: 100%;
  align-items: center;
`;

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
`;

export const Logo = styled.img`
  height: auto;
  width: 85%;
`;

///////////// SEARCHBAR ///////////////

export const ContainerThree = styled.div`
  grid-area: item3;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  height: auto;
  width: 70%;
  padding: 3px 20px;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;

  background-color: #eeeeee;
`;

export const SearchBtn = styled.a`
  display: flex;
  opacity: 50%;
  border-radius: 30px;
  height: 30px;
  width: 30px;
`;

export const SearchIcon = styled.img`
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
`;

export const CartIcon = styled(FaShoppingCart)`
  width: 100%;
  height: auto;
  color: black;
`;
