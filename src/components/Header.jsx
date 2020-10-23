import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";
import TransitionMounted from "./TransitionMounted";
import { Link } from "react-scroll";
import { useMediaQuery } from "@material-ui/core";

const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 5px 15px 5px 15px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background-color: #000;
  box-shadow: 0px 0px 15px rgb(255 255 255 / 10%);
  transition: 0.5s ease-in-out;

  ${({ isOpen, isDesktop }) =>
    isOpen &&
    !isDesktop &&
    `
    height: 220px;
    `}
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 30px;
    font-weight: 800;
    font-family: Raleway;
    margin: 0px;
  }
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background: url("/mobile-logo.png");
  background-size: 65px;
  background-position: center;
`;

const Nav = styled.nav`
  ${({ isDesktop }) => ` 
  ul {
    text-align: right;
    list-style: none;
    cursor: pointer;
    font-family: Raleway;
    color: #fff;
    font-size: 18px;

    li {
      padding: 5px 5px;
    }
    ${
      isDesktop &&
      `
    display: flex;
    margin: 0px;
    padding: 0px;
    `
    }
  }
`}
`;

const List = ({ isDesktop, onClick }) => (
  <TransitionMounted time={4} width={`auto`}>
    <Nav isDesktop={isDesktop} onClickCapture={onClick}>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="steps"
            spy={true}
            smooth={true}
            duration={1000}
          >
            ¿Cómo funciona?
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="prices"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Planes
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </Nav>
  </TransitionMounted>
);

const PageHeader = () => {
  const [isOpen, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:830px)");

  return (
    <TransitionMounted>
      <Header isDesktop={isDesktop} isOpen={isOpen}>
        <Container>
          {!isDesktop && <Logo />}
          {isDesktop && (
            <LogoContainer>
              <Logo />
              <h1>TeAnoto</h1>
            </LogoContainer>
          )}
          {!isDesktop ? (
            <BurgerButton
              onClick={() => setOpen((isOpen) => !isOpen)}
              isOpen={isOpen}
            />
          ) : (
            <List isDesktop={isDesktop} />
          )}
        </Container>
        {!isDesktop && isOpen && (
          <List
            isDesktop={isDesktop}
            onClick={() => setOpen((isOpen) => !isOpen)}
          />
        )}
      </Header>
    </TransitionMounted>
  );
};

export default PageHeader;
