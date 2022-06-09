import styled from "styled-components";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

export const InstagramIcon = styled(AiOutlineInstagram)`
  width: 2em;
  height: auto;
`;

export const FacebookIcon = styled(AiOutlineFacebook)`
  width: 2em;
  height: auto;
`;

export const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: #eeeeee;

  > div {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    > ul {
      height: 50%;
      width: 100%;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 0.8em;
    }
    > div {
      display: flex;
    }
  }
`;
