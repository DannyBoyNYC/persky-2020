import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import { useSpring, animated } from 'react-spring';
import { useScroll } from 'react-use-gesture';


import AnimatedHeader from '../animated-header';
import EightHours from './completion-time/';
import { DeepDiv } from '../../styles/case-styles';

const CompletionTime = () => {

  const [style, set] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)',
  }));

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "phones-wide" }
        }
      ) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `);

  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0}deg)`,
    });
  });

  const clamp = (value, clampAt = 70) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  return (
    <div css={css`
    background: linear-gradient(#f9f46d, #f9f46d 68%, #fff 69%);
  `}>
      <DeepDiv>
        <AnimatedHeader>COMPLETION TIME</AnimatedHeader>
        <EightHours />
        <p>
          We’ve completed studies with 30,000 gen-pop responses in under 5 hours, so even with
          audience targeting this one was a cinch.
      </p>
        <div
          {...bind()}
          css={css`
          display: flex;
          overflow-x: scroll;
          width: 100%;
          padding: 20px 0;
        `}
        >
          {data.allFile.edges.map(file => (
            <animated.div
              key={file.node.id}
              className="card"
              css={css`
              flex-shrink: 0;
              width: 180px;
              height: 380px;
              margin: 0 2rem;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center center;
            `}
              style={{
                ...style,
                backgroundImage: `url(${file.node.publicURL})`,
              }}
            />
          ))}
        </div>
      </DeepDiv>
    </div>
  );
};

export default CompletionTime;
