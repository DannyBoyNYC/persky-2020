import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import CarouselIndicatorButton from './carouselIndicatorButtons';
import TextLockup from './textLockup';
import { lockEmUp } from './carousel-data';

import { noButtonStyles } from '../../styles/component-styles';

export default () => (
  <StaticQuery
    query={graphql`
    {
      allFile(
        sort: {fields: name, order: ASC}, 
        filter: {relativeDirectory: {eq: "carousel"}}
        ) {
        edges {
          node {
            publicURL
            # name
            # relativeDirectory
            # extension
          }
        }
      }
    }
`}
    render={(data) => (
      <SpringCarousel images={data.allFile} />
    )}
  />
)

class SpringCarousel extends Component {
  state = {
    page: 0
  }

  setPage = (pageNum) => {
    this.setState(prev => ({
      page: pageNum
    }), () => {
      this.scrollTo()
    })
  }

  scrollUp = () => {
    this.setState(prev =>
      ({ page: prev.page === 4 ? prev.page = 0 : prev.page + 1 }), () => {
        this.scrollTo()
      }
    )
  }

  scrollDown = () => {
    this.setState(prev =>
      ({ page: prev.page === 0 ? prev.page = 4 : prev.page - 1 }), () => {
        this.scrollTo()
      }
    )
  }

  scrollTo = () => {
    this.parallax.scrollTo(this.state.page)
  }

