import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import {
  GlobalDispatchContext,
} from "../../context/GlobalContextProvider"

// import { ReactComponent as Peep } from '../../../static/stickers/peep.svg';

// shared styles
import { bp, buttonStyles, NavLink } from '../../styles/component-styles';

const MenuAside = styled.aside`
  display: flex;
  transform: ${({ open }) => (open ? 'translateX(-100)' : 'translateX(0)')}; 
  @media (min-width: ${bp.xs}) {
    all: unset;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  height: 100vh;
  position: absolute;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: var(--pink);
  border-bottom: 1px solid #bbb;
  padding: 3rem;
  padding-top: 5rem;
  @media (min-width: ${bp.xs}) {
    all: unset;
    padding: 0.5rem;
  }
`;

function Menu({ open }) {
  const dispatch = useContext(GlobalDispatchContext)

  return (
    <MenuAside open={open} onClick={() => {
      dispatch({ type: "TOGGLE_NAVIGATION" })
    }}>
      <Nav open={open}>
        <NavLink activeClassName="current-page" to="/"
        >
          Home
        </NavLink>
        <NavLink activeClassName="current-page" to="/cases/"
        >
          Cases
        </NavLink>
        <NavLink activeClassName="current-page" to="/news/"
        >
          News
        </NavLink>
        <NavLink activeClassName="current-page" to="/blog/"
        >
          Blog
        </NavLink>

        <a href='http://app.getperksy.com/'
          target='_blank'
          rel="noopener noreferrer"
          css={css`
            ${buttonStyles}
              margin-top: 2rem;
              background-color: transparent; 
              color: #000;
              border: 1px solid #000;
            @media (min-width: ${bp.xs}) {
              margin-top: 0;
              margin-left: 1rem;
              margin-right: 1rem;
            }
          `}
        >
          Login
        </a>

        <button
          style={{ color: '#fff' }}
          css={css`
          ${buttonStyles}
            margin-top: 2rem;
            
            @media (min-width: ${bp.xs}) {
              color: #fff;
              border: 1px solid #000;
              margin-top: 0;
            }
          `}
          onClick={() => {
            dispatch({ type: "TOGGLE_MODAL" })
          }}
        >
          Request Demo
        </button>
      </Nav>
    </MenuAside>
  );
}
export default Menu;
