import styled, { css } from "styled-components";

import { colors } from "../../assets/cssHelpers";

const SidebarContainer = styled.div<{ $open: boolean | null }>`
  height: calc(100vh - 9.65vw);
  position: fixed;
  right: 0;
  top: 9.65vw;
  background: ${colors.yellow};
  transition: 0.75s cubic-bezier(0.36, -0.01, 0, 0.77);
  width: 25vw;
  z-index: 100;
  box-shadow: -2px 9px 10px -2px ${colors.black};

  ${({ $open }) =>
    !$open &&
    css`
      box-shadow: none;
      transform: translateX(25vw);
      transition: transform 0.75s cubic-bezier(0.36, -0.01, 0, 0.77);

      @media (max-width: 1199px) {
        transform: translateX(35vw);
      }

      @media (max-width: 799px) {
        transform: translateX(50vw);
      }

      @media (max-width: 499px) {
        transform: translateY(-100vh);
      }
    `}

  @media (max-width: 1199px) {
    width: 35vw;
  }

  @media (max-width: 799px) {
    width: 50vw;
  }

  @media (max-width: 499px) {
    width: 100vw;
  }

  @media (max-width: 932px) {
    top: 90px;
    height: calc(100vh - 90px);
  }
`;

const NavLink = styled.a`
  font-family: "Inter";
  display: block;
  font-size: 30px;
  width: 100%;
  margin: 0px auto;
  background: transparent;
  border: none;
  padding: 20px 3vw;
  text-align: left;
  cursor: pointer;
  color: ${colors.black};
  text-decoration: none;

  @media (max-width: 799px) {
    padding-left: 5vw;
  }

  @media (max-width: 499px) {
    padding-left: 10vw;
  }

  &:hover {
    background-color: rgba(225, 225, 225, 0.6);
  }
`;

export default function Sidebar({
  open,
  closeSidebar,
}: {
  open: boolean | null;
  closeSidebar: () => void;
}) {
  return (
    <SidebarContainer $open={open}>
      <NavLink href="#" onClick={closeSidebar}>
        Home
      </NavLink>
      <NavLink href="#projects" onClick={closeSidebar}>
        Projects
      </NavLink>
      <NavLink href="#about" onClick={closeSidebar}>
        About
      </NavLink>
      <NavLink href="#work" onClick={closeSidebar}>
        Work History
      </NavLink>
      <NavLink href="#education" onClick={closeSidebar}>
        Education
      </NavLink>
      <NavLink href="#socials" onClick={closeSidebar}>
        Socials
      </NavLink>
      {/* <NavLink href="#music" onClick={closeSidebar}>
        Music Vibes
      </NavLink> */}
      <NavLink href="#footer" onClick={closeSidebar}>
        Contact
      </NavLink>
      <NavLink
        href="https://drive.google.com/file/d/1X6xpQRq7MB2UsT2uAayAwgrP_xOckueb/view?usp=sharing"
        target="_blank"
      >
        Resume
      </NavLink>
    </SidebarContainer>
  );
}
