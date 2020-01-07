import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/hero';
import NewsItem from '../components/news/newsItem';

import { css } from '@emotion/core';
import { bp } from '../styles/component-styles';

export default ({ data: { allContentfulNewsItem } }) => {
  return (
    <Layout page="news">
      <Hero page="news" />
      <div css={css`
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 18rem;
        gap: 0.5rem;
        background-color: var(--light-pink);
        @media (min-width: ${bp.sm}) {
          margin: 0 auto;
          max-width: calc(var(--max-width) - 10vw);
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 20rem;
        }
      `}>
        {allContentfulNewsItem.edges.map(({ node }) => (
          <NewsItem key={node.id} node={node} />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulNewsItem(sort: { fields: [newsDate], order: [DESC] }) {
      edges {
        node {
          newsType
          newsDate
          headline
          link
          id
          columnSpan
          backgroundColor
          backgroundImage{
          file {
            url
            }
          }
          logo {
            file {
              url
              details {
                image {
                  height
                  width
                }
              }
            }
            title
          }
          image {
            file {
              url
            }
          }
          imageRight
        }
      }
    }
  }
`;
