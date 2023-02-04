import React from "react";
import { useNavigate } from "react-router-dom";
import { FlexBoxCenter } from "../../styledComponents/FlexBoxCenter";
import { LoginBtnHome } from "../../styledComponents/LoginBtnHome";
import { LogoCafeteria } from "../../styledComponents/LogoCafeteria";

import LogoCafeteriaImg from '../../../src/assets/logos/logo_cafeteria.png'
import { TitleWelcome } from "../../styledComponents/TitleWelcome";



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