import React from "react";
import {
  MenuContainer,
  ListContainer,
  List,
  ListItem,
} from "./ProductMenu.styles";

import { HashLink } from "react-router-hash-link";

const ProductMenu = (props) => {
  return (
    <MenuContainer>
      <ListContainer>
        <List>
          <HashLink to="/#apple" spy={true} smooth={true}>
            <ListItem>Apple</ListItem>
          </HashLink>
          <HashLink to="/#camera" spy={true} smooth={true}>
            <ListItem>Cameras</ListItem>
          </HashLink>
          <HashLink to="/#mouseandkeyboard" spy={true} smooth={true}>
            <ListItem>Mouse and Keyboards</ListItem>
          </HashLink>
        </List>
      </ListContainer>
    </MenuContainer>
  );
};

export default ProductMenu;
