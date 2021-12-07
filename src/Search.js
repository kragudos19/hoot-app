import React, { useState } from "react";
import { Button } from "react-dom";
import "./Search.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // from the docs
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // from the docs
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>Pets</h2>
      <input min={0} defaultValue={2} type="number" />
    </div>
  );
}

export default Search;
