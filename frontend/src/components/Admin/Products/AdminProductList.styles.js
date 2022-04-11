import styled from "styled-components";
import {
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineClose,
} from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  > div {
      width: 100%;
      margin-bottom: 50px;
    display: flex;
    > h1 {
      font-family: "Source Sans 3", sans-serif;
    }

    >button{
        background-color: #F8F6F5;
        color: black;
        border-radius: 5px;
        padding: 5px 20px;
        &:hover{
            transform: scale(1.1)
        }
    }
  }

  > table {
    width: 70%;
    > thead {
      > tr {
        font-size: 20px;
        background-color: #04aa6d;
        color: white;
        > th {
          padding: 8px;
        }
      }
    }

    > tbody {
      > tr {
        > td {
          padding: 16px;
          box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
        }
      }
    }
  }
`;

export const AdminRow = styled.td`
  display: flex;
  justify-content: space-around;
  > * {
    margin: 0 0;
  }
`;

export const CheckMark = styled(AiOutlineCheckCircle)`
  height: 25px;
  width: auto;
`;
export const NotSymbol = styled(AiOutlineClose)`
  height: 25px;
  width: auto;
`;
export const EditSymbol = styled(AiOutlineEdit)`
  height: 25px;
  width: auto;
`;
export const DeleteSymbol = styled(AiOutlineDelete)`
  height: 25px;
  width: auto;
  cursor: pointer;
`;
