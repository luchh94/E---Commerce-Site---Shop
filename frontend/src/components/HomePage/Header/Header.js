import React from "react";
import { useState, useRef } from "react";

import logo from "./logo.jpg";
import IconSearch from "./search_png.png";
import ProductMenu from "./ProductMenu";
import { HashLink } from "react-router-hash-link";
import {  useNavigate } from "react-router-dom";
import MyDropdown from "./ProfileMenu";

import {
  ContainerOne,
  ContainerTwo,
  ContainerThree,
  Logo,
  HeaderDiv,
  Navbar,
  ListElement,
  SearchBarContainer,
  SearchbarInput,
  SearchBtn,
  SearchIcon,
  IconsContainer,
  ProfileAnchor,
  CartAnchor,
  CartIcon,
  LinkElement,
  SignInLink,
} from "./Header.styles.js";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuRef = useRef();

  const menuHandler = (event) => {
    event.preventDefault();
    if (isOpen === false) {
      setIsOpen(!false);
    } else {
      setIsOpen(false);
    }
  };

  const redirectHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const userLoggedIn = localStorage.getItem("userData");

  return (
    <HeaderDiv>
      <Navbar>
        {/* Container One - List  */}

        <ContainerOne>
          <LinkElement href="/">
            <ListElement>about</ListElement>
          </LinkElement>
          <LinkElement href="/" onClick={menuHandler}>
            <ListElement>products</ListElement>
            {isOpen && <ProductMenu ref={menuRef} />}
          </LinkElement>

          <HashLink to="/#contact" spy={true} smooth={true}>
            <ListElement>contact us</ListElement>
          </HashLink>
        </ContainerOne>

        {/* Container Two - Logo */}

        <ContainerTwo>
          <Logo src={logo} onClick={redirectHandler} />
        </ContainerTwo>

        {/* Container Three - Searchbar + Profile and Cart */}

        <ContainerThree>
          {/* SearchBar */}

          <SearchBarContainer>
            <SearchbarInput type="text" name="" placeholder="Type to search" />
            <SearchBtn href="#">
              <SearchIcon src={IconSearch} />
            </SearchBtn>
          </SearchBarContainer>
          {/* Icons*/}

          <IconsContainer>
            <CartAnchor to="/cart">
              <CartIcon />
            </CartAnchor>

            <ProfileAnchor>
              {userLoggedIn ? (
                <MyDropdown />
              ) : (
                <SignInLink to="/signin">REGISTER / LOGIN</SignInLink>
              )}
            </ProfileAnchor>
          </IconsContainer>
        </ContainerThree>
      </Navbar>
    </HeaderDiv>
  );
};

export default Header;
