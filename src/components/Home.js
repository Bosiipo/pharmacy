import React from "react";
import "./Home.css";
import Drug from "./Drug";

function Home() {
  return (
    <div class="home">
      <div className="home__container">
        <img
          src="https://images.pexels.com/photos/3882464/pexels-photo-3882464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Drug />
          <Drug />
        </div>
        <div className="home__row">
          <Drug />
          <Drug />
          <Drug />
        </div>
        <div className="home__row">
          <Drug />
        </div>
      </div>
    </div>
  );
}

export default Home;
