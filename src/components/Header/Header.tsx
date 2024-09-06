import styled, { keyframes } from "styled-components";

import Hamburger from "./Hamburger";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import Sidebar from "./Sidebar";
import Stripes from "../Shared/Stripes";
import { colors } from "../../assets/cssHelpers";
import { useState } from "react";

const HeaderContainer = styled.div`
  height: 9.65vw;
  min-height: 90px;
  max-height: 180px;
  width: 100vw;
  background: ${colors.yellow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px -2px ${colors.black};
`;

const logoMove = keyframes`
  from {
    top: 100%;
  }
  to {
    top: 50%;
  }
  `;

const StyledLogo = styled(Logo)`
  height: 7vw;
  min-height: 65px;
  max-height: 135px;
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 101;
  transform: translateY(-50%) translateX(-50%);

  animation: ${logoMove} linear forwards;
  animation-timeline: scroll();
  animation-range: calc(90vh - 9.65vw) calc(100vh - 9.65vw);
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean | null>(null);

  return (
    <>
      <HeaderContainer>
        <Stripes $width="22%" $color="white" $isHeader>
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
