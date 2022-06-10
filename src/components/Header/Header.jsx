import React from 'react';
import { Outlet } from 'react-router-dom';
import { IoLogoReact } from 'react-icons/io5';
import { NavBar, HeaderWrapper, NavLinkStyled } from './Header.styled';
import { Container } from 'components/App/App.styled';
import { useTheme } from '@emotion/react';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <IoLogoReact size="40px" color={theme.colors.accent} />

            <NavLinkStyled to="/">Gallery</NavLinkStyled>
            <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
          </HeaderWrapper>
        </Container>
      </NavBar>

      <Outlet />
    </>
  );
};
