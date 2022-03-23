import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 500px;
  height: 650px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 100px;
  border-bottom: 1px solid black;
  margin-top: 20px;
`;

export const ErrormessageContainer = styled.div`
  display: flex;
  width: 400px;
  height: 100px;
  margin-top: 30px;
  color: red;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 400px;
  height: 500px;

  > form {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    > input {
      width: 400px;
      height: 40px;
      margin: 20px 0px;
    }

    > button {
      width: 100px;
      height: 50px;
      color: white;
      background-color: black;
      margin-top: 20px;
    }
  }
`;
