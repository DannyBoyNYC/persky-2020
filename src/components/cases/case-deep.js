import React from 'react';
import { css } from '@emotion/core';

import AnimatedHeader from '../animated-header';

import femalemale from '../../../static/images/cases/female-male.png';
import percentages from '../../../static/images/cases/percentages.png';

import { DeepDiv } from '../../styles/case-styles';

const CaseDeep = ({ deep }) => {
  switch (deep) {
    case 'takeaways':
      return (
        <div>
          <DeepDiv>
            <AnimatedHeader>KEY TAKEAWAYS</AnimatedHeader>
            <p>We had a feeling traditional media got this one wrong. Turns out we were right.</p>
            <div className="tripart">
              <div>
                <h1 className="round">1</h1>
                <img src={femalemale} alt="Outlined silohouettes of a male and female" />
                <div className="takeaways">
                  <h3>
                    84% <span>Female</span>
                  </h3>
                  <h3>
                    77% <span>Male</span>
                  </h3>
                </div>
                <p className="relevant">
                  Responded positively or indicated that they felt the campaign did not offend them.
              </p>
              </div>
              <div>
                <h1 className="round">2</h1>
                <div
                  css={css`
                  margin-bottom: 1rem;
                  position: relative;
                `}
                >
                  <img src={percentages} alt="Circle chart showing percentages of respondants" />
                  <p
                    css={css`
                    position: absolute;
                    top: 36px;
                    left: center;
                    width: 100%;
                    span {
                      margin: 0;
                      display: block;
                    }
                  `}
                  >
                    <span>8% Worse</span>
                    <span>10% Don’t Know</span>
                    <span>39% No Change</span>
                    <span>43% Better</span>
                  </p>
                </div>

                <p>In what way has this ad changed your perception of Gillette?</p>
                <p className="relevant">
                  Validating P&amp;G’s internal research, our results showed that overall sentiment
                  for the ad was largely positive or treported by the media.
              </p>
              </div>
              <div>
                <h1 className="round">3</h1>

                <h2
                  css={css`
                  font-size: 6rem;
                  font-weight: normal;
                  margin-top: 3rem;
                `}
                >
                  69%
              </h2>
                <p>
                  of males and females think brands should participate in culturally relevant
                  conversations.
              </p>
                <p className="relevant">
                  Consumers expect brands to take stands and express a point of view. This is
                  especially true for Millennials and Gen-Z.
              </p>
              </div>
            </div>
          </DeepDiv>
        </div>
      );

    default:
      return 'no deep case study found';
  }
};

export default CaseDeep;
