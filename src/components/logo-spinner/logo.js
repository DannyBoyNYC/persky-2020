import React from 'react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/core';

import logoBug from '../../../static/logo-bug/logo.svg';

import { bp } from '../../styles/component-styles';

const LogoSpin = styled.div`
  display: none;
@media(min-width: ${bp.xs} ){
  display: block;
  width: 100px;
  height: 100px;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
}
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = () => {
  return (
    <LogoSpin>
      <img
        css={css`
          animation: ${rotate} 10s linear infinite;
        `}
        src={logoBug}
        className="logo"
        alt="logo"
      />
    </LogoSpin>
  );
};

export default Logo;
