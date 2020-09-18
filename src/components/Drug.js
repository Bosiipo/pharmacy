import React from "react";
import "./Drug.css";

function Drug({ title, image, price, rating }) {
  return (
    <div className="drug">
      <img src={image} alt="" className="drug__image" />
      <div className="drug__info">
        <p> {title}</p>
        <p className="drug__price">
          <small>GHC</small>
          <strong>{price}</strong>
        </p>
        <div className="drug__rating">
          {Array(rating)
            .fill()
            .map((rat, id) => (
              <p key={id}>
                <span role="img" aria-label="star">
                  ⭐️
                </span>
              </p>
            ))}
        </div>
      </div>

      <button className="drug__button">Add to Cart</button>
    </div>
  );
}

export default Drug;
