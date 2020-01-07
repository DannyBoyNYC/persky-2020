import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

// general 
const bp = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

// component styles

// Hero (top of the pages & occasionally elsewhere)
const HeroSection = styled.section`
  position: relative;
  max-width: 28rem;
  margin: 4rem auto;
  text-align: center;
  p {
    max-width: 22rem;
    margin: 1rem auto;
  }
`;
// Header and NavBar styles
const NavHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - var(--max-width)) / 2);
`;

const StyledBurger = styled.button`
  position: absolute;
  top: 1.25rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  padding: 0;
  z-index: 12;

  div {
    width: 1.5rem;
    height: 0.25rem;
    background: #000;
    border-radius: 2px;
    transition: all 0.1s linear;
    position: relative;
    transform-origin: 1px;
    :first-of-type {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-of-type(2n) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(-6px)' : 'translateX(0)')};
    }
    :nth-of-type(3n) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
  @media (min-width: ${bp.xs}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #222;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0;
  padding: 1rem 0.5rem;
  text-decoration: none;
  @media (min-width: ${bp.xs}) {
    font-size: 0.75rem;
  }
  &.current-page {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const LogoLink = styled(Link)`
  @media (max-width: ${bp.xs}) {
    margin: 0 auto;
  }
  img {
    width: 8rem;
    margin-bottom: 1rem;
  }
`;

// css styles
const buttonStyles = css`
  display: inline-block;
  padding: 0.4rem 0.75rem;
  background-color: #000; 
  color: #fff;
  font-size: 0.75rem;
  text-align: center;
  line-height: 1.1;
`;

const noButtonStyles = css`
  display: inline-block;
  padding: 0;
  background-color: transparent;
`;

// base svg styles
const heroSvgStyles = css`
  display: none;
  filter: drop-shadow(-2px 2px 1px #666);
  @media (min-width: ${bp.xs}) {
    display: block;
    width: 10rem;
    height: 10rem;
    position: absolute;
  }
`;

export {
  bp,
  buttonStyles,
  noButtonStyles,
  heroSvgStyles,
  HeroSection,
  NavHeader,
  StyledBurger,
  NavLink,
  LogoLink,
};
