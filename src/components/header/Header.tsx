import Hamburger from "./Hamburger";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import Sidebar from "./Sidebar";
import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";
import { useState } from "react";

const HeaderContainer = styled.div`
  height: 185px;
  background: ${colors.yellow};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Stripes = styled.div`
  height: 100%;
  width: 22%;
  background-image: linear-gradient(
    -45deg,
    transparent 25%,
    ${colors.white} 25%,
    ${colors.white} 50%,
    transparent 50%,
    transparent 75%,
    ${colors.white} 75%,
    ${colors.white}
  );
  background-size: 96px 96px;
  position: relative;
`;

const StyledLogo = styled(Logo)`
  height: 135px;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateY(-50%) translateX(-50%);
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean | null>(null);

  return (
    <>
      <HeaderContainer>
        <Stripes>
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
      <Sidebar open={menuOpen} />
    </>
  );
}
