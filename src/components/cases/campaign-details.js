import React from 'react';
import { css } from '@emotion/core';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

import AnimatedHeader from '../animated-header';

import usaoutline from '../../../static/images/cases/usa-outline.png';
import femalemale from '../../../static/images/cases/female-male.png';
import singlePhone from '../../../static/images/cases/phone.png';

import { DeepDiv } from '../../styles/case-styles';

const CampaignDetails = () => {
  const [ref, inView] = useInView({
    rootMargin: '-200px 0px'
  });

  const { opacity, fontSize, y } = useSpring({
    opacity: inView ? 1 : 0,
    fontSize: inView ? '3rem' : '1rem',
    y: inView ? 0 : 100
  })

  return (
    <div css={css`background-color: var(--light-pink);`}>
      <DeepDiv>
        <AnimatedHeader>CAMPAIGN DETAILS</AnimatedHeader>
        <div className="tripart">
          <div ref={ref}>
            <img src={usaoutline} alt="Outlined silhouette map of the USA" />
            <animated.h1 style={{ opacity, fontSize, transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`) }}>3,500</animated.h1>
            <p>18-24 year-olds across the United States</p>
          </div>
          <div>
            <img src={femalemale} alt="Outlined silhouettes of a male and female" />
            <animated.h1 style={{ opacity, fontSize, transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`) }}>50/50</animated.h1>
            <p>Female/Male Split</p>
          </div>
          <div>
            <img src={singlePhone} alt="Outlined silhouette of a phone" />
            <animated.h1 style={{ opacity, fontSize, transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`) }}>100%</animated.h1>
            <p>Completed on the Perksy mobile app</p>
          </div>
        </div>
      </DeepDiv>
    </div>
  )
}

export default CampaignDetails
