import HomeText from "./HomeText";
import Portrait from "../../assets/images/Portrait.png";
import styled from "styled-components";

const PortraitContainer = styled.div`
  height: calc(100vh - 185px);
  width: 100%;
  position: relative;
`;

const StyledPortait = styled.img`
  filter: brightness(200%);
  max-height: calc(100% - 98px);
  align-self: flex-end;
  position: absolute;
  bottom: 0;
  right: 22%;
`;

export default function Header() {
  return (
    <PortraitContainer>
      <StyledPortait src={Portrait} />
      <HomeText />
    </PortraitContainer>
  );
}
