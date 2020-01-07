import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { bp } from '../../styles/component-styles';

import placeholderMovieSm from '../../../static/video/final-sm.mp4';

const Video = () => {

  const images = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "client-brands" }
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

  const VideoSection = styled.section`
    position: relative;
    video {
      width: 100%;
      max-width: 1024px;
      display: block;
      margin: 4rem auto 1rem auto;
    }
    div {
      display: flex;
      flex-direction: column;
      padding: 0 4rem;
      @media(min-width: ${bp.xs} ){
        flex-direction: row;
        align-items: center;
        padding: 0 2rem;
        margin: 0 auto;
        width: 70%;
        max-width: 960px;
      }
      img {

        @media(min-width: ${bp.xs} ){
          padding: 1rem;
          width: 50%;
        }
      }
    }
  `

  return (
    <VideoSection>
      <video
        autoPlay
        muted
        // noop
        src={placeholderMovieSm}
      />
      <div css={css``}>
        <img
          src={images.allFile.edges[0].node.publicURL}
          alt="client listing"
        />
        <img
          src={images.allFile.edges[1].node.publicURL}
          alt="client listing"
        />
      </div>
    </VideoSection>
  )

}

export default Video;
