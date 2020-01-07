import React from 'react';
import { css } from '@emotion/core';

function CarouselIndicatorButton({ page, setPage, screenNum }) {
  return (
    <button type='button'
      name="carousel screen indicator"
      className="screen-reader"
      onClick={() => setPage(screenNum)}
      css={css`
        ${page === screenNum ? 'background-color: black' : 'background-color: white'};
        height: 5px;
        width: 40px;
        margin: 6px;
        opacity: 0.8;
        `}>
      Carousel component {screenNum}
    </button>
  )
}

export default CarouselIndicatorButton
