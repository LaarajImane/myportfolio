import styled from "styled-components";
import LogoImg from "../../images/Logo.png";
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from '../HeroSection/HeroStyle'

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const LogoIcon = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const LogoText = styled.span`
  
`;

const Logo = () => {
    return (
        <LogoContainer>
            <LogoIcon src={LogoImg} alt="Logo" />
        </LogoContainer>
    );
};

export default Logo;
