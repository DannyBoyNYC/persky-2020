import React, { useContext } from 'react';
import { bool } from 'prop-types';
import {
  GlobalDispatchContext,
} from "../../context/GlobalContextProvider"

import { StyledBurger } from '../../styles/component-styles';

const Burger = ({ open }) => {
  const dispatch = useContext(GlobalDispatchContext);
  return (
    <StyledBurger open={open} onClick={() => {
      dispatch({ type: "TOGGLE_NAVIGATION" })
    }}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
};

export default Burger;
