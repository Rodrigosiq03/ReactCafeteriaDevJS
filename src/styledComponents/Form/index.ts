import styled, { ITheme } from 'styled-components';

const Form = styled.form`
  color: white;
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; 
`

const Label = styled.label`
  color: ${({ theme }: {theme: ITheme}) => theme.colors.cinza};
  padding: 10px;
  font-size: 24px;
  
`

const Input = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: white;
  margin-top: 10px;
  font-size: 20px;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }: {theme: ITheme}) => theme.colors.cinza};
  }

  @media (max-width: 430px) {
    width: 220px;
    height: 25px;
    margin-top: 0;
  }

  @media (max-width: 325px) {
    width: 200px;
    height: 20px;
    margin-top: 0;
  }

`

const Button = styled.button`
  cursor: pointer;
  width: 150px;
  height: 70px;
  color: white;
  border-radius: 10px;
  background-color: var(--cinza);
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;

  &:hover {
    background-color: ${({ theme }: {theme: ITheme}) => theme.colors.cinza};
    opacity: 0.8;
  }
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }: {theme: ITheme}) => theme.colors.cinza};
  }
`


export { Form, Label, Input, Button }