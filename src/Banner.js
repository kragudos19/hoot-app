import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__serach">
        {showSearch && <Search />}
        <Button
          variant="outlined"
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          className="banner__searchButton"
        >
          {showSearch ? "Search Dates" : "Hide"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out there!</h1>
        <h5>Create memories with friends, family and your pets!</h5>
        <Button varient="outlined">Explore</Button>
      </div>
    </div>
  );
}

export default Banner;
