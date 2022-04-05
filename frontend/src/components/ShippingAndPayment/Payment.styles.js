import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 500px;
  height: 350px;

  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 100px;
  border-bottom: 1px solid black;
  margin-top: 10px;
`;

export const ErrormessageContainer = styled.div`
  display: flex;
  width: 400px;
  height: 50px;
  margin-top: 15px;
  color: red;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 400px;
  height: 500px;

  > form {
    display: flex;
    height: 250px;
    flex-direction: column;
    justify-content: space-between;
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
      margin-bottom: 20px;
    }
  }
`;

export const InputContainer = styled.div`
  padding: 10px 10px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > label {
    margin: 0 0;
  }

  > input {
    height: 25px;
    width: 25px;
    margin: 0 0;

    border: none;
    border-bottom: 2px solid black;
  }
`;
