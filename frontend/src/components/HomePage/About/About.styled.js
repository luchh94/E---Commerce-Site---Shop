import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  width: 80%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(16, 1fr);

  @media (max-width: 720px) {
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(16, 1fr);
  }

  > div {
    width: 100%;
    font-family: "Sintony", sans-serif;
    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    &:nth-of-type(1) {
      opacity: 60%;
      grid-column: 22/31;
      grid-row: 4/16;
      background-image: url("./assets/Tech42Day/gridpictures/gridpic1.jpg");
      background-size: cover;
      background-repeat: no-repeat;

      @media (max-width: 720px) {
        opacity: 60%;
        grid-column: 1/8;
        grid-row: 9/16;
        background-image: url("./assets/Tech42Day/gridpictures/gridpic1.jpg");
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
    &:nth-of-type(2) {
      opacity: 80%;
      grid-column: 1/8;
      grid-row: 1/9;
      background-image: url("./assets/Tech42Day/gridpictures/gridpic2.jpg");
      background-size: cover;
      background-repeat: no-repeat;

      @media (max-width: 720px) {
        opacity: 60%;
        grid-column: 9/16;
        grid-row: 1/8;
        background-image: url("./assets/Tech42Day/gridpictures/gridpic2.jpg");
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
    &:nth-of-type(3) {
      opacity: 60%;
      grid-column: 9/21;
      grid-row: 2/8;
      background-image: url("./assets/Tech42Day/gridpictures/gridpic3.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      @media (max-width: 720px) {
        display: none;
      }
    }
    &:nth-of-type(4) {
      opacity: 50%;
      grid-column: 2/13;
      grid-row: 10/16;
      background-image: url("./assets/Tech42Day/gridpictures/gridpic4.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      @media (max-width: 720px) {
        display: none;
      }
    }

    &:nth-of-type(5) {
      grid-column: 23/30;
      grid-row: 1/4;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 720px) {
        grid-column: 1/9;
        grid-row: 1/9;
        font-size: 0.8em;
      }

      > h1 {
        font-weight: normal;
        > span {
          font-weight: bold;
        }
      }
    }
    &:nth-of-type(6) {
      grid-column: 14/21;
      grid-row: 9/16;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;

      @media (max-width: 720px) {
        grid-column: 9/16;
        grid-row: 9/16;
        height: 70%;
      }

      > div {
        width: 100%;
        line-height: 1.4em;
        &:nth-of-type(1) {
          > p {
            color: rgba(0, 0, 0, 0.8);
            > span {
              font-weight: bold;
              color: rgba(0, 0, 0, 1);
            }
          }
        }

        &:nth-of-type(2) {
          font-weight: bold;
          text-align: left;
          font-size: 1.1em;
        }
        &:nth-of-type(3) {
          color: rgba(0, 0, 0, 0.8);
        }
      }
    }
  }
`;

export const Pic1 = styled.div`
  display: ${(props) => props.showPicture1};
  background-position: center;
  animation: load-picture 300ms ease-in-out;

  @keyframes load-picture {
    0% {
      opacity: 0%;
      transform: translateX(-20%);
    }

    100% {
      opacity: 80%;
      transform: translateX(0%);
    }
  }
`;

export const Pic2 = styled.div`
  display: ${(props) => props.showPicture2};
  background-position: center;
  animation: load-picture 500ms ease-in-out;

  @keyframes load-picture {
    0% {
      opacity: 0%;
      transform: translateX(-20%);
    }

    100% {
      opacity: 50%;
      transform: translateX(0%);
    }
  }
`;

export const Pic3 = styled.div`
  display: ${(props) => props.showPicture3};
  background-position: center;
  animation: load-picture 400ms ease-in-out;

  @keyframes load-picture {
    0% {
      opacity: 0%;
      transform: translateY(-20%);
    }

    100% {
      opacity: 50%;
      transform: translateY(0%);
    }
  }
`;

export const Pic4 = styled.div`
  display: ${(props) => props.showPicture4};
  background-position: center;
  animation: load-picture 600ms ease-in-out;

  @keyframes load-picture {
    0% {
      opacity: 0%;
      transform: translateX(20%);
    }

    100% {
      opacity: 50%;
      transform: translateX(0%);
    }
  }
`;

export const TextDiv = styled.div`
  display: ${(props) => props.showDiv};
  animation: showDiv 800ms ease-in-out;
  font-size: 1em;

  @keyframes showDiv {
    0% {
      opacity: 0%;
      transform: translateY(20%);
    }

    100% {
      opacity: 50%;
      transform: translateY(0%);
    }
  }

  @media (max-width: 1200px) {
    font-size: 0.8em;
  }

  @media (max-width: 800px) {
    font-size: 0.7em;
  }
`;
