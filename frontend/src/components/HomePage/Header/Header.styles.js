import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { BsFilePerson } from "react-icons/bs";
import { CgLogIn } from "react-icons/cg";
import ProductMenu from "./ProductMenu";
import { Link } from "react-router-dom";

///////////// GENERAL HEADER ///////////////

export const HeaderDiv = styled.header`
  display: flex;

  height: 220px;
  width: 1440px;
`;

export const Navbar = styled.nav`
  display: flex;
  height: 254px;
  width: 1440px;
  align-items: center;
`;

//////////// LIST /////////////

export const ContainerOne = styled.div`
  display: flex;
  list-style-type: none;
  width: 450px;
  margin-right: 110px;
  padding: 20px 10px;
  border-right: 1px solid;
  > a {
    text-decoration-line: none;
    color: black;
  }
`;

export const LinkElement = styled.a`
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  font-size: 14px;
  color: black;
  border: 1px;
`;

export const ListElement = styled.li`
  text-transform: uppercase;
  font-family: "Source Sans 3", sans-serif;

  font-size: 18px;

  &:before {
    content: "";

    height: 5px;
    width: 120px;

    background-color: black;
    position: absolute;
    transform: translateY(40px);
    opacity: 0%;
    -webkit-transition: all 5ms;
    transition: all 5ms;
  }

  &:hover:before {
    height: 5px;
    width: 70px;

    opacity: 20%;
    -webkit-transition: all 0.1s;
    transition: all 0.1s;
  }
`;

export const ProductElement = styled.li`
  text-transform: uppercase;
  font-family: "Source Sans 3", sans-serif;
  font-size: 18px;

  &:before {
    content: ${ProductMenu};
    width: 200px;
    height: 200px;
  }
`;

///////////// LOGO ///////////////

export const ContainerTwo = styled.div``;

export const Logo = styled.img`
  height: 50px;
  width: auto;
`;

///////////// SEARCHBAR ///////////////

export const ContainerThree = styled.div`
  width: 560px;
  display: flex;
  justify-content: space-around;
  margin-left: 60px;
`;

export const SearchbarInput = styled.input`
  border: none;
  background: none;
  outline: none;
  font-size: 14px;
  transition: 0.4s;
  width: 200px;
`;
export const SearchBarContainer = styled.div`
  height: 40px;
  border-radius: 20px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  margin-left: 50 px;
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
`;

export const ProfileAnchor = styled.div`
  text-decoration: none;
  margin-left: 30px;
  min-width: 30px;
`;

export const SignInLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;

  font-family: "Source Sans 3", sans-serif;
  color: black;
  font-weight: normal;
  border: 1px solid black;
  padding: 2px 10px;
`;

export const CartAnchor = styled(Link)``;

export const ProfileIcon = styled(BsFilePerson)`
  margin-right: 15px;
  width: 35px;
  height: auto;
  color: black;
`;

export const ProfileIconLink = styled.a`
  cursor: pointer;
`;

export const LoginIcon = styled(CgLogIn)`
  margin-right: 15px;
  width: 35px;
  height: auto;
  color: black;
`;

export const CartIcon = styled(FaShoppingCart)`
  width: 30px;
  height: auto;
  color: black;
`;
