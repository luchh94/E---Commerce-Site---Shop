import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  SearchIcon,
  CartIcon,
  List,
  Bars,
  MobileContainer,
  DesktopContainer,
  RightContainer,
  MobileOverlay,
  CloseIcon,
  MobileProductList,
  DesktopProductList,
  MobileRightContainer,
  RegisterLink,
  SearchbarDiv,
  InputDiv,
  ArrowIcon,
  InputDivMobile,
} from "./Headerv2.styles";
import Logo from "./logo.jpg";
import ProfileMenu from "./ProfileMenu";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const Headerv2 = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [openMobileProductList, setOpenMobileProductList] = useState(true);
  const [openDesktopProductList, setOpenDesktopProductList] = useState(false);
  const [openSearchbar, setSearchbarOpen] = useState("false");
  const [keyword, setKeyword] = useState("");
  const dropdownRef = useRef();

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
    <Container>
      <DesktopContainer>
        <div>
          <img src={Logo} />
        </div>

        <div>
          <List>
            <HashLink to="/#about" spy={true} smooth={true}>
              <li>About</li>
            </HashLink>
            <HashLink to="/#contact" spy={true} smooth={true}>
              <li>Contact Us</li>
            </HashLink>

            <div
              onClick={() => {
                setOpenDesktopProductList(!openDesktopProductList);
              }}
              data-dropdown
            >
              Products
              <DesktopProductList
                hidden={openDesktopProductList}
                active={openDesktopProductList}
                ref={dropdownRef}
                data-dropdown
              >
                <HashLink to="/#apple" spy={true} smooth={true}>
                  <li>Apple</li>
                </HashLink>
                <HashLink to="/#camera" spy={true} smooth={true}>
                  <li>Camera</li>
                </HashLink>
                <HashLink to="/#keyboard" spy={true} smooth={true}>
                  <li>Keybaords and Mice</li>
                </HashLink>
              </DesktopProductList>
            </div>
          </List>
        </div>
        <div>
          <SearchbarDiv>
            <SearchIcon
              onClick={() => {
                setSearchbarOpen(!openSearchbar);
              }}
            />
            <InputDiv visibility={openSearchbar} onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Search a Product..."
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
              />
              <button>
                <ArrowIcon />
              </button>
            </InputDiv>
          </SearchbarDiv>
          <RightContainer>
            <CartIcon
              onClick={() => {
                navigate("/cart");
              }}
            />
            {userLoggedIn ? (
              <ProfileMenu />
            ) : (
              <RegisterLink to="/signin">
                <p>register / login</p>
              </RegisterLink>
            )}
          </RightContainer>
        </div>
      </DesktopContainer>

      <MobileContainer>
        <div>
          <Bars
            onClick={() => {
              setOpen(!open);
            }}
          />

          <img src={Logo} />
        </div>
        <MobileRightContainer>
          <div>
            <SearchbarDiv>
              <SearchIcon
                onClick={() => {
                  setSearchbarOpen(!openSearchbar);
                }}
              />
              <InputDivMobile
                visibility={openSearchbar}
                onSubmit={submitHandler}
              >
                <input
                  type="text"
                  placeholder="Search a Product..."
                  onChange={(e) => {
                    setKeyword(e.target.value);
                  }}
                />
                <button>
                  <ArrowIcon />
                </button>
              </InputDivMobile>
            </SearchbarDiv>
            <CartIcon
              onClick={() => {
                navigate("/cart");
              }}
            />
          </div>
          <div>
            {userLoggedIn ? (
              <ProfileMenu />
            ) : (
              <RegisterLink to="/signin">
                <p>register / login</p>
              </RegisterLink>
            )}
          </div>
        </MobileRightContainer>
      </MobileContainer>

      <MobileOverlay hidden={open ? `none` : `flex`}>
        <ul>
          <CloseIcon
            onClick={() => {
              setOpen(!open);
            }}
          />
          <HashLink
            to="/#about"
            spy={true}
            smooth={true}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <li>About</li>
          </HashLink>
          <li
            onClick={() => {
              setOpenMobileProductList(!openMobileProductList);
            }}
          >
            Products
          </li>
          <MobileProductList hidden={openMobileProductList ? `none` : `flex`}>
            <HashLink
              to="/#apple"
              spy={true}
              smooth={true}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li>Apple</li>
            </HashLink>
            <HashLink
              to="/#camera"
              spy={true}
              smooth={true}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li>Camera</li>
            </HashLink>
            <HashLink
              to="/#keyboard"
              spy={true}
              smooth={true}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li>Keybaords and Mice</li>
            </HashLink>
          </MobileProductList>
          <HashLink
            to="/#apple"
            spy={true}
            smooth={true}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <li>Contact Us</li>
          </HashLink>
        </ul>
      </MobileOverlay>
    </Container>
  );
};

export default Headerv2;
