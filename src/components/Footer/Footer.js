import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrapper,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrapper,
  WebsiteRights,
} from "./FooterStyle";

import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }


  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>My Music</FooterLinkTitle>
              <FooterLink target='_blank' href="https://www.youtube.com/channel/UCmMDM2Ucsr8Kt05ZigOJSmQ">YouTube</FooterLink>
              <FooterLink target='_blank' href="https://zephyris-portfolio-w-app.web.app/music">My Custom Music Player</FooterLink>
              <FooterLink target='_blank' href="https://www.linkedin.com/in/kartik-jha-69165210a/">Testimonials</FooterLink>
              <FooterLink target='_blank' href="https://www.instagram.com/lazy_illiterate_bernard/">Collaborate?</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>My Blogs</FooterLinkTitle>
              <FooterLink target='_blank' href="https://mern-blog-client.web.app/post/6103f78de606fc00ce8423f0">Fantasy</FooterLink>
              <FooterLink target='_blank' href="https://mern-blog-client.web.app/posts">Technology</FooterLink>
              <FooterLink target='_blank' href="https://mern-blog-client.web.app/post/610410709614ad011701cfc4">Non Fiction</FooterLink>
              <FooterLink target='_blank' href="https://mern-blog-client.web.app/post/6103dfc8a27f4c078dbdf574">Historical</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Learn From Kartik</FooterLinkTitle>
              <FooterLink target='_blank' href="https://mern-blog-client.web.app/">Web Development</FooterLink>
              <FooterLink target='_blank' href="https://mern-blog-client.web.app/">Programming</FooterLink>
              <FooterLink target='_blank' href="https://mern-blog-client.web.app/">Why be competitive?</FooterLink>
              <FooterLink target='_blank' href="https://mern-blog-client.web.app/">Have questions?</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>My Interests</FooterLinkTitle>
              <FooterLink target='_blank' href="https://mern-blog-client.web.app/">Virtual Reality</FooterLink>
              <FooterLink target='_blank' href="https://mern-blog-client.web.app/">Blockchain</FooterLink>
              <FooterLink target='_blank' href="https://mern-blog-client.web.app/">Machine Learning</FooterLink>
              <FooterLink target='_blank' href="https://mern-blog-client.web.app/">Neural Link</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/" onClick={toggleHome}>zephyris</SocialLogo>
            <WebsiteRights>
              Zephyris © {new Date().getFullYear()} All rights reserved.{" "}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com/kartik.jha.1217/" target="_blank" aria-label="Facebook">
                <FaFacebook /> 
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/lazy_illiterate_bernard/" target="_blank" aria-label="Instagram">
                <FaInstagram /> 
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/in/kartik-jha-69165210a/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />  
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
