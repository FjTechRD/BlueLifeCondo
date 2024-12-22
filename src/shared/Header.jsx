import React from "react";
import HeaderMobile from "../components/Header/HeaderMobile";
import HeaderDesktop from "../components/Header/HeaderDesktop";
import useWindowSize from "../components/Header/useWindowSize";

const Header = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  return <header>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</header>;
};

export default Header;
