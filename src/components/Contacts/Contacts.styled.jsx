import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  gap: ${props => (props.place === 'header' ? '50px' : '8px')};
  align-items: ${props => (props.place === 'header' ? 'center' : 'start')};
  justify-content: center;
  margin-left: auto;
  flex-direction: ${props => (props.place === 'header' ? 'row' : 'column')};
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
