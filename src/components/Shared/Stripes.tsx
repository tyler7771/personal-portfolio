import styled, { css } from "styled-components";

import { colors } from "../../assets/cssHelpers";

type Colors = keyof typeof colors;

const Stripes = styled.div<{
  $width: string;
  $color: Colors;
  $height?: string;
  $isHeader?: boolean;
}>`
  height: ${({ $height }) => $height || "100%"};
  width: ${({ $width }) => $width};
  ${({ $color }) =>
    css`
      background-image: linear-gradient(
        -45deg,
        transparent 25%,
        ${colors[$color]} 25%,
        ${colors[$color]} 50%,
        transparent 50%,
        transparent 75%,
        ${colors[$color]} 75%,
        ${colors[$color]}
      );
    `}
  background-size: 96px 96px;
  position: relative;

  @media (max-width: 600px) {
    background-size: 50px 50px;
    ${({ $isHeader }) =>
      $isHeader
        ? css`
            width: 30%;
          `
        : css`
            @media (max-width: 600px) {
              height: 50px;
            }
          `}
  }
`;

export default Stripes;
