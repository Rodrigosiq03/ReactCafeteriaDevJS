import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --amarelo : #F0DB4F;
    --cinza: #2b2b2b;
    --principal_fonte: 'Open Sans', sans-serif;
    --secundaria_fonte: 'Raleway', sans-serif;

    font-family: var(--principal_fonte);
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: var(--amarelo);
    opacity: 0.8;

  }
  ::-webkit-scrollbar-thumb {
    background: var(--cinza);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--cinza);
  }

  .div__container__card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  body {
    background-color: var(--cinza);
    margin: 0;
    padding: 0;
    color: white;
  }
  .text__hint__global {
    color: var(--cinza);
    display: flex;
    justify-content: space-around;
    font-size: 40px;
    font-weight: 700;
  }
  .logout__global__btn {
    width: 100px;
    height: 50px;
    background-color: var(--amarelo);
    color: var(--cinza);
    border: 1px solid black;
    border-radius: 15px;
  }
  .logout__global__btn:hover {
    background-color: var(--cinza);
    color: var(--amarelo);
    border: 1px solid var(--amarelo);
  }


  @media (max-width: 430px) {
    .principal__title {
        font-size: 29px;
    }
    .form__global {
        padding: 0;
    }
    .button__submit__global {
        width: 150px;
        height: 50px;
        font-size: 16px;
        margin-bottom: 10px;
    }
  }
  @media (max-width: 325px) {
    .principal__title {
        font-size: 24px;
    }
  }

`