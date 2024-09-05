import Img from "../../assets/images/aboutPortrait.jpg";
import Stripes from "../Shared/Stripes";
import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

type ExperianceCircleProps = {
  title: string;
  company: string;
  dateRange: string;
};

const CircleContainer = styled.div`
  height: 22.5vw;
  width: 22.5vw;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Circle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  cursor: pointer;

  &:before {
    content: "";
    border: 1px solid ${colors.black};
    display: block;
    border-radius: 50%;
    width: 22.5vw;
    height: 22.5vw;
    position: absolute;
    top: -1vh;
    left: 1vw;
    z-index: 1;
  }

  &:after {
    content: "";
    border-radius: 50%;
    display: block;
    background: ${colors.orange};
    width: 22.5vw;
    height: 22.5vw;
    position: absolute;
    top: 0vh;
    left: 0vw;
    z-index: -1;
  }

  &:hover {
    &:before {
      top: 0;
      left: 0;
    }
  }
`;

const Title = styled.p`
  font-family: "Heathergreen";
  color: ${colors.white};
  font-size: 3.25vw;
  width: 60%;
  text-align: center;
  line-height: 1;
  margin-bottom: 16px;
`;

const Company = styled.p`
  font-family: "Inter Bold";
  color: ${colors.white};
  font-size: 1.25vw;
  text-align: center;
  width: 75%;
`;

const DateRange = styled.p`
  color: ${colors.yellow};
  font-family: "Heathergreen";
  font-size: 1.85vw;
`;

export default function ExperienceCircle({
  title,
  company,
  dateRange,
}: ExperianceCircleProps) {
  return (
    <CircleContainer>
      <Circle>
        <Title>{title}</Title>
        <Company>{company}</Company>
        <DateRange>{dateRange}</DateRange>
      </Circle>
    </CircleContainer>
  );
}
