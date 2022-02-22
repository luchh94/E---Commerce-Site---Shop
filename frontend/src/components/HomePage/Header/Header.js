import React from "react";
import { useState } from "react";

import logo from "./logo.jpg";
import IconSearch from "./search_png.png";
import ProductMenu from "./ProductMenu";
import { HashLink } from "react-router-hash-link";

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
  ProfileIcon,
  CartAnchor,
  CartIcon,
  LinkElement,
} from "./Header.styles.js";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menuHandler = (event) => {
    event.preventDefault();
    if (open === false) {
      setOpen(!false);
    } else {
      setOpen(false);
    }
  };

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
            {open && <ProductMenu />}
          </LinkElement>

          <HashLink to="/#contact" spy={true} smooth={true}>
            <ListElement>contact us</ListElement>
          </HashLink>
        </ContainerOne>

        {/* Container Two - Logo */}

        <ContainerTwo>
          <Logo src={logo} />
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
            <ProfileAnchor to="/profile">
              <ProfileIcon />
            </ProfileAnchor>
          </IconsContainer>
        </ContainerThree>
      </Navbar>
    </HeaderDiv>
  );
};

export default Header;
