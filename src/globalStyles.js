import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Lato", sans-serif;
        transition: background 500ms ease;
    }

    a {
        text-decoration: none;
        color: black;
    }

    /* a:focus {
        outline: 1px dashed grey;
    } */

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

    /* button:focus {
        outline: 2px dashed grey;
    } */


`;

export default GlobalStyle;
