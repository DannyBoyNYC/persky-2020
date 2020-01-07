import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';

import Header from '../components/header/header';
import Modal from './modal/modal'

// import Global from '../styles/global-styles.js';

const Layout = ({ children, page }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div className={page}>
      <Global
        styles={css`
          :root {
            /* styleguide colors */
            --pink: #f9cccc;
            --lemon: #f4ef60;
            --moss: #6b9956;
            --light-mushroom: #efebe8;
            --off-white: #f7f6f5;
            --tan: #edddc9;
            --thistle: #e8d8ea;
            --vermillion: #f96b59;
            --navy: #3f5b96;
            --dark-grey: #5f5e66;
            --dark-mushroom: #b5acaa;
            --sky: #cce2ea;
            /* custom */
            --light-pink: #efebe8;
            --base-text: #111111;
            --white: #ffffff;
            --max-width: 1280px;
          }
          @font-face {
            font-family: 'Larsseit_Medium';
            src: url('/fonts/Larsseit_Medium.ttf');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Larsseit_Regular';
            src: url('/fonts/Larsseit_Regular.ttf');
            font-weight: 400;
            font-style: normal;
          }
          html,
          body {
            box-sizing: border-box;
            margin: 0;
            color: var(--base-text);
            margin: 0;
            font-size: 120%;
            line-height: 1.4;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
              'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          a {
            text-decoration: none;
            color: #000;
          }
          h1,
          h2,
          h3 {
            font-family: Larsseit_Medium;
            line-height: 1.1;
            + * {
              margin-top: 0.5rem;
            }
          }
          h1 {
            font-size: 2rem;
            font-family: 'Larsseit_Regular';
            font-weight: normal;
            margin-bottom: 0.5rem;
          }
          h2 {
            font-size: 0.875rem;
            font-weight: normal;
            text-transform: uppercase;
          }
          p {
            font-size: 0.825rem;
            margin: 0.5rem 0;
          }
          img {
            max-width: 100%;
            height: auto;
          }
          li {
            margin-top: 0.25rem;
          }
          button {
            border: none;
            cursor: pointer;
          }
          .screen-reader {
            text-indent: -5400px;
          }
          /* unique page level styling */
          div.home {
            background-image: linear-gradient(var(--light-pink) 0%, var(--light-pink) 20%, #fff 20%);
            background-size: 100% 3900px;
            background-repeat: no-repeat;

          }
          div.cases {
            background: linear-gradient(var(--light-pink) 0%, var(--light-pink) 23%, #fff 23%);
          }
          div.news,
          div.blog {
            background-color: var(--light-pink);
            padding-bottom: 3rem;
          }
          div.blog {
            height: 100vh;
          }
          /* main  {
            scroll-snap-type: y mandatory !important;
          }
          main > div {
            scroll-snap-align: center !important;
          } */
        `}
      />

      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Header />
      <Modal />
      <main
        css={css`
          margin: 2rem auto 0;
          max-width: 100%;
          padding-bottom: 3rem;
        `}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
