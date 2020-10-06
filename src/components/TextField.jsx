import React from "react";
import styled from "styled-components";
import { TextField as MaterialTextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Form = styled.form`
  display: block;
  // display: flex;
  // justify-content: space-evenly;
  @media screen and (max-width: 479px) {
    display: block;
  }
`;

const Button = styled.button`
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  outline: none;
  border: none;
  background-color: #27ae60;
  border-radius: 5px;
  width: 100%;
  height: 45px;
  cursor: pointer;
`;

const Content = styled.div`
  ${({ error }) => `
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;

  .MuiFormControl-root {
    width: 100%;
    margin-bottom: 15px;
    label {
      color: ${error ? `#ff0000` : `#FFF`} !important;
      font-weight: 500;
    }
    .MuiOutlinedInput-input {
      padding: 13px 14px;
      color: #fff;
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: ${error ? `#ff0000` : `#27ae60`} !important;     
    }
  }
  `}
`;

const TextField = ({ height, children, onSubmit, ...options }) => {
  const { register, handleSubmit, setError, errors } = useForm();

  return (
    <Content error={errors.email ? true : false}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <MaterialTextField
          label="Email"
          variant="outlined"
          inputRef={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            },
            message: "Email invalido",
          })}
          name="email"
          label="Email"
        />
        <Button type="submit">
          Enviar
          {/* <ArrowForwardIcon /> */}
        </Button>
      </Form>
    </Content>
  );
};

export default TextField;
