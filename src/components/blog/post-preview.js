import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import ReadLink from './read-link';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px dashed #ddd;
      margin-top: 2rem;
      padding: 1rem;
      max-width: calc(var(--max-width) - 30vw);
      margin: 0 auto;
      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <h3 css={css`font-weight: normal;`}>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <ReadLink to={post.slug}>Read on...</ReadLink>
  </article>
);

export default PostPreview;
