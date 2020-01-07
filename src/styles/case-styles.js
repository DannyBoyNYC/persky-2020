import styled from '@emotion/styled';
import { bp } from './component-styles';

export const DeepDiv = styled('div')`
  text-align: center;
  max-width: var(--max-width);
  margin: 0 auto;
  padding-bottom: 2rem;
  .tripart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: ${bp.xs}) {
      flex-direction: row;
    }
    > div {
      margin: 0 2rem;
      flex-basis: 38%;
      margin-top: 3rem;
      background-color: var(--light-pink);
      padding: 0 0.5rem 1.5rem 0.5rem;
    }
  }
  > h2 {
    padding: 3rem 0 0.75rem 0;
  }
  p {
    max-width: 20rem;
    margin: 0 auto;
  }
  p.relevant {
    font-size: 0.875rem;
    margin-top: 2rem;
  }
  h1 {
    margin-bottom: 1rem;
  }
  div > h1.round {
    width: 50px;
    height: 50px;
    border: 3px solid #000;
    border-radius: 50%;
    background-color: #fff;
    line-height: 44px;
    font-weight: normal;
    font-size: 1.5rem;
    color: #000;
    margin: -25px auto 2rem auto;
  }
  .takeaways {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  div > h3 {
    margin: 0;
    font-size: 2rem;

    span {
      display: block;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: normal;
    }
  }
`;
