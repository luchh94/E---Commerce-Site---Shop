import { LineWave } from "react-loader-spinner";
import styled from "styled-components";

export const Spinner = styled(LineWave)`
  height: 150%;
  width: auto;
  color: black;
  background-color: black;
`;

export const Container = styled.div`
  position: relative;
  width: 1440px;
  height: 880px;
  display: flex;

  align-items: center;
`;
