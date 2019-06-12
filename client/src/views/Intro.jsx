import React from 'react';
import styled from 'styled-components';

import gh from '../img/gh.png';
import ln from '../img/ln.png';
import gm from '../img/gm.png';

const Intro = () => {
  return (
    <StyledIntro>
      <div>
        <span role="img" aria-label="wave">
          👋
        </span>{' '}
        I'm Mark. I'm interested in web projects that empower good people to do
        good things.
      </div>
      <nav>
        <a href="https://github.com/mark-marshall" target="_blank">
          <img src={gh} />
        </a>
        <a
          href="https://www.linkedin.com/in/mark-marshall-dev/"
          target="_blank"
        >
          <img src={ln} />
        </a>
        <a href="mailto:mark.marshallgp@gmail.com">
          <img src={gm} />
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
    padding: 8% 6%;
    padding-top: 42vh;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: auto;
    padding: 8% 8% 3% 8%;
    height: 30vh;
    text-align: center;
  }

  div {
    color: white;
    font-size: 2rem;
    -webkit-animation: fadein 2s;
    -moz-animation: fadein 2s;
    -ms-animation: fadein 2s;
    -o-animation: fadein 2s;
    animation: fadein 2s;

    @media (max-width: 1000px) {
      font-size: 1.8rem;
    }

    @media (max-width: 800px) {
      font-size: 1.6rem;
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
    from { opacity: 0; }
    to   { opacity: 1; }
}

@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
`;

export default Intro;
