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

  @media (max-width: 799px) {
    height: 35vw;
    width: 35vw;
  }

  @media (max-width: 500px) {
    height: 60vw;
    width: 60vw;
    margin-bottom: 16px;
  }
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
    border: 1px solid ${colors.black};
    top: -1vh;
    left: 1vw;
    z-index: 1;
  }

  &:after {
    background: ${colors.orange};
    top: 0vh;
    left: 0vw;
    z-index: -1;
  }

  &:before,
  &:after {
    content: "";
    display: block;
    border-radius: 50%;
    height: 22.5vw;
    width: 22.5vw;
    position: absolute;
  }

  &:hover {
    &:before {
      top: 0;
      left: 0;
    }
  }

  @media (max-width: 799px) {
    &:before,
    &:after {
      height: 35vw;
      width: 35vw;
    }
  }

  @media (max-width: 500px) {
    &:before,
    &:after {
      height: 60vw;
      width: 60vw;
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

  @media (max-width: 1399px) {
    font-size: 4vw;
  }

  @media (max-width: 799px) {
    font-size: 6.5vw;
  }

  @media (max-width: 500px) {
    font-size: 11vw;
  }
`;

const Company = styled.p`
  font-family: "Inter Bold";
  color: ${colors.white};
  font-size: 1.25vw;
  text-align: center;
  width: 75%;

  @media (max-width: 1399px) {
    font-size: 1.5vw;
  }

  @media (max-width: 799px) {
    font-size: 2vw;
  }

  @media (max-width: 500px) {
    font-size: 3.5vw;
  }
`;

const DateRange = styled.p`
  color: ${colors.yellow};
  font-family: "Heathergreen";
  font-size: 1.85vw;

  @media (max-width: 1399px) {
    font-size: 2.5vw;
  }

  @media (max-width: 799px) {
    font-size: 3.5vw;
  }

  @media (max-width: 500px) {
    font-size: 6vw;
  }
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
