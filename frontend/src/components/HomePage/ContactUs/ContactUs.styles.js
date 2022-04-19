import styled from "styled-components";


export const Container = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  width: 80%;
  max-height: 1500px;
`;

export const ContactBox = styled.div`
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
`;

export const LowerContainer = styled.div`
  width: 60%;
  display: flex;
  margin-top: 50px;
  > a {
    width: 50%;
    margin: 0 0;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
      rgba(17, 17, 26, 0.1) 0px 0px 8px;
    text-decoration: none;
  }
`;

export const MapContainer = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

export const AdressContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  font-weight: normal;
  flex-direction: column;
  letter-spacing: 4px;
  justify-content: center;
  align-items: center;

  transition: background-color 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #aa99aa;
    > h3 {
      color: white;
    }
  }
  > h3 {
    padding: 22px 10px;
    transition: color 0.4s;
    font-family: "Source Sans 3", sans-serif;
    color: black;
    font-weight: normal;
  }
`;
