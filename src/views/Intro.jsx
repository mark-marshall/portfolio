import React from 'react';
import styled from 'styled-components';

import gh from '../img/gh.png';
import ln from '../img/ln.png';
import gm from '../img/gm.png';

const Intro = () => {
  return (
    <StyledIntro>
      <div>
        Hi, I'm Mark. I'm interested in web projects that empower good people to
        do good things.
      </div>
      <nav>
        <a
          href="https://github.com/mark-marshall"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gh} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/mark-marshall-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ln} alt="linkedIn" />
        </a>
        <a href="mailto:mark.marshallgp@gmail.com">
          <img src={gm} alt="email" />
        </a>
      </nav>
    </StyledIntro>
  );
};

const StyledIntro = styled.div`
  background-color: black;
  width: 50%;
  height: 100vh;
  padding: 8%;
  padding-top: 42vh;

  @media (max-width: 1000px) {
    width: 40%;
    padding-top: 42vh;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: auto;
    padding: 25% 5%;
    height: 50%;
    text-align: center;
  }

  div {
    color: white;
    font-size: 2rem;
    -webkit-animation: fadein 3s;
    -moz-animation: fadein 3s;
    -ms-animation: fadein 3s;
    -o-animation: fadein 3s;
    animation: fadein 3s;

    @media (max-width: 1000px) {
      font-size: 1.8rem;
    }

    @media (max-width: 800px) {
      font-size: 1.65rem;
    }

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  nav {
    padding-top: 7%;
    a {
      padding: 1.2%;
      img {
        width: 30px;
        &:hover {
          opacity: 0.85;
        }
      }
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes rotation {
    2% {
      transform: rotate(20deg);
    }
    4% {
      transform: rotate(-20deg);
    }
    6% {
      transform: rotate(16deg);
    }
    8% {
      transform: rotate(-16deg);
    }
    10% {
      transform: rotate(12deg);
    }
    12% {
      transform: rotate(-14deg);
    }
    14% {
      transform: rotate(8deg);
    }
    16% {
      transform: rotate(-10deg);
    }
    18% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export default Intro;
