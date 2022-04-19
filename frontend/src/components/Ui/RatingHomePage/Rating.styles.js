import styled from "styled-components";

export const StarContainer = styled.div`
  width: 35%;
  display: flex;
  margin-bottom: ${(props) => (props.detail ? "0" : "20px")};
`;

export const FullStars = styled.div`
  justify-content: center;
  z-index: 1;
  color: #e27d60;
  width: 100%;
`;

export const EmptyStars = styled.div`
  width: 100%;
  margin-left: -100%;
`;
