import React from "react";
import "./Drug.css";

function Drug() {
  return (
    <div className="drug">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTa17jKXmeqNMYBYTQnabvKvlefUGadudWUpA&usqp=CAU"
        alt=""
        className="drug__image"
      />
      <div className="drug__info">
        <p> Panadol Extra</p>
        <p className="drug__price">
          <small>GHC</small>
          <strong>12</strong>
        </p>
        <div className="drug__rating">
          <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
          </p>
          <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
          </p>
          <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
          </p>
        </div>
      </div>

      <button className="drug__button">Add to Cart</button>
    </div>
  );
}

export default Drug;
