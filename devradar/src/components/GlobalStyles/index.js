import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #E5E6F0;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
