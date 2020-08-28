import React from "react";
import {
  BannerContainer,
  BackgroundBanner,
  LogoInBanner,
  TitleInBanner,
} from "./styles";
import Logo from "../../assets/images/logo.svg";
import Fundo from "../../assets/images/success-background.svg";
function Banner() {
  return (
    <BannerContainer>
      <BackgroundBanner src={Fundo} alt="Fundo" className="background" />
      <LogoInBanner src={Logo} alt="Proffy" />
      <TitleInBanner>Sua plataforma de estudos online.</TitleInBanner>
    </BannerContainer>
  );
}

export default Banner;
