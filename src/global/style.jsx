import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: 'Jura';
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #000000;
    position: relative;
    overflow: hidden;
  }

  #root {
    width: 100%;
    max-width: calc(100% - 100px);
    margin-left: 50px;
    margin-right: 50px;
    z-index: 1;
  }

  #ellipse_right_pos {
    width: 150px;
    height: 400px;
    border-radius: 100px;
    background: linear-gradient(180deg, #FB03F5 0%, #AA9CFF 100%);
    filter: blur(150px);
    position: absolute;
    top: 35%;
    right: 0;
  }

  #ellipse_middle_pos {
    width: 150px;
    height: 400px;
    border-radius: 100px;
    background: linear-gradient(180deg, #FB03F5 0%, #AA9CFF 100%);
    filter: blur(150px);
    position: absolute;
    top: 0;
    left: 0;
  }
  `