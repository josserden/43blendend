import { Link, Studio } from './Logo.styled';

export const Logo = ({ place }) => {
  return (
    <Link href="/">
      Web<Studio place={place}>Studio</Studio>
    </Link>
  );
};
