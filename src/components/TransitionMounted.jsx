import React from "react";
import styled from "styled-components";
import { useMounted } from "src/hooks";

const Transition = styled.div`
  ${({ animation, time = 2, heightAuto, width, padding }) => `
    width: ${width ? width : `100%`};
    // height: ${heightAuto ? `auto` : `100%`};
    padding: ${padding ? padding : `0px`};
    animation: ${animation && animation} ${time}s;
    
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
  width,
  padding,
  children,
}) => {
  const mounted = useMounted();

  return (
    <Transition
      width={width}
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
