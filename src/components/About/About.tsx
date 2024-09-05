import Img from "../../assets/images/aboutPortrait.jpg";
import Stripes from "../Shared/Stripes";
import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

const AboutContainer = styled.section`
  width: 100%;
  height: 60vw;
  background-color: ${colors.yellow};
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 24vh;
  right: 11.15vw;
  background: ${colors.orange};
  width: 59vw;
  padding: 1vh 23vh 5vh;

  p {
    font-family: "Inter Bold";
    text-align: justify;
    font-size: 25px;
    color: ${colors.black};
  }

  &:after {
    content: "";
    border: 1px solid ${colors.black};
    display: block;
    width: 59vw;
    left: -30px;
    position: absolute;
    bottom: 30px;
    top: -30px;
    z-index: 1;
  }
`;

const PortraitContainer = styled.div`
  position: absolute;
  top: 16vh;
  left: 16vw;
  z-index: 2;
`;

const Portrait = styled.div`
  background-image: url(${Img});
  background-size: cover;
  border-radius: 50%;
  width: 24vw;
  height: 24vw;

  &:before {
    content: "";
    border: 1px solid ${colors.black};
    display: block;
    border-radius: 50%;
    width: 24vw;
    height: 24vw;
    position: absolute;
    top: -1vh;
    left: -4vw;
    z-index: 1;
  }

  &:after {
    content: "";
    border-radius: 50%;
    display: block;
    background: ${colors.orange};
    width: 24vw;
    height: 24vw;
    position: absolute;
    top: 2vh;
    left: -2vw;
    z-index: -1;
  }
`;

const SkillsContainer = styled.div`
  position: absolute;
  left: 29%;
  /* transform: translateX(-50%); */
  top: 60vh;
  width: 50vw;
  display: grid;
  grid-template-areas: "header header header" "left center right" "left center right" "left center right";
`;

const SkillsHeader = styled.div`
  grid-area: header;
  text-align: center;
  font-size: 30px;
  margin-bottom: 16px;
`;

const SkillsRow = styled.div`
  p {
    font-size: 25px;
    font-family: "Inter Bold";
    margin-bottom: 8px;

    &:nth-child(1) {
      grid-area: left;
    }
    &:nth-child(2) {
      grid-area: center;
    }
    &:nth-child(3) {
      grid-area: right;
    }
  }
`;

export default function About() {
  return (
    <AboutContainer id="about">
      <Stripes $width="100%" $color="black" $height="90px" />
      <PortraitContainer>
        <Portrait />
      </PortraitContainer>
      <TextContainer>
        <p>
          I’ve always had a passion for creating things and working to make
          people’s lives better. I love frontend engineering because it combines
          my passions for creating and making things that are going to make
          people's lives better or easier. I was born and raised in the midwest.
          I love making and listening to music, riding and building fixed gear
          bikes, and a great cup of coffee (or a cold beer).
        </p>
      </TextContainer>
      <SkillsContainer>
        <SkillsHeader>I have experience working with:</SkillsHeader>
        <SkillsRow>
          <p>REACT</p>
          <p>JAVASCRIPT</p>
          <p>TYPESCRIPT</p>
        </SkillsRow>
        <SkillsRow>
          <p>DESIGN SYSTEMS</p>
          <p>NEXT.JS</p>
          <p>PLAYWRIGHT</p>
        </SkillsRow>
        <SkillsRow>
          <p>STYLED COMPONENTS</p>
          <p>GRAPHQL</p>
          <p>RUBY ON RAILS</p>
        </SkillsRow>
      </SkillsContainer>
    </AboutContainer>
  );
}
