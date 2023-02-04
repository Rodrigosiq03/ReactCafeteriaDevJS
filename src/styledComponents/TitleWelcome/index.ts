import styled from 'styled-components';

const TitleWelcome = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.linkColors.amarelo};
  margin: 0;
  padding: 0;
  padding-bottom: 24px;
  text-align: center;
  @media (max-width: 424px) {
    font-size: 30px;
  }

`

export { TitleWelcome }