import React, { useContext } from 'react';
import { GlobalStateContext } from "../../context/GlobalContextProvider";

// components & hooks
// import { useOnClickOutside } from '../../hooks/use-menu';
import Burger from './burger';
import Menu from './menu';

import { ReactComponent as LogoSvg } from '../../../static/images/perksy-logo.svg';

// styles 
import { NavHeader, LogoLink } from '../../styles/component-styles';

function Header() {
  const state = useContext(GlobalStateContext) || {};
  const menuId = 'main-menu';
  // const node = useRef();
  // useOnClickOutside(node, () => setOpen(false));

  return (
    <NavHeader>
      <Burger open={state.isNavigationOpen} aria-controls={menuId} />
      <LogoLink to="/">
        <LogoSvg width="140" />
      </LogoLink>
      <Menu open={state.isNavigationOpen} />
    </NavHeader>
  );
}

export default Header;
