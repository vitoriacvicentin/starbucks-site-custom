import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior:smooth;
  }
  header{
    color: ${(props) => props?.theme?.colors?.textHeader};
  }
  body {
    background-color: ${props => props?.theme?.colors?.background};
    color: ${(props) => props?.theme?.colors?.text};
    font: 400 16px Roboto, sans-serif;
  }
`