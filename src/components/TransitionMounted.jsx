import React from "react";
import styled from "styled-components";
import { useMounted } from "src/hooks";

const Transition = styled.div`
  ${({ transition, animation, time = 2, heightAuto, padding }) => `
    width: 100%;
    height: ${heightAuto ? `auto` : `100%`};
    padding: ${padding ? padding : `0px`};
    // opacity: 0;
    // -webkit-transition: opacity ${time}s ease-in-out;
    // -moz-transition: opacity ${time}s ease-in-out;
    // -ms-transition: opacity ${time}s ease-in-out;
    // -o-transition: opacity ${time}s ease-in-out;
    // transition: opacity ${time}s ease-in-out;
    // ${transition ? `opacity: 1;` : ``};
    animation: ${animation && animation} 1s;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    
    @media screen and (max-width: 479px) {
    font-size: 15px;
    }
`}
`;

const TransitionMounted = ({
  time,
  animation = "fadeIn",
  heightAuto,
  padding,
  children,
}) => {
  const mounted = useMounted();

  return (
    <Transition
      animation={animation}
      heightAuto={heightAuto}
      padding={padding}
      transition={mounted}
      time={time}
    >
      {children}
    </Transition>
  );
};

export default TransitionMounted;
