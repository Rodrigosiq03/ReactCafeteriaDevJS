import styled, { ITheme } from 'styled-components';

const Container = styled.div`
  border-top: 2px solid ${({ theme }: {theme: ITheme}) => theme.colors.amarelo};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export { Container }