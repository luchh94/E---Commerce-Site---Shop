import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { BsFilePerson } from "react-icons/bs";

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
  width: 560px;
`;

export const LinkElement = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: black;
  margin-right: 59px;
  border: 1px;
`;

export const ListElement = styled.li`
  text-transform: uppercase;
  font-family: "Source Sans 3", sans-serif;
  font-size: 18px;
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

export const ProfileAnchor = styled.a`
  margin-left: 30px;
  width: 30px;
`;

export const CartAnchor = styled.a``;

export const ProfileIcon = styled(BsFilePerson)`
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
