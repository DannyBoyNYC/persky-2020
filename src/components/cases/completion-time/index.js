import React from 'react';
import { css } from '@emotion/core';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const EightHours = () => {

  const [ref, inView] = useInView({
    rootMargin: '-100px 0px'
  });

  const {opacity, fontSize, y} = useSpring({ 
    opacity: inView ?  1 : 0,
    fontSize: inView ?  '8rem' : '7rem',
    y: inView ? 0 : 40
  })

  return (
    <animated.h3 css={css`
        letter-spacing: -6px;
        line-height: 0.9;
        margin: 1rem 0;
        font-weight: normal;
        font-family: 'Larsseit_Regular'`} 
        style={{
          transform: y.interpolate( y => `translate3d(0, ${y}px, 0)`),
          opacity,
          fontSize
        }}
        ref={ref}>
          Eight Hours
      </animated.h3>
  )
}

export default EightHours;