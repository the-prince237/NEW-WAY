import {createGlobalStyle} from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
  *{
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
    margin: 0;
  }

  body{
    background-color: white;
  }

  ul, li{
    list-style-type: none;
  }

  a, Link{
    text-decoration: none;
    color: inherit;
  }
`

function GlobalStyle(){
  return <StyledGlobalStyle/>
}

export default GlobalStyle;