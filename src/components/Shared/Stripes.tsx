import styled, { css } from "styled-components";

import { colors } from "../../assets/cssHelpers";

type Colors = keyof typeof colors;

const Stripes = styled.div<{
  $width: string;
  $color: Colors;
  $height?: string;
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
`;

export default Stripes;
