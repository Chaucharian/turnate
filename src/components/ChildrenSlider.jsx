import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 175px;
`;

const ChildrenSlider = ({ delay = 5, children }) => {
  const [currentView, changeView] = useState(0);
  const transitions = useTransition([currentView], (item) => item, {
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    const interval = setTimeout(() => {
      let newView = currentView + 1;
      if (currentView === children.length - 1) {
        newView = 0;
      }
      changeView(newView);
    }, delay * 1000);
    return () => clearTimeout(interval);
  }, [currentView]);

  return (
    <Container>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          {children[item]}
        </animated.div>
      ))}
    </Container>
  );
};

export default ChildrenSlider;
