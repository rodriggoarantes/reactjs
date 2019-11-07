import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
  }

  html, body, div#root {
    min-height: 100%;
  }

  div#root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }

  body, input, button {
    color: #333;
    font-size: 14px;
    font-family: Roboto, "Roboto",  sans-serif, Arial, Helvetica;
  }

  button {
    cursor: pointer;
  }

`;
