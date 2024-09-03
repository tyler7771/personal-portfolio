import styled, { keyframes } from "styled-components";

import Hamburger from "./Hamburger";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import Sidebar from "./Sidebar";
import Stripes from "../Shared/Stripes";
import { colors } from "../../assets/cssHelpers";
import { useState } from "react";

const HeaderContainer = styled.div`
  height: 185px;
  width: 100vw;
  background: ${colors.yellow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
  box-shadow: 0 2px 10px -2px ${colors.black};
`;

const logoMove = keyframes`
  from {
    top: 100%;
  }
  to {
    top: 90px
  }
  `;

const StyledLogo = styled(Logo)`
  height: 135px;
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 1;
  transform: translateY(-50%) translateX(-50%);

  animation: ${logoMove} linear forwards;
  animation-timeline: scroll();
  animation-range: calc(90vh - 185px) calc(100vh - 185px);
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean | null>(null);

  return (
    <>
      <HeaderContainer>
        <Stripes $width="22%" $color="white">
          <StyledLogo />
        </Stripes>
        <div
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <Hamburger open={menuOpen} />
        </div>
      </HeaderContainer>
      <Sidebar open={menuOpen} closeSidebar={() => setMenuOpen(false)} />
    </>
  );
}
