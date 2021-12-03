import React from "react";
import "./Header.css";
import logo from "../public/logo_hoot.png";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <img className="header__icon" src={logo} alt={logo}></img>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>We want to help you plan your next outdoor adventure!</p>
        <LanguageIcon />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
