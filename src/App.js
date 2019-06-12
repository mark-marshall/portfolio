import React from 'react';
import styled from 'styled-components';

import Intro from './views/Intro';
import Projects from './views/Projects';

const App = () => {
  return (
    <StyledApp>
      <Intro />
      <Projects />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export default App;
