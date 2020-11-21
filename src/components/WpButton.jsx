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
  font-family: Raleway;
  color: #fff;
  border-radius: 5px;
  background-color: #27ae60;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  height: 100%;
`;

const WpButton = () => (
  <Content>
    <Link
      href="https://api.whatsapp.com/send?phone=542235854477&text=%C2%A1Hola!%20Estoy%20interesado%20en%20contratar%20alg%C3%BAn%20plan%20del%20sistema%20de%20turnos%20TeAnoto%20y%20me%20gustar%C3%ADa%20que%20me%20ofrezcan%20el%20que%20mejor%20se%20adapte%20a%20mis%20necesidades."
      target="_blank"
    >
      <FontContent>
        <WhatsAppIcon />
        Contactar
      </FontContent>
    </Link>
  </Content>
);

export default WpButton;
