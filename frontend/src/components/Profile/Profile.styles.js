import styled from "styled-components";
import { RiInformationLine } from "react-icons/ri";

export const Container = styled.div`
  width: 100%;
  max-height: 800px;
`;

export const UpperContainer = styled.div`
  display: grid;
  grid-template-columns: 720px 720px;
  grid-template-rows: 60px 60px 380px;
  width: 80%;
  max-height: 500px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  grid-template-areas:
    "header header"
    "error error"
    "personal login";
`;

export const HeaderContainer = styled.div`
  margin-top: 20px;
  grid-area: header;
  align-items: center;
  > h1 {
    font-family: "Source Sans 3", sans-serif;
    font-weight: normal;
  }
`;

export const PersonalContainer = styled.div`
  width: 720px;
  height: auto;
  grid-area: personal;
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;

  > h2 {
    font-weight: normal;
    font-size: 20px;
    font-family: "Source Sans 3", sans-serif;
    margin-bottom: 35px;
    border-bottom: 1px solid black;
  }
  > form {
    display: flex;
    flex-direction: column;
    > button {
      margin-top: 20px;
      width: 90px;
      height: 30px;
    }
  }
`;

export const InputContainer = styled.div`
  padding: 10px 10px;
  width: 600px;
  display: flex;
  justify-content: space-between;
  > label {
    margin: 0 0;
    padding-left: 20px;
    margin-left: 50px;
  }

  > input {
    height: 25px;
    width: 250px;
    margin: 0 0;

    margin-right: 100px;
    border: none;
    border-bottom: 2px solid black;
  }
`;

export const LoginDataContainer = styled.div`
  width: 720px;
  height: auto;
  grid-area: login;
  display: flex;
  flex-direction: column;

  > h2 {
    font-weight: normal;
    font-size: 20px;
    font-family: "Source Sans 3", sans-serif;
    margin-bottom: 80px;
    border-bottom: 1px solid black;
  }
  > form {
    display: flex;
    flex-direction: column;
    > button {
      margin-top: 65px;
      width: 90px;
      height: 30px;
    }
  }
`;

export const ErrormessageContainer = styled.div`
  color: red;
  grid-area: error;
`;

export const BottomContainer = styled.div`
  width: 80%;
  height: 750px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const HeaderOrdersContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  > h1 {
    font-family: "Source Sans 3", sans-serif;
    font-weight: normal;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 500px;

  > table {
    width: 100%;

    > tbody {
      width: 100%;

      > tr {
        justify-content: center;
        align-items: center;
        height: 50px;
        > td {
          justify-content: center;
          text-align: center;
          background-color: #dee6ed;
        }
      }
    }

    > li {
      list-style: none;
      display: flex;
    }
  }
`;

export const InfoSymbol = styled(RiInformationLine)`
  width: 30%;
  height: auto;
`;
