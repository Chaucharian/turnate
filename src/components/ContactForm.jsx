import React from "react";
import styled from "styled-components";

const Content = styled.div`
  ${({}) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
//   @media screen and (max-width: 479px) {
//     display: block;
//   }
  `}
`;

const ContactForm = ({ children }) => {
  return <Content>{children}</Content>;
};

export default ContactForm;
