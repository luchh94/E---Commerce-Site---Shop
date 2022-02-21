import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1440px;
  height: 600px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const ContactBox = styled.div`
  border-right: 2px solid;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 720px;
  height: 600px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url(https://images.unsplash.com/photo-1604076850742-4c7221f3101b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2731&q=80)
      no-repeat center;
    background-size: cover;
    opacity: 5%;
    z-index: -1;
  }
`;

export const Left = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div`
  width: 720px;
  height: 600px;
`;

export const Header = styled.img`
  height: 38px;
  width: auto;
  margin-top: 70px;
  margin-bottom: 40px;
`;

export const InputName = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 22px;
`;

export const InputEmail = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 22px;
`;

export const InputPhone = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 22px;
`;

export const TextArea = styled.textarea`
  height: 150px;
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 22px;
`;

export const SubmitButton = styled.button`
    margin-top: 10px;
  width: 100%;
  padding: 0.7rem 1rem;
  background-color: #2ecc71;
`;
