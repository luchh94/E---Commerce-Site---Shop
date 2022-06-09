import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const StarContainer = styled.div`
  margin: 0 0;
  max-height: 50px;
  width: 15em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullStars = styled.div`
  z-index: 1;
  color: #e27d60;
  width: 100%;

  > svg {
    margin: 0 5px;
    max-width: 25px;
    height: auto;
  }
`;

export const EmptyStars = styled.div`
  width: 100%;
  margin-left: -100%;
  > svg {
    max-width: 25px;
    height: auto;
    margin: 0 5px;
  }
`;

export const Stars = styled(FaStar)`
  width: 100%;
  height: auto;
`;
