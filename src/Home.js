import React, { useState, useEffect } from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import logo from "../public/logo_hoot.png";

function Home() {
  const [campsites, setCampsites] = useState({});

  async function getCampsites() {
    const campsiteList = {};

    const response = await fetch(
      `https://ridb.recreation.gov/api/v1/campsites?limit=100&offset=0&apikey=6b9e92bb-bbfa-44ec-9b15-5195fce7f955`
    );
    await response.json().then((data) => {
      data.RECDATA.map((item) => {
        campsiteList[item.CampsiteID] = {
          name: item.CampsiteName,
          src: item.ENTITYMEDIA.length > 0 ? item.ENTITYMEDIA[0].URL : logo,
          campsite: item.Loop,
          attributes: item.ATTRIBUTES,
        };
      });
      console.log(campsiteList);
      setCampsites(campsiteList);
    });
  }

  useEffect(() => {
    getCampsites();
  }, []);

  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        {Object.keys(campsites).map((campsiteID) => {
          return (
            <Card
              key={`card-${campsiteID}`}
              index={campsiteID}
              name={campsites[campsiteID].CampsiteName}
              campsite={campsites[campsiteID].Loop}
              src={campsites[campsiteID].src}
              attributes={campsites[campsiteID].attributes}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
// TODO: add a carousel of all images
