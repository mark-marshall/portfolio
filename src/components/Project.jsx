import React from 'react';
import styled from 'styled-components';

const Project = ({
  title,
  desc,
  stack,
  src,
  siteLink,
  githubLink,
  demoLink,
  phLink,
  dlLink,
}) => {
  return (
    <StyledProject>
      <ImageDiv src={src} />
      <InteriorStyled>
        <h1>{title}</h1>
        <div>{desc}</div>
        <div className="stack">{stack}</div>
        <nav>
          {siteLink ? (
            <a href={siteLink} target="_blank">
              Site
            </a>
          ) : (
            <></>
          )}
          {githubLink ? (
            <a href={githubLink} target="_blank">
              Github
            </a>
          ) : (
            <></>
          )}
          {demoLink ? (
            <a href={demoLink} target="_blank">
              Demo
            </a>
          ) : (
            <></>
          )}
          {phLink ? (
            <a href={phLink} target="_blank">
              Product Hunt
            </a>
          ) : (
            <></>
          )}
          {dlLink ? (
            <a href={dlLink} download>
              Download
            </a>
          ) : (
            <></>
          )}
        </nav>
      </InteriorStyled>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  width: 46%;
  height: 50%;
  padding: 3% 0;

  @media (max-width: 1200px) {
    padding: 8% 0;
  }

  @media (max-width: 700px) {
    width: 90%;
    margin: auto;
    padding: 5% 0;
  }

  h1 {
    font-size: 1.2rem;
    padding-top: 2%;
    padding-bottom: 4.5%;
    font-weight: bold;
  }

  .stack {
    padding-top: 4%;
  }

  nav {
    padding-top: 5%;
  }

  a {
    color: #00d2be;
    text-decoration: none;
    padding-right: 5%;

    &:hover {
      color: black;
    }
  }
`;

const ImageDiv = styled.div`
  padding: 27%;
  border-radius: 1px;
  background-image: url(${props => props.src});
  background-size: cover;
`;

const InteriorStyled = styled.div`
  padding: 2.5%;
  line-height: 1.4;
  font-size: 0.95rem;
`;

export default Project;
