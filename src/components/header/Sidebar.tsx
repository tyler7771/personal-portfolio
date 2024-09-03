import styled, { css } from "styled-components";

import { colors } from "../../assets/cssHelpers";

const SidebarContainer = styled.div<{ $open: boolean | null }>`
  height: calc(100vh - 185px);
  position: fixed;
  right: 0;
  background: ${colors.yellow};
  transition: 0.75s cubic-bezier(0.36, -0.01, 0, 0.77);
  width: 25vw;
  z-index: 1;

  ${({ $open }) =>
    !$open &&
    css`
      transform: translateX(25vw);
      transition: transform 0.75s cubic-bezier(0.36, -0.01, 0, 0.77);
    `}
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
      <NavLink href="#work" onClick={closeSidebar}>
        Work History
      </NavLink>
      <NavLink href="#about" onClick={closeSidebar}>
        About
      </NavLink>
      <NavLink href="#education" onClick={closeSidebar}>
        Education
      </NavLink>
      <NavLink href="#socials" onClick={closeSidebar}>
        Socials
      </NavLink>
      <NavLink href="#music" onClick={closeSidebar}>
        Music Vibes
      </NavLink>
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
