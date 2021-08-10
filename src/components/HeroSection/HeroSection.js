import React, { useState } from "react";
import Typed from "react-typed";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroH2,
  VideoBg,
} from "./HeroSectionStyle";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonStyle";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay muted loop src={Video} type="video/mp4" />
      </HeroBg>

      <HeroContent>
        <HeroH1>Kartik Jha</HeroH1>
        <HeroH2><Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "Full Stack Developer",
            "Back-end",
            "Front-end",
          ]} 
          typeSpeed={40}
          backSpeed={60}
          loop /> </HeroH2>
           <HeroBtnWrapper>
          <Button style={{ backgroundColor: '#79C500', color: '#010606' }} smooth={true} duration="500" spy={true} exact='true' offset={-80} to="contact" onMouseOver={onHover} onMouseLeave={onHover}>
            Hire Me! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
            
    </HeroContainer>
  );
};

export default HeroSection;
