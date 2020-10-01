import React from "react";
import styled from "styled-components";
import { useMounted } from "src/hooks";

const Transition = styled.div`
  ${({ transition, time = 2 }) => `
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-transition: opacity ${time}s ease-in-out;
    -moz-transition: opacity ${time}s ease-in-out;
    -ms-transition: opacity ${time}s ease-in-out;
    -o-transition: opacity ${time}s ease-in-out;
    transition: opacity ${time}s ease-in-out;
    ${transition ? `opacity: 1;` : ``};

    @media screen and (max-width: 479px) {
    font-size: 15px;
    }
`}
`;

const TransitionMounted = ({ time, children }) => {
  const mounted = useMounted();

  return (
    <Transition transition={mounted} time={time}>
      {children}
    </Transition>
  );
};

export default TransitionMounted;
