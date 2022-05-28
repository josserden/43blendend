import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { Contacts } from './Contacts/Contacts';

export const Header = () => {
  return (
    <header>
      <Logo style={'white'} />
      <Navigation />
      <Contacts place={'header'} />
    </header>
  );
};
