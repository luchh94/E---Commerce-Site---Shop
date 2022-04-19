import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
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
    height: 40px;
    width: 300px;
    margin: 0 0;

    margin-right: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const PersonalContainer = styled.div`
  width: 40%;
  height: auto;
  padding: 40px 0px;
  grid-area: personal;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  > p {
    margin-bottom: 40px;
    border: 1px solid black;
    padding: 10px 10px;
  }

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

export const CheckBox = styled.input`
  margin-left: 50px;
  transform: scale(1.5)


`;
