import React from 'react';

import AnimatedHeader from './animated-header';
import AnimatedPopImage from './animated-image-rise';

import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { bp } from '../styles/component-styles';

// images
import Logo from './logo-spinner/logo';
import nadia from '../../static/images/nadia.png';
import pritchard from '../../static/images/cases/pritchard.png';
import forbes from '../../static/images/cases/forbes.png';
import millenialOne from '../../static/home/millenial-one.png';
import clientList from '../../static/home/clientList.png';

const SideBySideContainer = styled('div')`
@media(min-width: ${bp.xs} ){
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;
  max-width: var(--max-width);
  margin: 0 auto;
  position: relative;
}
  article {
    color: #fff;
    background-color: var(--navy);
    padding: 1rem;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(min-width: ${bp.xs} ){
      padding: 3.25rem;
    }
  }
  aside {
    margin: 0;
    /* background-color: var(--thistle); */
    img {
      /* height: 100%; */
      object-fit: contain;
    }
  }
`;

const SideBySide = ({ type }) => {
  switch (type) {
    case 'masri':
      return (
        <section css={css`background-color: var(--navy); margin-top: 0.5rem; margin-bottom: 0.5rem;`}>
          <SideBySideContainer>
            <Logo />
            <aside>
              <img src={nadia} alt="Nadia Masri" />
            </aside>
            <article>
              <h2>
                <img
                  src={forbes}
                  alt="Forbes logo"
                  css={css`
                    max-width: 100px;
                  `}
                />
              </h2>
              <p>
                “With this campaign in particular, we were seeing a lot of controversy across social
                media…so we set out to determine what Millennials and Gen Z thought about the ad
                from a purely research-driven and statistically significant standpoint.
              </p>
              <p>
                …Once we discovered that the results of this campaign were overwhelmingly positive
                in favor of the ad, we felt a duty to bring these findings forward and provide the
                missing variable in the equation that was leading to inaccurate results.”
              </p>
              <h2>– NADIA MASRI, PERKSY FOUNDER & CEO</h2>
            </article>
          </SideBySideContainer>
        </section>
      );
    case 'pritchard':
      return (
        <section css={css`background-color: var(--navy); margin-top: 0.5rem; margin-bottom: 0.5rem;`}>
          <SideBySideContainer>
            <Logo />
            <article>
              <h2>
                <img
                  src={forbes}
                  alt="Forbes logo"
                  css={css`
                    max-width: 100px;
                  `}
                />
              </h2>

              <p>
                “What’s helpful by the Perksy research and then corroborated by two others: All
                three of these reports indicated a far more positive response than what was
                reported.
              </p>

              <p>
                We talk to men all the time about what they say they want to hear about. We get an
                outpouring of positive sentiments and three reports, and that tells us we’re onto
                something.”
              </p>

              <h2>– Marc Pritchard, P&amp;G Chief Brand Officer</h2>
            </article>
            <aside>
              <img src={pritchard} alt="Marc Pritchard" />
            </aside>
          </SideBySideContainer>
        </section>
      );
    case 'millenial':
      return (
        <section css={css`background-color: var(--navy); margin-top: 0.5rem; margin-bottom: 0.5rem;`}>
          <SideBySideContainer>
            <Logo />
            <article>
              <AnimatedHeader>AUDIENCE FIRST</AnimatedHeader>
              <h1>Experience is everything.</h1>
              <p>
                Perksy is built by and for Millennials + Gen-Z. Our design-driven approach to survey
                design and delivery puts the experience above all - because a better, more immersive
                experience leads to better data.
              </p>

              <p>
                Unlike many others, we never use third-party sample, so our audience isn't the
                same-old “industry standard” pool of respondents that answer surveys professionally.
              </p>
            </article>
            <aside>
              <img src={millenialOne} alt="Twenty something in a baseball jersey" />
            </aside>
          </SideBySideContainer>
        </section>
      );
    case 'client-list':
      return (
        <section>
          <SideBySideContainer>
            <article
              css={css`
                background-color: #fff !important;
              `}
            >
              <h1
                css={css`
                  color: #000;
                `}
              >
                We’re building the future of feedback.
              </h1>
              <p
                css={css`
                  color: #000;
                `}
              >
                What will you ask?
              </p>
            </article>
            <aside css={css`align-self: center`}>
              <AnimatedPopImage src={clientList} />
            </aside>
          </SideBySideContainer>
        </section>
      );
    default:
      return 'no case study found';
  }
};

export default SideBySide;
