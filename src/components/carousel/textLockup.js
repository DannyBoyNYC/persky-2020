import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import AnimatedHeader from '../animated-header';
import AnimatedHeaderLarge from '../animated-header-large';

const Lockup = styled.div`
  /* fixes h2 animation breaking onto two lines */
  p, h1 {
    width: 16rem;
  }
`;

const TextLockup = props => {
  const { headline, copy, copytwo } = props.lockup;
  return (
    <Lockup>
      <AnimatedHeader>{props.header}</AnimatedHeader>
      <AnimatedHeaderLarge>{headline}</AnimatedHeaderLarge>
      <p>{copy}</p>
      <p>{copytwo}</p>
    </Lockup>
  );
};

TextLockup.defaultProps = {
  header: 'Bonus Features',
};

TextLockup.propTypes = {
  headline: PropTypes.string,
  copy: PropTypes.string,
  copytwo: PropTypes.string,
};

export default TextLockup;
