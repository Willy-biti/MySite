import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Encode sans expanded', sans-serif;

    ::-webkit-scrollbar {
    display:none;
    width: 8px;
    height: 5px;
    }
    
    ::-webkit-scrollbar-thumb {
    background: #000000;
    border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
    background: #000000;
    }
}

body {
    background: #000000;
    color : white;
    font-family: 'Encode sans expanded', sans-serif;
    // min-width: 100vw;
}


ul {
    list-style: none;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
    
}
`