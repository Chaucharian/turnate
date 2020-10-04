import React from "react";
import styled from "styled-components";
import { Link } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const Content = styled.div`
  height: 50px;
  width: 170px;
  border-radius: 5px;
  background-color: #27ae60;

  a {
    text-decoration: none !important;
    user-select: none;
  }
  svg {
    margin-right: 5px;
  }
`;

const FontContent = styled.div`
  color: #fff;
  border-radius: 5px;
  background-color: #27ae60;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  font-weight: 500;
  height: 100%;
`;

const WpButton = ({ height, children, ...options }) => (
  <Content>
    <Link href="https://wa.me/542235854477" target="_blank">
      <FontContent>
        <WhatsAppIcon />
        Contactar
      </FontContent>
    </Link>
  </Content>
);

export default WpButton;
