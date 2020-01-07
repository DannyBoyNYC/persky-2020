import React, { useContext } from 'react';
import { css } from '@emotion/core';

import {
  GlobalDispatchContext,
} from "../context/GlobalContextProvider"

import AnimatedHeader from './animated-header';

import { ReactComponent as Lightning } from '../../static/stickers/lightning.svg';
import { ReactComponent as Phone } from '../../static/stickers/phone.svg';
import { ReactComponent as Hundered } from '../../static/stickers/hundered.svg';
import { ReactComponent as Sparkles } from '../../static/stickers/sparkles.svg';
import { ReactComponent as Peep } from '../../static/stickers/peep.svg';

// css imports
import { bp, buttonStyles, heroSvgStyles, HeroSection } from '../styles/component-styles';

const Hero = ({ page }) => {

  const dispatch = useContext(GlobalDispatchContext)

  switch (page) {
    case 'home':
      return (
        <HeroSection>
          <Lightning
            css={css`
              ${heroSvgStyles}
              @media (min-width: ${bp.xs}) {
                top: -146px;
                left: 80px;
                transform: rotate(10deg);
                
              }
            `}
          />
          <h1>Get instant answers from Millenials and Gen-Z at scale</h1>
          <p>
            Perksy's DIY consumer insights platform powers real time research with everyday people
            through its immersive mobile app the rewards them for their responses.
          </p>

          {/* {state.isModalOpen ? 'true' : 'false'} */}

          <button
            css={buttonStyles}
            type="button"
            onClick={() => {
              dispatch({ type: "TOGGLE_MODAL" })
            }}
          >
            Request Demo
        </button>

          <Phone
            css={css`
              ${heroSvgStyles}
              @media (min-width: ${bp.xs}) {
                top: 120px;
                left: 340px;
              }
            `}
          />
        </HeroSection>
      );

    case 'cases':
      return (
        <HeroSection>
          <Hundered
            css={css`
              ${heroSvgStyles}
              @media (min-width: ${bp.xs}) {
                top: -128px;
                left: 0;
                transform: rotate(-20deg);
                
              }
            `}
          />
          <h1>Perksy Use Cases</h1>
          <p>
            From testing new ideas, ads or products to having consumers submit photos or videos of
            anything you need to see - conduct your own research campaigns from A to Z with Perksy.
          </p>
        </HeroSection>
      );

    case 'news':
      return (
        <HeroSection>
          <h1>Perksy In The Press</h1>
          <p>
            When you do things differently, people talk about it. Here's the latest on what everyone
            is saying.
          </p>
        </HeroSection>
      );
    case 'case':
      return (
        <HeroSection>
          <Sparkles
            css={css`
              ${heroSvgStyles}
              @media (min-width: ${bp.xs}) {
                top: -70px;
                left: 320px;
                transform: scaleX(-1);
                width: 12rem;
                height: 12rem;
              }
            `}
          />
          <AnimatedHeader>CASE STUDY</AnimatedHeader>
          <h1>Gillette x Perksy</h1>
          <p>
            After the blowup following Gillette’s “The Best a Man Can Be” campaign, traditional news
            sources were quick to say Millennials didn’t like it.
          </p>
          <p>
            Being the go-to Millennial + Gen-Z research source, we wanted to see if that was true or
            #fakenews.
          </p>
        </HeroSection>
      );
    case 'blog':
      return (
        <HeroSection>
          <Peep
            css={css`
              ${heroSvgStyles}
              @media (min-width: ${bp.xs}) {
                top: -100px;
                left: 390px;
              }
            `}
          />
          <h1>
            Place Holder Only: <br /> For Blog Page
          </h1>
          <p>
            This needs design consideration. The latest thoughts and missives from the team at Perksy. Updated sporadically and never
            on a Friday.
          </p>
        </HeroSection>
      );
    case 'modal':
      return (
        <HeroSection>
          <h1>Instant Insights Await</h1>
          <p>We've built the future of feedback to bring you access to the toughest to reach audiences in real-time. Fill in the form below and we'll get back to you asap to set up a demo time.</p>
        </HeroSection>
      );
    default:
      return 'no hero found';
  }
};

export default Hero;
