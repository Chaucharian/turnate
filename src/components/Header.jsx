import React, { useState } from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";
import TransitionMounted from "./TransitionMounted";
import { Link } from "react-scroll";

const Header = styled.header`
  padding: 5px;
  width: 100%;
  height: 66px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background-color: #000;
  box-shadow: 0px 0px 15px rgb(255 255 255 / 10%);
  transition: 0.5s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    `
    height: 220px;
    `}
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background: #fff;
`;

const Ul = styled.ul`
  text-align: right;
  list-style: none;
  cursor: pointer;
  font-family: Raleway;
  color: #fff;
  font-size: 18px;

  li {
    padding: 5px 5px;
  }
`;

const PageHeader = (props) => {
  // const { classes, onChange, isOpen } = props;
  const [isOpen, setOpen] = useState(false);
  const isMobile = true;

  return (
    <TransitionMounted>
      <Header isOpen={isOpen}>
        <Container>
          <Logo />
          <BurgerButton
            onClick={() => setOpen((isOpen) => !isOpen)}
            isOpen={isOpen}
          />
        </Container>
        {isOpen && (
          <TransitionMounted time={4}>
            <Ul onClickCapture={() => setOpen((isOpen) => !isOpen)}>
              <li>
                <Link
                  activeClass="active"
                  to="steps"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  ¿Como funciona?
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="specs"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  Caracteristicas
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
                  Precios
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
            </Ul>
          </TransitionMounted>
        )}
      </Header>
    </TransitionMounted>
  );
};

export default PageHeader;
