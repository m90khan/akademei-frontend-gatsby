import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json';
import Cell from '../components/Cell';
import styled from 'styled-components';
import Layout from './../layouts/index';
import {
  logoFigma,
  logoFramer,
  logoReact,
  logoSketch,
  logoStudio,
  logoSwift,
  background3,
  background,
  background2,
  background4,
  background5,
  background6,
} from './../images';

const IndexPage = () => (
  <Layout>
    <Hero>
      <div className='HeroGroup'>
        <h1>
          Learn to <br />
          design and code React apps
        </h1>
        <p>
          Complete courses about the best tools and design systems. Prototype and build
          apps with React and Swift.
        </p>
        <h1>
          <Link to='/page-2/'>Watch the video</Link>
        </h1>
        <div className='Logos'>
          <img src={logoSketch} width='50' />
          <img src={logoFigma} width='50' />
          <img src={logoStudio} width='50' />
          <img src={logoFramer} width='50' />
          <img src={logoReact} width='50' />
          <img src={logoSwift} width='50' />
        </div>
        <Wave />
      </div>
    </Hero>
    <Cards>
      <h2>11 courses, more coming</h2>
      <div className='CardGroup'>
        <Card title='Design System' text='10 sections' image={background} />
        <Card title='React for Designers' text='12 sections' image={background2} />
        <Card title='Video Editing Premiere' text='5 sections' image={background3} />
        <Card title='HTML/CSS Hero' text='7 sections' image={background4} />
        <Card title='Advance JavaScript' text='9 sections' image={background5} />
        <Card title='ARKit' text='10 sections' image={background6} />
      </div>
    </Cards>
    <Section
      image={background3}
      logo={logoReact}
      title='React for Designers'
      text='Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify.'
    />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map((cell) => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </Layout>
);

const Hero = styled.div`
  background: url(${background3});
  height: 100vh;
  background-size: cover;
  background-position: center;

  .HeroGroup {
    margin: 0 auto;
    max-width: 60%;
    padding: 15rem 5rem;
    text-align: center;
    @media (max-width: 640px) {
      padding: 10rem 2rem;
    }
    h1 {
      margin: 0;
      color: white;
      font-size: 60px;
      line-height: 1.2;
      opacity: 0;
      animation: HeroAnimation;
      animation-duration: 3s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
      @media (max-width: 640px) {
        font-size: 40px;
      }
    }
    span {
      color: #819eff;
    }
    p {
      font-size: 3rem;
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.8);
      animation: HeroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
      opacity: 0;
      @media (max-width: 640px) {
        font-size: 24px;
      }
    }
    a {
      font-size: 1.7rem;
      font-weight: 600;
      color: aliceblue;
      text-transform: uppercase;
      background: rgba(0, 0, 0, 0.7);
      padding: 1rem 2rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 2rem;
      &:hover {
        background: white;
        color: black;
      }
    }
    .Logos {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 40px;
      margin: 5rem 0;
      justify-items: center;
      overflow: visible;
    }
    @media (max-width: 640px) {
      .Logos {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    svg {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

const Cards = styled.div`
  h2 {
    margin: 50px 20px;
    font-size: 60px;
    text-align: center;
    font-weight: 700;
    background: linear-gradient(104deg, #050a27 0%, #4a548c 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .CardGroup {
    margin: 50px 40px 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    justify-items: center;
  }

  @media (max-width: 1060px) {
    .CardGroup {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 720px) {
    .CardGroup {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`;

const SectionCellGroup = styled.div`
  max-width: 80%;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  padding: 0 2rem;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export default IndexPage;
