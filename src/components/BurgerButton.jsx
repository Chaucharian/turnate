import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50px;
  padding-top: 6px;
  button {
    display: block;
    background-color: transparent;
    outline: none;
    width: 40px;
    height: 35px;
    margin: 0px;
    padding: 0px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    border: none;

    span {
      display: block;
      position: absolute;
      left: 0px;
      height: 4px;
      width: 100%;
      background: #fff;
      border-radius: 9px;
      opacity: 1;
      transition: 0.25s ease-in-out;
      transform-origin: left center;

      &:hover {
        background: grey;
      }
    }

    span:nth-child(1) {
      top: 0px;
    }
    span:nth-child(2) {
      top: 12px;
    }
    span:nth-child(3) {
      top: 24px;
    }
    ${({ isOpen }) =>
      isOpen &&
      `
    span:nth-child(1) {
        transform: rotate(45deg);
        top: -3px;
    }
    span:nth-child(2) {
        width: 0%;
        opacity: 0;
    }
    span:nth-child(3) {
        transform: rotate(-45deg);
        top: 25px;
    }
    `}
  }
`;

const BugerButton = ({ isOpen, onClick }) => (
  <Container isOpen={isOpen}>
    <button onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </Container>
);

export default BugerButton;
