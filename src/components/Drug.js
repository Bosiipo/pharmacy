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
        <p className="product__price">
          <small>GHC</small>
          <strong>12</strong>
        </p>
      </div>
      <div className="drug__rating">
        <p>⭐️</p>
        <p>⭐️</p>
        <p>⭐️</p>
      </div>
    </div>
  );
}

export default Drug;
