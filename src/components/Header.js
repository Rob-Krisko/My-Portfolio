import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import NavbarMobile from './NavbarMobile';

const HeaderContainer = styled.header`
  background-color: #282c34;
  color: #61dafb;
  padding: 1.5em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2em;
  position: sticky;
  top: 0;
  min-height: 1.5em;
  z-index: 100;
`;

function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <HeaderContainer>
      Robert Krisko
      {isMobile && <NavbarMobile />}
    </HeaderContainer>
  );
}

export default Header;
