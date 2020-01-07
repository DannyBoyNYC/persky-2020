import styled from '@emotion/styled';
import { bp } from './component-styles';

const NewsEntry = styled.a`
  display: flex;
  flex-direction: row;
  background: #fff;
  h2 {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: normal;
    margin-bottom: 0.25rem;
  }
  h3 {
    font-size: 1.25rem;
    padding-right: 2rem;
    /* margin-bottom: 2rem; */
    margin-bottom: auto;
    font-weight: normal;
    @media (min-width: ${bp.sm}) {
      /* margin-bottom: auto; */
    }
  }
  time {
    display: block;
    font-size: 0.75rem;
    margin: 0;
    margin-bottom: 1.5rem;
  }
  .logo {
    margin: 0 auto;
    filter: grayscale(1);
    max-height: 1.5rem;
    width: auto;
  }
`;

const InnerFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;
  padding-bottom: 0.75rem;
  order: ${props => props.imageRight ? '-1' : '1'};
  @media (min-width: ${bp.sm}) {
    padding: 2rem;
  }
`;

const PromoImageDiv = styled.div`
  overflow: hidden;
`;

const PromoImage = styled.img`
  object-fit: contain;
  max-width: 100%;
`;

export { NewsEntry, PromoImageDiv, PromoImage, InnerFlex };
