import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import AnimatedHeader from './animated-header';

import CEO from '../../static/home/pritchart.png';

const MiniHeroDiv = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem auto;
  text-align: center;
  min-height: 10rem;
  padding: 1rem 0;
  h1 {
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 20rem;
    margin: 1rem auto;
  }
`;

const MiniHero = ({ page }) => {
  switch (page) {
    case 'home':
      return (
        <MiniHeroDiv
          css={css`
            background: var(--light-pink);
          `}
        >
          <img
            css={css`
              width: 120px;
              height: 120px;
              margin: 0 auto;
            `}
            src={CEO}
            alt="CEO of a company"
          />
          <p>
            “Perksy is the only way we’re reaching Millennials and Gen-Z because their mobile app
            experience is the only thing that works with them.”
          </p>
          <AnimatedHeader>QUOTED PERSON, CEO COMPANY</AnimatedHeader>
        </MiniHeroDiv>
      );
    case 'impact':
      return (
        <MiniHeroDiv
          css={css`
            background: #f9f46d;
          `}
        >
          <AnimatedHeader>IMPACT</AnimatedHeader>
          <p>
            Our Research got the attention of P&amp;G Marketing Chief Marc Pritchard, along with
            Forbes who quoted Pritchard saying our data was in line with what they did pre-launch.
          </p>
        </MiniHeroDiv>
      );
    default:
      return 'no mini hero found';
  }
};

export default MiniHero;
