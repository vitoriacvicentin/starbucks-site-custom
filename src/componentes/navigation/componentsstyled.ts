import styled from "styled-components";

const MeuBotao = styled.a`
    cursor: default;
    font-size: 1em;
    font-family:"SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    color: #cbcbcb;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;
    &:hover {
    color: white ;
    }
`;
const Lista = styled.nav`
    margin-top:-10px;
    margin-left: -15px;
    margin-right: -15px;
    padding:20px;
    list-style-type: none;
    align-items:center;
    justify-content:center;
    @media only screen and (min-width: 1200px) {display:flex};  
    overflow: hidden;
    background: linear-gradient(90deg, rgba(21,21,22,1) 0%, rgba(36,36,42,1) 36%, rgba(32,34,34,1) 100%);
`;
const Li = styled.li`
  float: left;
  display: block;
  text-align: center;
`;

export { MeuBotao, Lista, Li };