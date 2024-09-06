import styled, { css, keyframes } from "styled-components";

import { colors } from "../../assets/cssHelpers";

const topClosed = (top: string) => keyframes`
  0% {
    top: ${top};
    transform: rotate(45deg);
  }
  50% {
    top: ${top};
    transform: rotate(0deg);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
  }
`;
const bottomClosed = (bottom: string) => keyframes`
  0% {
    bottom: ${bottom};
    transform: rotate(-45deg);
  }
  50% {
    bottom: ${bottom};
    transform: rotate(0);
  }
  100% {
    bottom: 0;
    transform: rotate(0);
  }
`;
const middleClosed = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }`;
const topOpen = (top: string) => keyframes`
  0% {
    top: 0;
    transform: rotate(0);
  }
  50% {
    top: ${top};
    transform: rotate(0);
  }
  100% {
    top: ${top};
    transform: rotate(45deg);
  }
`;
const bottomOpen = (bottom: string) => keyframes`
  0% {
    bottom: 0;
    transform: rotate(0);
  }
  50% {
    bottom: ${bottom};
    transform: rotate(0);
  }
  100% {
    bottom: ${bottom};
    transform: rotate(-45deg);
  }
`;
const middleOpen = keyframes`
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
`;

const Menu = styled.button<{ $open: boolean | null }>`
  width: 4.167vw;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-right: 4.167vw;

  @media (max-width: 932px) {
    width: 40px;
    margin-right: 40px;
  }

  span {
    display: block;
    width: 100%;
    border-radius: 3px;
    height: 0.42vw;
    max-height: 8px;
    min-height: 4px;
    background: ${colors.black};
    transition: 0.3s ease-out;
    position: relative;
    margin-top: 0.729vw;

    @media (max-width: 932px) {
      margin-top: 6.75px;
    }

    &:nth-child(1) {
      margin-top: 0;
    }
  }

  ${({ $open }) => {
    if ($open === null) return ``;

    return $open
      ? css`
          span {
            &:nth-child(1) {
              animation: ease 0.7s ${topOpen("1.146vw")} forwards;

              @media (max-width: 932px) {
                animation: ease 0.7s ${topOpen("10.681px")} forwards;
              }
            }
            &:nth-child(2) {
              animation: ease 0.7s ${middleOpen} forwards;
            }
            &:nth-child(3) {
              animation: ease 0.7s ${bottomOpen("1.146vw")} forwards;

              @media (max-width: 932px) {
                animation: ease 0.7s ${bottomOpen("10.681px")} forwards;
              }
            }
          }
        `
      : css`
          span {
            &:nth-child(1) {
              margin-top: 0;
              animation: ease 0.7s ${topClosed("1.146vw")} forwards;

              @media (max-width: 932px) {
                animation: ease 0.7s ${topClosed("10.681px")} forwards;
              }
            }
            &:nth-child(2) {
              animation: ease 0.7s ${middleClosed} forwards;
            }
            &:nth-child(3) {
              animation: ease 0.7s ${bottomClosed("1.146vw")} forwards;

              @media (max-width: 932px) {
                animation: ease 0.7s ${bottomClosed("10.681px")} forwards;
              }
            }
          }
        `;
  }}

  &:hover {
    span {
      opacity: 0.7;
    }
  }
`;

export default function Hamburger({ open }: { open: boolean | null }) {
  return (
    <Menu $open={open}>
      <span />
      <span />
      <span />
    </Menu>
  );
}
