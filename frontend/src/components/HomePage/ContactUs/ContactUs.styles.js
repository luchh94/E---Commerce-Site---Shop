import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  max-height: 1500px;
`;

export const ContactBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 720px;
  height: 600px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;

    background-size: cover;
    opacity: 5%;
    z-index: -1;
  }
`;

export const ContactForm = styled.form`
  width: 50%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.img`
  height: 25px;
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
  background-color: white;
  transition-duration: 0.2s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const LowerContainer = styled.div`
  background-image: url("https://i.ibb.co/Z2ZhSkW/backgroundmap.png");
  background-size: cover;

  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 40em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  position: relative;

  > a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20em;
    height: 20em;
    margin: 0 0;
    border: 1px solid white;

    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
      rgba(17, 17, 26, 0.1) 0px 0px 8px;
    text-decoration: none;
    font-weight: normal;
    letter-spacing: 4px;
    transition: background-color 0.4s;
    &:hover {
      background-color: white;
      > h3 {
        color: black;
      }
    }
    > h3 {
      padding: 22px 10px;
      transition: color 0.4s;
      font-family: "Source Sans 3", sans-serif;
      color: white;
      font-weight: normal;
    }

    @media (max-width: 700px){
      width: 15em;
    height: 15em;

    }
  }
`;
