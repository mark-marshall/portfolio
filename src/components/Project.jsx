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
      <a
        href={siteLink ? siteLink : dlLink}
        target={siteLink ? '_blank' : null}
        rel={siteLink ? 'noopener noreferrer' : null}
        download={siteLink ? false : true}
      >
        <ImageDiv src={src} />
      </a>
      <InteriorStyled>
        <h1>{title}</h1>
        <div>{desc}</div>
        <div className="stack">{stack}</div>
        <nav>
          {siteLink ? (
            <a href={siteLink} target="_blank" rel="noopener noreferrer">
              Site
            </a>
          ) : (
            <></>
          )}
          {githubLink ? (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          ) : (
            <></>
          )}
          {demoLink ? (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          ) : (
            <></>
          )}
          {phLink ? (
            <a href={phLink} target="_blank" rel="noopener noreferrer">
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
  padding: 1% 0;

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
    color: #008080;
    text-decoration: none;
    padding-right: 5%;
    font-weight: bold;

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
