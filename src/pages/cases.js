import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/hero';
import Case from '../components/cases/case';
import SideBySide from '../components/side-by-side';
import CaseDeep from '../components/cases/case-deep';
import CampaignDetails from '../components/cases/campaign-details';
import CompletionTime from '../components/cases/completion-time';

import MiniHero from '../components/mini-hero';

export default () => (
  <Layout page="cases">
    <Hero page="cases" />
    <Case />
    <Hero page="case" />
    <SideBySide type="masri" />
    <CampaignDetails />
    <CompletionTime />
    <CaseDeep deep="takeaways" />
    <MiniHero page="impact" />
    <SideBySide type="pritchard" />
  </Layout>
);
