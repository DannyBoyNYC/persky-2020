import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';


const AnimatedHeaderSmall = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px'
  });

  const { opacity, y } = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 1
  });
  return (
    <animated.h2 ref={ref} style={{
      opacity,
      transform: y
        .interpolate({
          range: [0, 0.25, 0.5, 0.75, 1],
          output: [0, -25, -50, -75, -50]
        })
        .interpolate(y => `translate3d(${y}px, 0, 0)`),
    }}>{children}</animated.h2>
  )
}

export default AnimatedHeaderSmall