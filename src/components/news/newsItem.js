import React from 'react';
import { css } from '@emotion/core';

import { bp } from '../../styles/component-styles';
import { NewsEntry, PromoImageDiv, PromoImage, InnerFlex } from '../../styles/news-styles';

const NewsItem = ({
  node: {
    link,
    newsType,
    newsDate,
    headline,
    logo,
    columnSpan,
    backgroundColor,
    image,
    imageRight,
    backgroundImage,
  },
}) => {
  return (
    <NewsEntry
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      css={css`
        grid-column: 1/12;
        @media (min-width: ${bp.sm}) {
          grid-column: ${columnSpan};
          /* prettier ignore */
          background-color: var(--${backgroundColor});
          ${backgroundImage && `background-image: url(${backgroundImage.file.url}); background-size: cover; color: #fff`}
        }
      `}
    >
      <PromoImageDiv>{image && <PromoImage src={image.file.url} />}</PromoImageDiv>
      <InnerFlex imageRight={imageRight}>
        <h2>{newsType}</h2>
        <time dateTime={newsDate}>
          {new Date(Date.parse(newsDate)).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <h3>{headline}</h3>
        <img
          className="logo"
          width={logo.file.details.image.width}
          height={logo.file.details.image.height}
          src={logo.file.url}
          alt={logo.title}
        />
      </InnerFlex>
    </NewsEntry>
  );
};

export default NewsItem;
