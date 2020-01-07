import React from 'react';
import { css } from '@emotion/core';

function SpringLoaderIndicator({ page, setPage, screenNum }) {
  return (
    <li css={css`
      display: flex;
      flex-direction: column;
    `}>
      <div css={css`
        margin: 0 6px;
        ${page === screenNum ? 'color: black; font-size: 2rem' : 'color: white; font-size: 0.875rem'};
      `}>
        {`0${screenNum + 1}`}
      </div>

      <button type='button'
        className="screen-reader"
        onClick={() => setPage(screenNum)}
        css={css`
        ${page === screenNum ? 'height: 18px' : 'height: 6px'};
        width: 240px;
        margin: 0 6px;
        background-color: white;
        `}>
        Page number {screenNum}
      </button>
    </li>
  )
}

export default SpringLoaderIndicator
