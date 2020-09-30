import React from "react";
import { Grid as MaterialGrid } from "@material-ui/core";
import styled from "styled-components";

const Grid = styled(MaterialGrid)`
  color: red;
  font-size: 50px;
`;

const Header = ({ title }) => {
  return <Grid container>{title}</Grid>;
};

// export const getStaticProps = async () => {
//   return {
//     props: {
//       title,
//     },
//   };
// };

export default Header;
