import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from '@emotion/styled';

import CarouselPage from './carouselPage';

const CarouselContainer = styled.div`
  margin-top: 2rem;
  height: 550px;
`;

const BonusFeature = styled(animated.div)`
  cursor: pointer;
  position: absolute;
  width: 100%;
  padding: 2rem;
  max-width: var(--max-width);
  height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform, opacity;
`;

const pages = [
  ({ style }) => (
    <BonusFeature style={{ ...style, backgroundColor: 'var(--light-pink)' }}>
      <CarouselPage type="imageVideo" />
    </BonusFeature>
  ),
  ({ style }) => (
    <BonusFeature style={{ ...style, backgroundColor: 'var(--light-pink)' }}>
      <CarouselPage type="geoTargeting" />
    </BonusFeature>
  ),
  ({ style }) => (
    <BonusFeature style={{ ...style, backgroundColor: 'var(--light-pink)' }}>
      <CarouselPage type="psychographic" />
    </BonusFeature>
  ),
  ({ style }) => (
    <BonusFeature style={{ ...style, backgroundColor: 'var(--light-pink)' }}>
      <CarouselPage type="report" />
    </BonusFeature>
  ),
  ({ style }) => (
    <BonusFeature style={{ ...style, backgroundColor: 'var(--light-pink)' }}>
      <CarouselPage type="perkstore" />
    </BonusFeature>
  ),
];

export default function Carousel() {
  const [index, set] = useState(0);

  // modulo - the number of slides
  const onClick = useCallback(() => set(state => (state + 1) % 5), []);

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-50%)' },
  });

  return (
    <CarouselContainer onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} />;
      })}
    </CarouselContainer>
  );
}
