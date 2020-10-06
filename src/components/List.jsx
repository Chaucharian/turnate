import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  padding-bottom: 25px;

  ul:first-child {
    border-right: 1px solid #424242;
    li {
      font-weight: 600;
      padding: 5px;
      //   text-transform: uppercase;
    }
  }
  ul {
    width: 100%;
    list-style: none;
    padding: 0px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      background: rgba(255, 255, 255, 0.12);
      border-bottom: 1px solid #424242;
    }
  }
`;
const List = ({ children }) => <ListContainer>{children}</ListContainer>;

export default List;
