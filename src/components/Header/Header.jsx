import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { Contacts } from './Contacts/Contacts';
import { Container } from '../App/App.styled';
import { HeaderNav, HeaderWrapper } from './Header.styled';

export const Header = () => {
  return (
    <HeaderNav>
      <Container>
        <HeaderWrapper>
          <Logo place={'header'} />
          <Navigation />
          <Contacts place={'header'} />
        </HeaderWrapper>
      </Container>
    </HeaderNav>
  );
};
