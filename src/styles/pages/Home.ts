import styled from 'styled-components'

export const Section = styled.section`
  height: auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  padding-right: 50px;
  padding-left: 50px;
  flex-direction: column;
  background-color:white;

  @media (max-width: 785px) {
    background-color:white;
    padding-right: 20px;
    padding-left: 20px;
    background-repeat: repeat;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 110px;
  padding-left: 100px;
  padding-right: 100px;
  @media (max-width: 800px) {
    margin-top: 100px;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
  }
`

export const MainText = styled.h1`
  font-weight: bold;
  font-size: 48px;
  color: ${(props) => props?.theme?.colors?.text};
  text-align: start;
  max-width: 400px;
  span {
    color: ${(props) => props?.theme?.colors?.text};
  }

  @media (max-width: 800px) {
    max-width: 300px;
  }
`