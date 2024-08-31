import styled, { keyframes } from "styled-components";

import React from "react";
import logo from "./logo.svg";

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Spin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${Spin} infinite 20s linear;
`;

const Link = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
