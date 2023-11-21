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
    font-family: 'Nunito';
    height: 100vh;
    /* background-color: rgb(0, 0, 0); */
    /* background-image: url('/src/assets/nightsky.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  #root {
    width: 100%;
    height: 100%;
    padding-left: calc(50% - 730px);
    padding-right: calc(50% - 730px);
  }

`