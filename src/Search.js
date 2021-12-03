import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

function Search() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

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
    </div>
  );
}
export default Search;
