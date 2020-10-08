import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EmailForm from "./EmailForm";
import WpButton from "./WpButton";
import Subtitle2 from "./Subtitle2";

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

const Contact = () => {
  const [response, setResponse] = useState(null);

  const submit = ({ email }) => {
    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then(async (response) => {
        const normalize = await response.json();
        setResponse(normalize);
      })
      .catch(async (error) => {
        const normalize = await error.json();
        setResponse(normalize);
      });
  };

  useEffect(() => {
    if (response !== null) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [response]);

  return (
    <Content>
      <Subtitle2
        boxOptions={{
          heightAuto: true,
        }}
      >
        Ingresa tu email y nosotros te contactaremos
      </Subtitle2>
      <EmailForm onSubmit={submit} response={response} />
      <Subtitle2
        boxOptions={{
          heightAuto: true,
        }}
      >
        ó
      </Subtitle2>
      <WpButton />
    </Content>
  );
};

export default Contact;
