import styled from 'styled-components';
import { ILink, LinkColor } from '../../styles/theme';


const Link = styled.a<ILink>`
  padding-top: 10px;
  margin-top: 4px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  /* props for choose color of the Link */

  /* props?.theme?.colors?.types?.[props?.type] */
  color: ${({ theme }) => {
    switch (theme.colors.linkColors) {
      case LinkColor.AMARELO:
        return theme.colors.linkColors.amarelo;
      case LinkColor.CINZA:
        return theme.colors.linkColors.cinza;
      default:
        return theme.colors.linkColors.cinza;
    }
  }};

  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
  @media (max-width: 424px) {
    margin-bottom: 8px;
    padding-top: 4px;
}
`

export { Link };

