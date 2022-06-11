import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/book-4.gif";
// import logo from "../../../images/logo.png";

const options = {
  burgerColor: "gray",
  burgerColorHover: "gray",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  logoAnimationTime: "0.3",
  logoTransition: "0.1",
  nav1Transition: "0.1",
  nav2Transition: "0.1",
  nav3Transition: "0.1",
  nav4Transition: "0.1",
  link1Transition: "0.2",
  link2Transition: "0.2",
  link3Transition: "0.2",
  link4Transition: "0.2",
  nav1alignItems: "top",
};

const Header = () => {
  return <ReactNavbar style={{ height: '200px'}} {...options} />;
};

export default Header;
