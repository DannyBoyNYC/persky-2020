import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import AnimatedPopImage from '../animated-image-rise';

import caseone from '../../../static/images/cases/1-cases.png';
import casetwo from '../../../static/images/cases/2-cases.png';

import { bp } from '../../styles/component-styles';

const CaseDiv = styled.div`
@media(min-width: ${bp.xs} ){
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: calc(var(--max-width) - 20vw);
  margin: 0 auto;
}
  article {
    @media(min-width: ${bp.xs} ){
      /* padding-left: 6rem; */
    }
  }
  aside {
    display: flex;
    justify-content: center;
  }
  img {
    padding: 1rem;
  }
  h2 {
    margin-bottom: 0.25rem;
    margin-top: 1.5rem;
  }
`;

function Case() {
  return (
    <>
      <CaseDiv>
        <article>
          <h2>SHOP-ALONGS</h2>
          <p>
            Want to know what new moms think of your baby section while they’re standing in it? Have
            them record a video to let you know.
          </p>

          <h2>SPONSORSHIP EVALUATION</h2>
          <p>
            Sponsoring an event? Have our users take pics/videos of how your brand is being
            represented at live venues and events.
          </p>

          <h2>FINAL DESTINATION</h2>
          <p>
            Where does your product end up? A fridge, closet, patio, desk? Have consumers send a pic
            or video of what that space looks like.
          </p>
        </article>
        <aside>
          <AnimatedPopImage src={caseone} />
        </aside>
      </CaseDiv>
      <CaseDiv>
        <aside css={css`
          display: none;
          @media(min-width: ${bp.xs} ){
            display: block;
            padding-left: 2rem;
          }
        `}>
          <AnimatedPopImage src={casetwo} />
        </aside>
        <article>
          <h2>AD / PRODUCT / CONCEPT TEST</h2>
          <p>
            Have questions that written words can’t fully answer? Ask users to respond with video to
            really show their emotion.
          </p>

          <h2>ACTIVATION INITIATIVES</h2>
          <p>
            Doing pop-ups or other events? Have our users record the ground-level executions along
            with reactions to your efforts!
          </p>

          <h2>CUSTOMER FEEDBACK</h2>
          <p>
            Why do customers return things? Ask them to try on, taste, or use your product one last
            time before they do - on video explaining why.
          </p>
        </article>
      </CaseDiv>
    </>
  );
}

export default Case;
