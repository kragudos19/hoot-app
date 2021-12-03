import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import Home from "./Home";
import Header from "./Header";
import "./App.css";

function App() {
  const [campsites, setCampsites] = useState([]);
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    getFacilities();
  }, []);

  async function getFacilities() {
    let facilitiesList = [];
    const response = await fetch(
      "https://ridb.recreation.gov/api/v1/facilities?limit=50&offset=0&state=CO,,&radius=50&activity=&apikey=6b9e92bb-bbfa-44ec-9b15-5195fce7f955"
    );

    if (response.ok) {
      const json = await response.json();
      json.RECDATA.map((item) => {
        facilitiesList.push(item.FacilityName);
      });
      setFacilities(facilitiesList);
      console.log(facilities);
    } else {
      console.log(response.status);
    }
  }

  return (
    <div>
      <Header />
      <Home />
      {/* Home */}
      {/*Header*/}
      {/*Banner*/}
      {/*Cards*/}
      {/*Footer*/}
      {/*Banner*/}
      {/*SearchPage*/}
    </div>
  );
}

export default App;
// ReactDom.render(<App />, document.getElementById("root"));
