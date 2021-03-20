import styled from 'styled-components'
/* Container da pagina inicial */
export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 800px) {
    margin-top: 100px;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
  }
`