import React from 'react';
import { Stickyroll } from '@stickyroll/stickyroll';
import styled from '@emotion/styled';

import PageCounter from './page-counter';
import ProgressCounter from './progress-counter';
import Skip from "./skip";

import Spring from './spring';

const StickyDiv = styled.div`
min-height: 100%;
&.custom-trigger {
    transition: background-color 0.4s ease-in-out;
}
&.custom-trigger--0{
    background-color: var(--moss);
}
&.custom-trigger--1{
    background-color: var(--thistle);
}
&.custom-trigger--2{
    background-color: var(--vermillion);
}
&.custom-trigger--3{
    background-color: var(--navy);
}
`

const headlines = [
  "Create Custom Questions",
  "Get Realtime Results",
  "Select Your Audience",
]

const StickyRoll = () => {
  const className = progress => `custom-trigger custom-trigger--${Math.round(progress * 3)}`

  return (
    <Stickyroll
      pages={headlines}
      factor={0.5}
      throttle={250}
      anchors="threesteps" >

      {({ page, pageIndex, pages, progress }) => {
        return (
          <StickyDiv>
            {/* <StickyDiv className={className(progress)}> */}

            {/* <PageCounter /> */}
            {/* <ProgressCounter /> */}
            {/* <h1>{headlines[pageIndex]}</h1> */}

            <Spring />

            {/* <Skip useContext={true} /> */}

          </StickyDiv>
        );
      }}
    </Stickyroll>
  )
};

export default StickyRoll;