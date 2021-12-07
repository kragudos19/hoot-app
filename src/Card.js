import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

function Card({ src, name, campsite, attributes, index }) {
  return (
    <div className="card" key={`${index}-${name}`}>
      <div className="card__img">
        <img src={src} alt={`Facility Name - ${name}`} />
      </div>
      <div className="card__info">
        <h2>{name}</h2>
        <h4>{campsite}</h4>
        {attributes.map((attr, idx) => {
          return (
            <p
              key={`${campsite}-${attr.AttributeID}-${idx}`}
            >{`${attr.AttributeName}:  ${attr.AttributeValue}`}</p>
          );
        })}
      </div>
    </div>
  );
}

Card.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  attributes: PropTypes.array,
  campsite: PropTypes.string,
  index: PropTypes.string,
};

export default Card;
