import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';


const AnimatedHeader = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px'
  });

  const { letterSpacing, opacity, height, overflow } = useSpring({
    letterSpacing: inView ? '0px' : '12px',
    opacity: inView ? 1 : 0,
    height: '16px',
    overflow: 'hidden'
  });
  return (
    <animated.h2 ref={ref} style={{ letterSpacing, opacity, height, overflow }}>{children}</animated.h2>
  )
}

export default AnimatedHeader