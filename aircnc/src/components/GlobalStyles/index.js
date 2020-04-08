import { createGlobalStyle } from 'styled-components';

import background from '~/assets/background.jpg';
import 'react-toastify/dist/ReactToastify.css';

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

  body {
    background: #000 url(${background}) no-repeat;
    background-size: cover;
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
