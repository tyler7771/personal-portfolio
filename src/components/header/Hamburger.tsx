import styled, { css, keyframes } from "styled-components";

import { colors } from "../../assets/cssHelpers";

const topClosed = keyframes`
  0% {
    top: 22px;
    transform: rotate(45deg);
  }
  50% {
    top: 22px;
    transform: rotate(0deg);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
  }
`;
const bottomClosed = keyframes`
  0% {
    bottom: 22px;
    transform: rotate(-45deg);
  }
  50% {
    bottom: 22px;
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
const topOpen = keyframes`
  0% {
    top: 0;
    transform: rotate(0);
  }
  50% {
    top: 22px;
    transform: rotate(0);
  }
  100% {
    top: 22px;
    transform: rotate(45deg);
  }
`;
const bottomOpen = keyframes`
  0% {
    bottom: 0;
    transform: rotate(0);
  }
  50% {
    bottom: 22px;
    transform: rotate(0);
  }
  100% {
    bottom: 22px;
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
  width: 80px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-right: 80px;

  span {
    display: block;
    width: 100%;
    border-radius: 3px;
    height: 8px;
    background: ${colors.black};
    transition: 0.3s ease-out;
    position: relative;
    margin-top: 14px;

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
              animation: ease 0.7s ${topOpen} forwards;
            }
            &:nth-child(2) {
              animation: ease 0.7s ${middleOpen} forwards;
            }
            &:nth-child(3) {
              animation: ease 0.7s ${bottomOpen} forwards;
            }
          }
        `
      : css`
          span {
            &:nth-child(1) {
              margin-top: 0;
              animation: ease 0.7s ${topClosed} forwards;
            }
            &:nth-child(2) {
              animation: ease 0.7s ${middleClosed} forwards;
            }
            &:nth-child(3) {
              animation: ease 0.7s ${bottomClosed} forwards;
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
