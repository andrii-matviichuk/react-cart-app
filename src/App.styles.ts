import styled, { createGlobalStyle } from 'styled-components';
import BackgroundImage from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body { 
    min-height: 100vh;
    background: url(${BackgroundImage}) no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: scroll;
  }

  .flex_column {
    display: flex;
    flex-direction: column;
  }

  .flex_row {
    display: flex;
  }

  .jcai_c {
    justify-content: center;
    align-items: center;
  }

  .h_line {
    min-width: 100%;
    border-bottom: 1px solid #e7e7e7;
  }

  .v_line {
    min-height: 100%;
    border-right: 1px solid #e7e7e7;
  }

  .cl_gray {
    color: #aeacac;
  }

  .cl_darkgray {
    color: #808080;
  }

  .btn {
    cursor: pointer;
    text-decoration: none;
    color: #333333;
    padding: 1rem 2rem;
    margin: 0.5rem 1rem 2rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 5px;
  }

  .disabled_btn {
    pointer-events: none;
  }

  h2 {
    padding: 1rem;
  }
`;

export const CartPageContainer = styled.div`
  background: #ffffff;
  color: #000000;
  width: 70vw;
  min-height: 80vh;
  margin: 2rem 0;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 15px 1px rgba(189, 189, 189, 1);
  -moz-box-shadow: 2px 2px 15px 1px rgba(189, 189, 189, 1);
  box-shadow: 2px 2px 15px 1px rgba(189, 189, 189, 1);

  .total_price {
    align-self: flex-end;
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem;
    margin-top: 0.5rem;
  }

  > .flex_column .btn {
    width: 200px;
    align-self: flex-end;
    border: 2px solid #eee;
    background: linear-gradient(
      to right,
      rgba(34, 193, 195, 1),
      rgba(253, 187, 45, 1)
    );
    background-repeat: no-repeat;
    background-size: 0 100%;
    transition: background-size 0.3s 0s;
    -webkit-box-shadow: 2px 2px 3px 1px rgba(189, 189, 189, 1);
    -moz-box-shadow: 2px 2px 3px 1px rgba(189, 189, 189, 1);
    box-shadow: 2px 2px 3px 1px rgba(189, 189, 189, 1);
  }

  > .flex_column .btn:hover {
    background-size: 100% 100%;
  }

  @media only screen and (max-width: 1280px) {
    width: 90vw;
    margin: 1rem 1rem;
    min-height: 40vh;

    .total_price {
      font-size: 1.4rem;
    }
  } ;
`;

export const CartItemContainer = styled.div`
  margin-top: 0.1rem;

  > .flex_row img {
    max-height: 200px;
    max-width: 200px;
    padding: 1rem;
    border-radius: 20px;
    justify-self: center;
    align-self: center;
  }

  > .flex_row h4 {
    align-self: center;
    text-align: center;
    margin: auto;
    font-weight: 400;
    font-size: 1.2rem;
  }

  > .flex_row .flex_column {
    padding: 0.5rem 1rem;
    max-width: 45%;
    overflow: scroll;
  }

  > .flex_row .flex_column h3 {
    margin-bottom: 1rem;
  }

  > .flex_row .flex_row {
    max-width: 15%;
    min-width: 15%;
  }

  > .flex_row .flex_row select {
    text-align: center;
    font-size: 1rem;
    border: 1px solid #e7e7e7;
  }

  > .flex_row .flex_row .qty,
  .trashBtn {
    margin: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  > .flex_row .flex_row .qty:hover,
  .trashBtn:hover {
    opacity: 0.7;
  }

  @media only screen and (max-width: 768px) {
    height: 100%;
    overflow: scroll;

    > .flex_row {
      flex-direction: column;
    }

    > .flex_row img {
      width: 100%;
      border-radius: 50%;
    }

    > .flex_row .flex_column {
      padding: 0.2rem 0.2rem 0.2rem 0.5rem;
      font-size: 0.9rem;
      max-width: 100%;
    }

    > .flex_row .flex_column h3 {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
      align-self: center;
    }

    > .flex_row h4 {
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 1rem;
      margin-right: 1rem;
      align-self: flex-end;
    }

    > .flex_row .flex_row {
      min-width: 100%;
    }
  } ;
`;
