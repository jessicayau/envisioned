import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0; */
        font-family: "Lato", sans-serif;
        /* transition: background 2s;
        transition: background-color 2s;
        transition: color 1s; */
    }

    a {
        text-decoration: none;
    }

    ul {
        padding: 0;
        list-style-type: none;
    }
    
    li {
        padding: 0;
        margin: 0;
    }
    
    button {
        border: none;
        cursor: pointer;
    }


`;

export default GlobalStyle;
