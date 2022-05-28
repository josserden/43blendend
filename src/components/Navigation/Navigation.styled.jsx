import styled from '@emotion/styled';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-left: 93px;
`;

export const NavLink = styled.a`
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 16px;
  letter-spacing: 0.02em;

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
  }
`;
