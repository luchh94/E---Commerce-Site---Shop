import styled from "styled-components";

export const Container = styled.div`

  margin-top: 20px;
  width: 800px;
  height: 600px;

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
  width: 800px;
  height: 500px;

  > form {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    > input {
      width: 400px;
      height: 40px;
    }

    > button {
      width: 100px;
      height: 50px;
      margin-top: 50px;
    }
  }
`;

export const InputContainer = styled.div`
  padding: 10px 10px;
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  > label {
    margin: 0 0;
    padding-left: 20px;
    margin-left: 50px;
    font-size: 20px;
  }

  > input {
    height: 25px;
    width: 250px;
    margin: 0 0;

    margin-right: 100px;
    border: none;
    border: 1px solid black;
    padding: 10px;
  }
`;
