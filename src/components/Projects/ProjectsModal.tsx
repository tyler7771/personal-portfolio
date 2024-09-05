import Basketball from "../../assets/images/Basketball.jpg";
import Beer from "../../assets/images/ChristmasBeer.jpg";
import Modal from "../Shared/Modal";
import NeverTellMeTheOdds from "../../assets/images/NeverTellMeTheOdds.png";
import Synth from "../../assets/images/Synth.png";
import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

export type ProjectTypes = "beers" | "odds" | "synth" | "nba" | null;

type ProjectModalTypes = {
  isOpen: boolean;
  close: () => void;
  project: ProjectTypes;
};

const projectInfo = {
  beers: {
    title: "12 Beers of Christmas",
    img: Beer,
    description:
      "Every year with friends I run a Secret Santa where we give each other a 12 day advent calendar of beers. I looked around for a Secret Santa generator I liked and could never find one that didn't require me to collect emails and also didn't show me who \"drew\" me.\nI wrote this to take people's beer preferances, wouldn't assign someone to buy for the person they bought for last year, and would then generate a base64 encoded link that I could text them!\nI keep track of this data every year via a spreedsheet so I created the ability to upload and export all of that data via CSV as well.",
    prodLink: "https://twelvebeersofchristmas.holiday/",
    gitLink: "https://github.com/tyler7771/12-Beers-of-Christmas",
  },
  odds: {
    title: "Never Tell Me The Odds",
    img: NeverTellMeTheOdds,
    description:
      "A fun little project I did at the end of my time at App Academy!\nUsers fly the Millennium Falcon through an astroid field in this fun, simple, and addicting game. Press the space bar to make the ship go up and release and the ship will fall. The game ends when they crash their ship into an object or the boundaries of the screen.\nThe game is made using vanilla JavaScript. It tracks the score over the course of the game and store's the user's high score for the life of the window. As the user's score gets higher the astroids travel faster towards the ship making the game more difficult.",
    prodLink: "http://nevertellmetheodds.us/",
    gitLink: "https://github.com/tyler7771/NeverTellMeTheOdds",
  },
  synth: {
    title: "Synthaseizure",
    img: Synth,
    description:
      "A fun little project from my time at App Academy!\nThe project was to create a keyboard based synth. My partner and I had a bit of extra time at the end so we decided to add a feature where the background color of the app changed on every key press.",
    prodLink: "https://tyler7771.github.io/Synthaseizure/",
    gitLink: "https://github.com/tyler7771/Synthaseizure",
  },
  nba: {
    title: "NBA Compare",
    img: Basketball,
    description:
      "Started as coding challenge, turned into a fun experiment with sagas and playing with graphs!\nUtilizes the Ball Don't Lie API for player data and then uses an NBA color and NBA Logo API to theme the chart after the team that an play is associated with. ",
    prodLink: "https://tyler7771.github.io/nba-compare/",
    gitLink: "https://github.com/tyler7771/nba-compare",
  },
};

const BodyContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  border-radius: 50%;
  margin-bottom: 16px;
  object-fit: cover;
  width: 100%;
`;

const Button = styled.a`
  width: 100%;
  border: none;
  background-color: ${colors.yellow};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 30px;
  color: ${colors.white};
  text-decoration: none;
  margin-top: 16px;
  box-shadow: 0px 0.5px 0.5px 0px rgba(0, 0, 0, 16%),
    0px 0px 8px 0px rgba(0, 0, 0, 4%);

  &:hover {
    filter: brightness(95%);
  }
`;

const DescriptionContainer = styled.div`
  padding-left: 24px;
  width: 75%;
`;

const StyledDescription = styled.p`
  font-family: "Inter Bold";
  color: ${colors.black};
  font-size: 20px;
  margin-bottom: 16px;
`;

export default function ProjectModal({
  isOpen,
  close,
  project,
}: ProjectModalTypes) {
  if (project === null) return null;

  const { title, img, description, prodLink, gitLink } = projectInfo[project];
  return (
    <Modal isOpen={isOpen} onClose={close} title={title}>
      <BodyContainer>
        <ImageContainer>
          <Image src={img} />
          <Button href={prodLink} target="_blank">
            View
          </Button>
          <Button href={gitLink} target="_blank">
            Github
          </Button>
        </ImageContainer>
        <DescriptionContainer>
          {description.split("\n").map((el, i) => (
            <StyledDescription key={i}>{el}</StyledDescription>
          ))}
        </DescriptionContainer>
      </BodyContainer>
    </Modal>
  );
}
