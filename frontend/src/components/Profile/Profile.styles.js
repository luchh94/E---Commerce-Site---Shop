import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  max-height: 800px;
`;

export const UpperContainer = styled.div`
  display: grid;
  grid-template-columns: 720px 720px;
  grid-template-rows: 60px 60px 380px;
  max-width: 1440px;
  height: 500px;
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
    margin-bottom: 80px;
    border-bottom: 1px solid black;
  }

  > button {
      margin-top: 20px;
      width: 90px;
      height: 30px;
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
    margin: 0 0;
    padding-right: 50px;
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
  border-right: 1px solid black;

  > h2 {
    font-weight: normal;
    font-size: 20px;
    font-family: "Source Sans 3", sans-serif;
    margin-bottom: 80px;
    border-bottom: 1px solid black;
  }

  > button {
      margin-top: 60px;
      width: 90px;
      height: 30px;
  }
`;

export const ErrormessageContainer = styled.div`
  grid-area: error;
`;

export const BottomContainer = styled.div`
  width: 1440px;
  height: 750px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
