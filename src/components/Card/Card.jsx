import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ title, imageUrl, id }) => {
  const buttonClickHandler = () => {
    console.log(title);
  };
  return (
    <div className="cardWrapper">
      <div className="img-center">
        <img className="cardImg" src={imageUrl} alt="" />
      </div>
      <h2 className="cardTitle">{title}</h2>
      <div className="btnCtrl">
        <Link to={`/foodDetails/${id}`}>
          <button className="cardBtn" onClick={buttonClickHandler}>
            Watch Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
