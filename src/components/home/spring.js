import React from 'react';

import AnimatedHeaderLarge from '../animated-header-large';
import AnimatedHeaderSmall from '../animated-header-small-home';
import SpringLoaderIndicator from './springLoaderIndicator';

import { css } from '@emotion/core';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs';

class Spring extends React.Component {
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

  scrollTo = () => {
    this.parallax.scrollTo(this.state.page)
  }

  render() {
    const { page } = this.state;

    return (
      // container div
      <section
        css={css`
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          height: 860px;
          cursor: pointer;
          background-color: transparent;
          position: relative;
        `}
      >
        {/* centered div */}
        <div css={css`
          width: 100%;
          margin: 0 auto;
          /* overflow: hidden; */
        `
        }>

          <Parallax
            ref={ref => (this.parallax = ref)}
            pages={3}
            scrolling={true}
            css={css`
            max-height: 860px;
            /* max-width: 100%; */
          `}
          >

            {/* <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#f9cccc44' }} />
            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#6b995622' }} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#e8d8ea44' }} /> */}

            {/* BEGIN SCREEN ONE  offsets = 0 */}

            {/* screen one hero girl */}
            <ParallaxLayer offset={0.01} speed={0.9}>
              <img
                src={`images/steps/step-one/hero.png`}
                alt=""
                style={{ width: '26%', marginLeft: '74%' }}
              />
            </ParallaxLayer>

            {/* screen one lazy girl */}
            <ParallaxLayer offset={0.7} speed={1}>
              <img
                src={`images/steps/step-one/053193e0c680544a2abdf5998f74305a.jpg`}
                alt=""
                style={{ width: '20%', marginLeft: '32%' }}
              />
            </ParallaxLayer>

            {/* screen one spanish girl */}
            <ParallaxLayer offset={0.41} speed={0}>
              <img
                src={`images/steps/step-one/872120059b67b64df4f345433059e42e.jpg`}
                alt=""
                style={{ width: '22%', marginLeft: '7%' }}
              />
            </ParallaxLayer>

            {/* screen one macbook */}
            <ParallaxLayer offset={0.25} speed={-0.2} >
              <img
                src={`images/steps/step-one/macbook.png`}
                alt="macbook"
                style={{ width: '48%', marginLeft: '25%' }}
              />
            </ParallaxLayer>

            {/* screen one iphone */}
            <ParallaxLayer offset={0.6} speed={0.3} >
              <img
                src={`images/steps/step-one/iphone.png`}
                alt="iphone"
                style={{ width: '14%', marginLeft: '50%' }}
              />
            </ParallaxLayer>

            {/* screen one MAJOR TEXT */}
            <ParallaxLayer offset={0.03} speed={0} >
              <div
                css={css`
                max-width: 240px;
                margin-left: 2%;
              `}
              >
                <AnimatedHeaderSmall>ANSWERS IN 3 EASY STEPS</AnimatedHeaderSmall>
                <AnimatedHeaderLarge>Create Custom Questions</AnimatedHeaderLarge>
                <p>
                  Choose from 10 question types and add your own images or use our built-in photo and
                  gif integrations.
              </p>
              </div>
            </ParallaxLayer>

            {/* screen one MINOR TEXT */}
            <ParallaxLayer offset={0.6} speed={0.4} >
              <div
                css={css`
                max-width: 240px;
                margin-left: 75%;
                padding: 0.25rem;
              `}
              >
                <AnimatedHeaderSmall>QUESTION TYPES</AnimatedHeaderSmall>
                <p>
                  Emoji Response <br /> Yes / No <br /> Image + Video Submission <br /> Multiple
                Choice <br /> Select All That Apply <br /> Ranking <br /> Open Response <br /> 2
                Image Selection <br /> 4 Image Selection <br /> Intro Video
              </p>
              </div>
            </ParallaxLayer>

            {/* BEGIN SCREEN TWO  offsets = 1 */}

            {/* screen two fast food girls */}
            <ParallaxLayer offset={1.5} speed={0}>
              <img
                src={`images/steps/step-two/left.png`}
                alt=""
                style={{ width: '20%', marginLeft: '5%' }}
              />
            </ParallaxLayer>

            {/* screen two hero boy */}
            <ParallaxLayer offset={1.05} speed={0.9}>
              <img
                src={`images/steps/step-two/hero.png`}
                alt=""
                style={{ width: '35%', marginLeft: '65%' }}
              />
            </ParallaxLayer>

            {/* screen two macbook */}
            <ParallaxLayer offset={1.3} speed={-0.2} >
              <img
                src={`images/steps/step-two/macbook.png`}
                alt="macbook"
                style={{ width: '48%', marginLeft: '28%' }}
              />
            </ParallaxLayer>

            {/* screen two geofencing */}
            <ParallaxLayer offset={1.5} speed={0}>
              <img
                src={`images/steps/step-two/center.png`}
                alt=""
                style={{ width: '23%', marginLeft: '65%', boxShadow: '0 0 5px #999', background: '#fff' }}
              />
            </ParallaxLayer>

            {/* screen two MAJOR TEXT */}
            <ParallaxLayer offset={1.06} speed={0} >
              <div
                css={css`
                max-width: 260px;
                margin-left: 2%;
              `}
              >
                <AnimatedHeaderSmall>ANSWERS IN 3 EASY STEPS</AnimatedHeaderSmall>
                <AnimatedHeaderLarge>Select Your Audience</AnimatedHeaderLarge>
                <p>Reach exactly who you need through 35+ demographics, psychographics, and social media targeting.</p>
                <p>You can even set geo-locational boundaries around stores or events to reach people as they enter, exit, or move within.
              </p>
              </div>
            </ParallaxLayer>

            {/* BEGIN SCREEN THREE  offsets = 2 */}

            {/* screen three shopping girl */}
            <ParallaxLayer offset={2.65} speed={0}>
              <img
                src={`images/steps/step-three/left.png`}
                alt=""
                style={{ width: '22%', marginLeft: '5%' }}
              />
            </ParallaxLayer>

            {/* screen three hero boy */}
            <ParallaxLayer offset={2.1} speed={0.9}>
              <img
                src={`images/steps/step-three/hero.png`}
                alt=""
                style={{ width: '20%', marginLeft: '76%' }}
              />
            </ParallaxLayer>

            {/* screen three macbook */}
            <ParallaxLayer offset={2.2} speed={-0.2} >
              <img
                src={`images/steps/step-three/macbook.png`}
                alt="macbook"
                style={{ width: '48%', marginLeft: '28%' }}
              />
            </ParallaxLayer>

            {/* screen three iphone one */}
            <ParallaxLayer offset={2.6} speed={0.3} >
              <img
                src={`images/steps/step-three/phone-left.png`}
                alt="iphone"
                style={{ width: '14%', marginLeft: '50%' }}
              />
            </ParallaxLayer>

            {/* screen three iphone two */}
            <ParallaxLayer offset={2.5} speed={0.4} >
              <img
                src={`images/steps/step-three/phone.png`}
                alt="iphone"
                style={{ width: '14%', marginLeft: '30%' }}
              />
            </ParallaxLayer>

            {/* screen three MAJOR TEXT */}
            <ParallaxLayer offset={2.1} speed={0.3} >
              <div
                css={css`
                max-width: 240px;
                margin-left: 2%;
              `}
              >
                <AnimatedHeaderSmall>ANSWERS IN 3 EASY STEPS</AnimatedHeaderSmall>
                <AnimatedHeaderLarge>Get Real Time Results</AnimatedHeaderLarge>
                <p>Then, just hit go. All answers come in live and you can filter each question to see how people of certain ages, ethnicities, gender, etc answered it.</p>
                <p>Plus, you can export individual charts or the full report in a ready-to-present Powerpoint.</p>
                <p>You can even set geo-locational boundaries around stores or events to reach people as they enter, exit, or move within.
              </p>
              </div>
            </ParallaxLayer>

            {/* screen three MINOR TEXT */}
            <ParallaxLayer offset={2.7} speed={0.3} >
              <div
                css={css`
                max-width: 200px;
                margin-left: 76%;
                padding: 0.25rem;
              `}
              >
                <p>Our average turnaround time is under 24 hours, but we’ve completed studies with 30,000 responses in under five hours.</p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={1} onClick={() => this.setPage(1)} />
            <ParallaxLayer offset={1} speed={1} onClick={() => this.setPage(2)} />
            <ParallaxLayer offset={2} speed={1} onClick={() => this.setPage(0)} />

          </Parallax>


        </div>
        <ol css={css`
            position: absolute; 
            bottom: 30px;
            z-index: 101; 
            left: 0; 
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            list-style: none;
        `}>
          <SpringLoaderIndicator page={page} setPage={this.setPage} screenNum={0} />
          <SpringLoaderIndicator page={page} setPage={this.setPage} screenNum={1} />
          <SpringLoaderIndicator page={page} setPage={this.setPage} screenNum={2} />
        </ol>
      </section>
    );
  }
}

export default Spring;
