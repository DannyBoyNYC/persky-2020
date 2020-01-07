// cases, side by side
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated, config } from 'react-spring';

const AnimatedPopImage = ({ src }) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px'
  });

  const { opacity, x } = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 1,
    config: config.molasses
  });
  return (
    <animated.img ref={ref} style={{
      opacity,
      transform: x
        .interpolate({
          range: [0, 0.25, 0.5, 0.75, 1],
          output: [0, 25, 50, 75, 50]
        })
        .interpolate(x => `translate3d(0, ${x}px, 0)`),
    }} src={src} alt="Perksy" />
  )
}

export default AnimatedPopImage
