import styled, { css, keyframes } from "styled-components";

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
  z-index: 101;
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

const StyledLogo = styled(Logo)<{ $menuOpen: boolean | null }>`
  height: 7vw;
  min-height: 65px;
  max-height: 135px;
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 102;
  transform: translateY(-50%) translateX(-50%);

  animation: ${logoMove} linear forwards;
  animation-timeline: scroll();
  animation-range: calc(90vh - 9.65vw) calc(100vh - 9.65vw);
  transition: top 0.75s cubic-bezier(0.36, -0.01, 0, 0.77);

  ${({ $menuOpen }) =>
    $menuOpen &&
    css`
      @media (max-width: 499px) {
        top: 50%;
      }
    `}
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean | null>(null);

  return (
    <>
      <HeaderContainer>
        <Stripes $width="22%" $color="white" $isHeader>
          <StyledLogo $menuOpen={menuOpen} />
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
