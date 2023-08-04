import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #282c34;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 999;
`;

const LinkStyled = styled(NavLink)`
  font-size: 1.5em;
  text-transform: uppercase;
  padding: 1rem 0;
  letter-spacing: 0.5rem;
  color: #61dafb;
  text-decoration: none;
  transition: color 0.3s linear;

  &.active {
    color: #ffffff;
  }
`;

const BurgerMenuButton = styled.button`
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#ccc' : '#61dafb')}; /* Change color here */
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerMenuButton open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerMenuButton>
      <Nav open={open}>
        <LinkStyled to="/" onClick={() => setOpen(false)}>Home</LinkStyled>
        <LinkStyled to="/about" onClick={() => setOpen(false)}>About</LinkStyled>
        <LinkStyled to="/portfolio" onClick={() => setOpen(false)}>Portfolio</LinkStyled>
        <LinkStyled to="/contact" onClick={() => setOpen(false)}>Contact</LinkStyled>
      </Nav>
    </>
  );
}

export default NavbarMobile;
