import React from "react";
import { useState, useRef } from "react";

import logo from "./logo.jpg";
import logosmall from "./logosmall.png";

import ProductMenu from "./ProductMenu";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
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
  SearchIcon,
  IconsContainer,
  ProfileAnchor,
  CartAnchor,
  CartIcon,
  LinkElement,
  SignInLink,
  MenuMobile,
  Bars,
  MobileDiv1,
  MobileDiv2,
  MobileDiv3,
} from "./Header.styles.js";

const Header = () => {
  const [keyword, setKeyword] = useState("");
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

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <HeaderDiv>
      <Navbar>
        {/* Container One - List  */}

        <ContainerOne>
          <HashLink to="/#about" spy={true} smooth={true}>
            <ListElement>about</ListElement>
          </HashLink>
          <LinkElement href="/" onClick={menuHandler}>
            <ListElement>products</ListElement>
            {isOpen && <ProductMenu ref={menuRef} />}
          </LinkElement>

          <HashLink to="/#contact" spy={true} smooth={true}>
            <ListElement>contact us</ListElement>
          </HashLink>
        </ContainerOne>

        <MenuMobile>
          <MobileDiv1>
            <CartAnchor to="/cart">
              <CartIcon />
            </CartAnchor>

            <Bars />
          </MobileDiv1>
          <MobileDiv2>
            <Logo src={logosmall} />
          </MobileDiv2>
          <MobileDiv3>
            <ProfileAnchor>
              {userLoggedIn ? (
                <MyDropdown />
              ) : (
                <SignInLink to="/signin">REGISTER / LOGIN</SignInLink>
              )}
            </ProfileAnchor>
          </MobileDiv3>
        </MenuMobile>

        {/* Container Two - Logo */}

        <ContainerTwo>
          <Logo src={logo} onClick={redirectHandler} />
        </ContainerTwo>

        {/* Container Three - Searchbar + Profile and Cart */}

        <ContainerThree>
          {/* SearchBar */}

          <SearchBarContainer>
            <form onSubmit={submitHandler}>
              <SearchbarInput
                type="text"
                name=""
                placeholder="Type to search"
                onChange={(e) => setKeyword(e.target.value)}
              ></SearchbarInput>
              <button type="submit">
                <SearchIcon />
              </button>
            </form>
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
