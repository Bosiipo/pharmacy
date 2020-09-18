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
          <Drug
            id={111}
            title="Panadol Extra"
            price={12.0}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTa17jKXmeqNMYBYTQnabvKvlefUGadudWUpA&usqp=CAU"
          />
          <Drug
            id={222}
            title="Paracetamol"
            price={9.0}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoD55cLpaxqJWceeF0L6poIoNqUkkDeWW1YA&usqp=CAU"
          />
        </div>
        <div className="home__row">
          <Drug
            id={333}
            title="Procold"
            price={9.0}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3Xu56nfcb-avjf_rhP3JAdJNoGjsKvjFEkQ&usqp=CAU"
          />
          <Drug
            id={444}
            title="Multivite"
            price={8.0}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQh1AM02h3mXEdmTvZ1zSfG6fUCYgq5t8rRYw&usqp=CAU"
          />
          <Drug
            id={555}
            title="Blood Tonic"
            price={11.0}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSfYa7HZKzepAAoxGaGoK6qer1jOGP_nLWRQ&usqp=CAU"
          />
        </div>
        <div className="home__row">
          <Drug
            id={606}
            title="Vitamin c"
            price={9.0}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUW3p0z9mGJ0wVGfg6ZRMqtsyCI7VGHWfpmA&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
