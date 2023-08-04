import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #282c34;
  padding: 20px 0;
  font-size: 1.5em;
  width: 100%;
  position: sticky;
  top: 60px;
  z-index: 99;
`;

const LinkStyled = styled(NavLink)`
  color: #61dafb;
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <Nav>
      <LinkStyled to="/" end>
        Home
      </LinkStyled>
      <LinkStyled to="/about">About</LinkStyled>
      <LinkStyled to="/portfolio">Portfolio</LinkStyled>
      <LinkStyled to="/contact">Contact</LinkStyled>
    </Nav>
  );
}

export default Navbar;
