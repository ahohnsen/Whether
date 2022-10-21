import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
}

body {
margin: 0;
padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

.IconButton {
  border: none;
  background-color: transparent;
  width: 28px;
  height: 28px;
}
`;

export default GlobalStyle;
