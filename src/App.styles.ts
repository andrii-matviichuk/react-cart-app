import styled, { createGlobalStyle } from 'styled-components';
import BackgroundImage from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body { 
    height: 100vh;
    background: url(${BackgroundImage}) no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .flex_column {
    display: flex;
    flex-direction: column;
  }

  .flex_row {
    display: flex;
  }

  .h_line {
    width: 100%;
    border-bottom: 1px solid #e7e7e7;
  }

  .v_line {
    height: 100px;
    border-right: 1px solid #e7e7e7;
  }
`;

export const CartPageContainer = styled.div`
  background: #ffffff;
  width: 60vw;
  height: 80vh;

  .total_price {
    align-self: flex-end;
    font-size: 2rem;
    padding: 1rem;
  }
`;
