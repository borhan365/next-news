import { createGlobalStyle } from "styled-components";

// export const theme = {
//   primaryBlue: "#0794B4",
//   secondaryBlue: "#043157",
//   primaryWhite: "#fff"
// };

// 2. interpolate it using tagged template literals
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: bangla;
    src: url('../assets/fonts/somvob.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`