  render() {
    const { page } = this.state;
    return (
      <section
        css={css`
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          height: 780px;
          cursor: pointer;
          position: relative;
          background-color: var(--light-pink);
          width: 100%;
        `}
      >

        {/* centered div */}
        <div css={css`
          max-width: var(--max-width);
          margin: 0 auto;
          height: 780px;
          `}>

          <Parallax
            ref={ref => (this.parallax = ref)}
            pages={5}
            scrolling={false}
            horizontal
            css={css`
            height: 780px;
            max-width: var(--max-width);
          `}
          >

            {/* <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#f9cccc44' }} />
            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#6b995622' }} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#e8d8ea44' }} />
            <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#f9cccc22' }} />
            <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#6b995622' }} /> */}

            {/* BEGIN SCREEN ONE  offsets = 0 */}

            {/* screen one top left */}
            <ParallaxLayer offset={0.05} speed={0.9}>
              <img
                src={this.props.images.edges[0].node.publicURL}
                alt="woman with a phone"
                style={{ width: '28%', marginTop: '3%' }}
              />
            </ParallaxLayer>

            {/* screen one iphone */}
            <ParallaxLayer offset={0.37} speed={1}>
              <img
                src={this.props.images.edges[1].node.publicURL}
                alt="iPhone with Ron Swanson"
                style={{ width: '26%', marginTop: '3%' }}
              />
            </ParallaxLayer>

            {/* screen one candy lover */}
            <ParallaxLayer offset={0.65} speed={0.2} >
              <img
                src={this.props.images.edges[2].node.publicURL}
                alt="candy lover"
                style={{ width: '29%', marginTop: '29%' }}
              />
            </ParallaxLayer>

            {/* screen one MAJOR TEXT */}
            <ParallaxLayer offset={0.7} speed={0} >
              <div
                css={css`
                max-width: 240px;
                margin-top: 3%;
              `}
              >
                <TextLockup lockup={lockEmUp[0]} />
              </div>
            </ParallaxLayer>

            {/* screen one MINOR TEXT */}
            <ParallaxLayer offset={0.05} speed={0.4} >
              <div
                css={css`
                max-width: 240px;
                margin-top: 36%;
              `}
              >
                <p>A major retailer utilized this feature for their back to college campaign by having students record a video of their shopping experience in the back to college section.</p>
                <p>We used geo-targeting to know when students entered the store and sent them a push notification as soon as they did.</p>
              </div>
            </ParallaxLayer>

            {/* BEGIN SCREEN TWO  offsets = 1 */}

            {/* screen two store */}
            <ParallaxLayer offset={1.15} speed={0.1}>
              <img
                src={this.props.images.edges[3].node.publicURL}
                alt="store"
                style={{ width: '75%', marginTop: '8%', opacity: '0.6' }}
              />
            </ParallaxLayer>

            {/* screen two geofence */}
            <ParallaxLayer offset={1.35} speed={0.9}>
              <img
                src={this.props.images.edges[4].node.publicURL}
                alt="geofencing interface"
                style={{ width: '30%', marginTop: '9%' }}
              />
            </ParallaxLayer>

            {/* screen two MAJOR TEXT */}
            <ParallaxLayer offset={1.06} speed={0} >
              <div
                css={css`
                /* max-width: 320px; */
                margin-top: 4%;
              `}
              >
                <TextLockup lockup={lockEmUp[1]} />
              </div>
            </ParallaxLayer>

            {/* screen two MINOR TEXT */}
            <ParallaxLayer offset={1.7} speed={0.4} >
              <div
                css={css`
                max-width: 240px;
                margin-top: 40%;
              `}
              >
                <p>
                  Get even closer with beacons to find out what customers think as they’re standing in
                  front of a specific display, going down a particular aisle, or right as they’re
                  leaving the checkout stand.
              </p>
              </div>
            </ParallaxLayer>

            {/* BEGIN SCREEN THREE  offsets = 2 */}

            {/* screen three shopping girl */}
            <ParallaxLayer offset={2.3} speed={0}>
              <img
                src={this.props.images.edges[5].node.publicURL}
                alt="woman pushing a shopping cart"
                style={{ width: '32%', marginTop: '8%' }}
              />
            </ParallaxLayer>

            {/* screen three shop window */}
            <ParallaxLayer offset={2.15} speed={0.9}>
              <img
                src={this.props.images.edges[6].node.publicURL}
                alt="shop window"
                style={{ width: '20%', marginTop: '6%' }}
              />
            </ParallaxLayer>

            {/* screen three boxed water */}
            <ParallaxLayer offset={2.6} speed={0.2} >
              <img
                src={this.props.images.edges[7].node.publicURL}
                alt="boxed water"
                style={{ width: '28%', marginTop: '28%' }}
              />
            </ParallaxLayer>

            {/* screen three MAJOR TEXT */}
            <ParallaxLayer offset={2.7} speed={0.3} >
              <div
                css={css`
                max-width: 240px;
                margin-top: 2%;
              `}
              >
                <TextLockup lockup={lockEmUp[2]} />
              </div>
            </ParallaxLayer>

            {/* screen three MINOR TEXT */}
            <ParallaxLayer offset={2.05} speed={0.3} >
              <div
                css={css`
                max-width: 200px;
                margin-top: 42%;
                padding: 0.25rem;
              `}
              >
                <p>Our average turnaround time is under 24 hours, but we’ve completed studies with 30,000 responses in under five hours.</p>
              </div>
            </ParallaxLayer>

            {/* BEGIN SCREEN FOUR offsets = 3 */}

            {/* screen four supreme magazine */}
            <ParallaxLayer offset={3.05} speed={0.12}>
              <img
                src={this.props.images.edges[8].node.publicURL}
                alt="supreme magazine cover"
                style={{ width: '26%', marginTop: '10%' }}
              />
            </ParallaxLayer>

            {/* screen four paper magazine */}
            <ParallaxLayer offset={3.37} speed={0.36}>
              <img
                src={this.props.images.edges[9].node.publicURL}
                alt="paper magazine"
                style={{ width: '26%', marginTop: '10%' }}
              />
            </ParallaxLayer>

            {/* screen four paper magazine */}
            <ParallaxLayer offset={3.7} speed={0.6}>
              <img
                src={this.props.images.edges[10].node.publicURL}
                alt="paper magazine"
                style={{ width: '26%', marginTop: '10%' }}
              />
            </ParallaxLayer>

            {/* screen four MAJOR TEXT */}
            <ParallaxLayer offset={3.4} speed={0.3} >
              <div
                css={css`
                margin-top: 2%;
              `}
              >
                <TextLockup lockup={lockEmUp[3]} />
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={3} speed={0.13}>
              <div
                css={css`
              margin-top: 50%;
            `}
              >
                <p
                  css={css`
                text-align: center;
                max-width: 40%;
                margin: 0 auto;
              `}
                >
                  Looking for finished reports on the latest Millennial and Gen-Z topics? We’ve got a
                  library of them waiting for you.
            </p>
              </div>
            </ParallaxLayer>

            {/* BEGIN SCREEN FIVE  offsets = 4 */}

            {/* screen four collection of gift cards LEFT */}
            <ParallaxLayer offset={4.0} speed={0.3}>
              <img
                src={this.props.images.edges[11].node.publicURL}
                alt="collection of gift cards"
                style={{ width: '32%', marginTop: '8%' }}
              />
            </ParallaxLayer>

            {/* screen four collection of gift cards RIGHT */}
            <ParallaxLayer offset={4.6} speed={0.3}>
              <img
                src={this.props.images.edges[12].node.publicURL}
                alt="macbook"
                style={{ width: '32%', marginTop: '8%' }}
              />
            </ParallaxLayer>

            {/* screen five MAJOR TEXT */}
            <ParallaxLayer offset={4.2} speed={0.3} >
              <div
                css={css`
                max-width: 240px;
                margin-top: 4%;
              `}
              >
                <TextLockup lockup={lockEmUp[4]} />
              </div>
            </ParallaxLayer>

            {/* screen five MINOR TEXT */}
            <ParallaxLayer offset={4.35} speed={0.3}>
              <div
                css={css`
              max-width: 40%;
              margin-top: 40%;
            `}
              >
                <p>If you’re already offering upgrades, exclusive first looks, behind-the-scenes access, or products in exchange for insights and impressions, add it to our Perkstore.</p>
                <p>We’ll make sure it’s seen by and offered to just the right people.</p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={1} onClick={() => this.setPage(1)} />
            <ParallaxLayer offset={1} speed={1} onClick={() => this.setPage(2)} />
            <ParallaxLayer offset={2} speed={1} onClick={() => this.setPage(3)} />
            <ParallaxLayer offset={3} speed={1} onClick={() => this.setPage(4)} />
            <ParallaxLayer offset={4} speed={1} onClick={() => this.setPage(0)} />
          </Parallax>

          <div css={css`
          width: 100%;
          height: 100%;
          display: flex; 
          justify-content: space-between;
          align-items: center;
        `}>
            <button onClick={this.scrollDown} css={noButtonStyles}><MdKeyboardArrowLeft style={{ height: '4rem', width: '4rem', color: 'black', opacity: 0.1 }} /></button>
            <button onClick={this.scrollUp} css={noButtonStyles}><MdKeyboardArrowRight style={{ height: '4rem', width: '4rem', color: 'black', opacity: 0.1 }} /></button>
          </div>


          <div css={css`
          position: absolute; 
          bottom: 30px;
          z-index: 100; 
          left: 0; 
          width: 100%;
          display: flex;
          justify-content: center;
        `}>
            <CarouselIndicatorButton page={page} setPage={this.setPage} screenNum={0} />
            <CarouselIndicatorButton page={page} setPage={this.setPage} screenNum={1} />
            <CarouselIndicatorButton page={page} setPage={this.setPage} screenNum={2} />
            <CarouselIndicatorButton page={page} setPage={this.setPage} screenNum={3} />
            <CarouselIndicatorButton page={page} setPage={this.setPage} screenNum={4} />
          </div>
        </div>
      </section>
    );
  }
}
