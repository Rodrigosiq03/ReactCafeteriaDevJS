import styled from 'styled-components';

const LogoutBtn = styled.button`

  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--cinza);
  background-color: var(--amarelo);
  border-radius: 16px;
  border: none;
  width: 100px;
  height: 50px;

&:hover {
  color: var(--amarelo);
  background-color: var(--cinza);
  border: 2px solid var(--amarelo);
}
&:active {
  color: var(--amarelo);
  background-color: var(--cinza);
  border: 2px solid var(--amarelo);
}
`;

export { LogoutBtn }