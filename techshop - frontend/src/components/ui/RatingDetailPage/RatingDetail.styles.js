import styled from "styled-components";

export const StarContainer = styled.div`
    margin-left: 50px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items:center;
`;

export const FullStars = styled.div`
  justify-content: center;
  z-index: 1;
  color: #e27d60;
  width: 500px;

  > svg {
    margin: 0 5px;
    height: 25px;
    width: auto;
  }
`;

export const EmptyStars = styled.div`
  width: 500px;
  margin-left: -100%;
  > svg {
    height: 25px;
    width: auto;
    margin: 0 5px;
  }
`;
