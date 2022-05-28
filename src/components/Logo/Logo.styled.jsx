import styled from '@emotion/styled';

export const Link = styled.a`
  color: ${props => props.theme.colors.accent};
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: 0.03em;
`;

export const Studio = styled.span`
  color: ${({ place, theme }) => {
    switch (place) {
      case 'header':
        return theme.colors.dark;
      case 'footer':
        return theme.colors.white;
      default:
        return theme.colors.accent;
    }
  }};
`;
