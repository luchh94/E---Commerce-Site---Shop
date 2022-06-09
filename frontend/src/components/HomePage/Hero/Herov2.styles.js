import styled from "styled-components";

export const Button = styled.button`
  width: 30%;
  height: 5em;
  border: 1px solid white;
  cursor: pointer;
  background-color: rgb(0, 0, 0, 0);
  color: white;
  transition-duration: 300ms;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 50em;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("./assets/Tech42Day/pictures/heroimage2.jpg");
  background-position: center center;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50em;
  font-family: "Nanum Gothic", sans-serif;

  > div {
    width: 40%;
    height: 60%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 720px) {
      height: 50%;
    }

    > img {
      height: 30em;
      width: auto;
      animation: loadImage 700ms ease-in-out;

      @media (max-width: 950px) {
        max-height: 20em;
        width: auto;
      }
      @media (max-width: 550px) {
        max-height: 12em;
        width: auto;
      }

      @keyframes loadImage {
        0% {
          opacity: 0%;
          transform: translateX(20%);
        }

        100% {
          opacity: 100%;
          transform: translateX(0%);
        }
      }
    }
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 40%;
  height: 4em;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  > h3 {
    opacity: 60%;
    color: white;
    background-color: black;
    padding: 1em 1.5em;
    border-top: 1px solid white;
    animation: text-load 300ms ease-in-out;

    @keyframes text-load {
      0% {
        opacity: 0%;
      }

      100% {
        opacity: 60%;
      }
    }
  }

  > p {
    opacity: 80%;
    padding: 0.5em 0em;

    width: 100%;
    font-size: 3em;
    border-bottom: 2px solid white;
    color: white;

    > span {
      color: #41b3a3;
      opacity: 100%;
      transform: translate(-50%, -50%);
      font-size: 1.5em;
      animation: load-span 1000ms ease-in-out;

      @keyframes load-span {
        0% {
          transform: translateX(-20%);
          opacity: 0%;
        }

        100% {
          transform: translateX(0%);
          opacity: 100%;
        }
      }
    }
    @media (max-width: 950px) {
      font-size: 2em;
    }
    @media (max-width: 650px) {
      font-size: 1.8em;
    }
    @media (max-width: 500px) {
      font-size: 1.3em;
    }
  }
`;
