import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;

  color: ${props => props.theme.colors.gray};

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
  }
`;
