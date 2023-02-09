import React from "react";
import { useNavigate } from "react-router-dom";
import { FlexBoxCenter } from "../../../Presentation/styledComponents/FlexBoxCenter";
import { LoginBtnHome } from "../../../Presentation/styledComponents/LoginBtnHome";
import { LogoCafeteria } from "../../../Presentation/styledComponents/LogoCafeteria";

import LogoCafeteriaImg from '../../../assets/logos/logo_cafeteria.png'
import { TitleWelcome } from "../../../Presentation/styledComponents/TitleWelcome";



const HomePage = () => {
  // navigate: function
  const navigate = useNavigate();


  return (
    <FlexBoxCenter>
      <LogoCafeteria src={LogoCafeteriaImg} alt="logo" />
      <TitleWelcome>Seja bem-vindo(a) ao CafeteriaJS!</TitleWelcome>
      <LoginBtnHome onClick={() => navigate('/login')}>Login</LoginBtnHome>
    </FlexBoxCenter>
  )
}

export default HomePage;