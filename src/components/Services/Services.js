import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesStyle";
import Icon1 from "../../images/icon1.svg";
import Icon2 from "../../images/icon2.svg";
import Icon3 from "../../images/icon3.svg";
import Icon4 from "../../images/icon4.svg";


const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>My Tech Stack</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>MongoDb</ServicesH2>
          <ServicesP>
          NoSQL Database
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Express JS</ServicesH2>
          <ServicesP>
          Node.js web application framework
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>React JS</ServicesH2>
          <ServicesP>
          A JavaScript library for building user interfaces
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Node JS</ServicesH2>
          <ServicesP>
          Node.js® is a JavaScript runtime built on Chrome's V8
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
