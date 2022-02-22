import styled from "styled-components";

export const MenuContainer = styled.div`
  height: 170px;
  width: 250px;
  margin-top: 70px;
  background-color: white;
  position: absolute;
  border-bottom: 1px solid black;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transform: translateX(0px);
  padding: 2px;
`;

export const ListContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style-type: none;
  font-family: "Sintony", sans-serif;
  letter-spacing: 2px;
  background-color: white;

  > a {
    text-decoration-line: none;
    color: black;
  }
`;

export const ListItem = styled.li`
  font-family: "Sintony", sans-serif;
  font-size: 15px;
  padding: 5px;
  &:hover {
    transition: 0.3s;
    background-color: #f2f2f2;
  }
`;
