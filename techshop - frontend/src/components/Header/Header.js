import React from "react";
import logo from "./logo.jpg";
import IconSearch from "./search_png.png";
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
  return (
    <HeaderDiv>
      <Navbar>
        <ContainerOne>
          <LinkElement href="/">
            <ListElement>about</ListElement>
          </LinkElement>
          <LinkElement href="/">
            <ListElement>products</ListElement>
          </LinkElement>
          <LinkElement href="/">
            <ListElement>contact us</ListElement>
          </LinkElement>
        </ContainerOne>
        <ContainerTwo>
          <Logo src={logo} />
        </ContainerTwo>
        <ContainerThree>
          <SearchBarContainer>
            <SearchbarInput type="text" name="" placeholder="Type to search" />
            <SearchBtn href="#">
              <SearchIcon src={IconSearch} />
            </SearchBtn>
          </SearchBarContainer>
          <IconsContainer>
            <CartAnchor href="/">
              <CartIcon />
            </CartAnchor>
            <ProfileAnchor href="/">
              <ProfileIcon />
            </ProfileAnchor>
          </IconsContainer>
        </ContainerThree>
      </Navbar>
    </HeaderDiv>
  );
};

export default Header;
