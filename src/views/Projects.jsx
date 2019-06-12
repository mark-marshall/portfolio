import React from 'react';
import styled from 'styled-components';

import Project from '../components/Project';
import fd from '../img/fd.png';
import wmp from '../img/wmp.png';
import jf from '../img/jf.png';
import f1 from '../img/f1.png';
import wp from '../docs/wp.pdf';

const Projects = () => {
  return (
    <StyledProjects>
      <Project
        title="FrontDesk - Web App"
        desc="Creating a direct line of conversation between hotels and their guests."
        stack="React | Redux | Express | MongoDB | Jest | Git"
        src={fd}
        siteLink="https://getfrontdesk.co/"
        githubLink="https://github.com/lambdalabs-eu1-webchat"
        demoLink="https://youtu.be/VMWvTaHI6_E"
      />
      <Project
        title="Water My Plants - Splash Page"
        desc="Keeping plants luscious with watering alerts right to gardener's phones."
        stack="HTML | LESS | JavaScript | Git"
        src={wmp}
        siteLink="http://www.watermyplants.co/"
        githubLink="https://github.com/mark-marshall/Water-My-Plants"
      />
      <Project
        title="Jiffy Delivery - Startup"
        desc="London's online shopping, delivered 6pm to midnight, 7 days a week."
        stack="CSS | Zapier | Sketch"
        src={jf}
        siteLink="https://jiffy.delivery"
        githubLink=""
        demoLink=""
        phLink="https://www.producthunt.com/posts/jiffy"
      />
      <Project
        title="Mavens of London - Digital Research"
        desc="A look at the future of Formula One in the US, through online data."
        stack="Brandwatch | AdWords | Python"
        src={f1}
        siteLink=""
        githubLink=""
        demoLink=""
        phLink=""
        dlLink={wp}
      />
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
  margin auto;
  height: 100vh;
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  padding: 1%;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    height: 100%
    width: 100%;
    padding-top: 8%;
  }
`;

export default Projects;
