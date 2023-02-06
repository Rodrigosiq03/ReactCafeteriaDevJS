import styled from 'styled-components';

const TextHint = styled.h1`
  color: var(--cinza);
  display: flex;
  justify-content: space-around;
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 430px) {
    font-size: 20px;
    margin: 0;
  }

  @media (max-width: 325px) {
    font-size: 16px;
    margin: 0;
  }
`

export { TextHint }