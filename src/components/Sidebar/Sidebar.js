import React from "react";
import {
  CloseIcon,
  SidebarMenu,
  SidebarWrapper,
  Icon,
  SidebarContainer,
  SidebarRoute,
  SideBtnWrap,
  SidebarLink,
} from "./SidebarStyle";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about"  onClick={toggle} smooth={true} duration="500" spy={true} exact='true' offset={-80}>About</SidebarLink>
          <SidebarLink to="discover"  onClick={toggle} smooth={true} duration="500" spy={true} exact='true' offset={-80}>Discover</SidebarLink>
          <SidebarLink to="services"  onClick={toggle} smooth={true} duration="500" spy={true} exact='true' offset={-80}>Services </SidebarLink>
          <SidebarLink to="contact"  onClick={toggle} smooth={true} duration="500" spy={true} exact='true' offset={-80}>Contact</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/">Get Started!</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
