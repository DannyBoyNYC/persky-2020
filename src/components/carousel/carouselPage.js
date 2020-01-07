import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { animated } from 'react-spring';

// import AnimatedPopImage from '../animated-pop-image';


import TextLockup from './textLockup';
import { lockEmUp } from '../../data/carousel';

import oneLeft from '../../../static/images/carousel/one/left.png';
import oneRight from '../../../static/images/carousel/one/right.png';
import oneCenter from '../../../static/images/carousel/one/phone.png';

import carTwoImgOne from '../../../static/images/carousel/two/create.png';
import carTwoImgTwo from '../../../static/images/carousel/two/bg.png';

import carThreeImgOne from '../../../static/images/carousel/three/left.png';
import carThreeImgTwo from '../../../static/images/carousel/three/center.png';
import carThreeImgThree from '../../../static/images/carousel/three/right.png';

import carFourImgOne from '../../../static/images/carousel/four/paper.png';
import carFourImgTwo from '../../../static/images/carousel/four/papertwo.png';
import carFourImgThree from '../../../static/images/carousel/four/hyperbeast.png';

import carFiveImgOne from '../../../static/images/carousel/five/left.png';
import carFiveImgTwo from '../../../static/images/carousel/five/right.png';

const CarouselItem = styled(animated.div)`
  width: 100%; 
  height: 100%;
  overflow: hidden;
  position: relative;
  background: --var(light-pink);
  p {
    max-width: 16rem;
  }
  .rightTop {
    position: absolute;
    z-index: 100;
    right: 0;
    top: 0;
  }
  .leftTop {
    position: absolute;
    z-index: 90;
    left: 0;
    top: 0;
  }
  .rightBottom {
    position: absolute;
    z-index: 80;
    right: 0;
    bottom: 0;
  }
  .leftBottom {
    position: absolute;
    z-index: 70;
    left: 0;
    bottom: 0;
  }
`;

const CarouselPage = ({ type }) => {

  switch (type) {
    case 'imageVideo':
      return (
        <CarouselItem>
          <div className="rightTop">
            <TextLockup lockup={lockEmUp[0]} />
          </div>
          <img
            className="leftTop"
            css={css`
              width: 300px; 
              opacity: 0.7;
            `}
            src={oneLeft}
            alt="submission"
          />
          <img
            css={css`
              position: absolute;
              left: 44%;
              top: 0;
              width: 260px;
            `}
            src={oneCenter}
            alt="submission"
          />
          <img
            className="rightBottom"
            css={css`
              width: 16rem;
            `}
            src={oneRight}
            alt="submission"
          />
          <div className="leftBottom">
            <p>
              A major retailer utilized this feature for their back to college campaign by having
              students record a video of their shopping experience in the back to college section.
            </p>
            <p>
              We used geo-targeting to know when students entered the store and sent them a push
              notification as soon as they did.
            </p>
          </div>
        </CarouselItem>
      );
    case 'geoTargeting':
      return (
        <CarouselItem>
          <div
            css={css`
              display: flex;
              background: url(${carTwoImgTwo}) no-repeat;
              background-position: center;
            `}
          >
            <TextLockup lockup={lockEmUp[1]} />
            <img
              css={css`
                width: 30%;
                height: auto;
              `}
              src={carTwoImgOne}
              alt="geotargeting"
            />
            <div className="rightBottom">
              <p>
                Get even closer with beacons to find out what customers think as they’re standing in
                front of a specific display, going down a particular aisle, or right as they’re
                leaving the checkout stand.
              </p>
            </div>
          </div>
        </CarouselItem>
      );
    case 'psychographic':
      return (
        <CarouselItem>
          <div>
            <div className="rightTop">
              <TextLockup lockup={lockEmUp[2]} />
            </div>
            <div
              css={css`
                display: flex;
              `}
            >
              <img
                css={css`
                  width: 20%;
                  object-fit: contain;
                `}
                src={carThreeImgOne}
                alt="pyschographic"
              />
              <img
                css={css`
                  width: 30%;
                  height: auto;
                `}
                src={carThreeImgTwo}
                alt="pyschographic"
              />
              <img
                css={css`
                  width: 20%;
                  object-fit: contain;
                `}
                src={carThreeImgThree}
                alt="pyschographic"
              />
            </div>

            <div className="leftBottom" css={css`background-color: #ffffffaa; padding: 0.5rem;`}>
              <p>2-day shipping from Amazon Prime is the only way to go.</p>
              <p>
                Or is it? Find out what environmentalists think of all those different boxes from
                all those different places.
              </p>
            </div>
          </div>
        </CarouselItem>
      );
    case 'report':
      return (
        <CarouselItem>
          <TextLockup lockup={lockEmUp[3]} />
          <div
            css={css`
              display: flex;
              max-width: 90%;
              justify-content: space-between;
              img {
                height: 320px;
              }
            `}
          >
            {/* <AnimatedPopImage src={carFourImgOne} alt='report' css={css`background-size: contain; background-repeat: no-repeat `} style={{}} /> */}
            <img src={carFourImgOne} alt="The cover of paper magazine" />
            <img src={carFourImgThree} alt="report" />
            <img src={carFourImgTwo} alt="report" />
          </div>

          <div
            css={css`
              max-width: 40%;
              margin: 0 auto;
            `}
          >
            <p
              css={css`
                text-align: center;
              `}
            >
              Looking for finished reports on the latest Millennial and Gen-Z topics? We’ve got a
              library of them waiting for you.
            </p>
          </div>
        </CarouselItem>
      );
    case 'perkstore':
      return (
        <CarouselItem>
          <div
            css={css`
              margin-left: 240px;
            `}
          >
            <TextLockup lockup={lockEmUp[4]} />
          </div>

          <img
            className="leftTop"
            css={css`
              height: 480px;
            `}
            src={carFiveImgOne}
            alt="perkstore"
          />
          <img
            className="rightTop"
            css={css`
              height: 420px;
            `}
            src={carFiveImgTwo}
            alt="perkstore"
          />
          <div
            css={css`
              position: absolute;
              left: 400px;
              bottom: 4rem;
            `}
          >
            <p>
              If you’re already offering upgrades, exclusive first looks, behind-the-scenes access,
              or products in exchange for insights and impressions, add it to our Perkstore.
            </p>
            <p>We’ll make sure it’s seen by and offered to just the right people.</p>
          </div>
        </CarouselItem>
      );
    default:
      return 'no carousel page found';
  }
};

export default CarouselPage;
