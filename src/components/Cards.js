import React from "react";
import CardItem from "./CardItem";
import "../styles/css/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Follow us @BAEAST.PH</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/ba-img-1.jpg"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
              label="Skill"
              path="/careers"
            />
            <CardItem
              src="images/ba-img-2.jpg"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
              label="Collaboration"
              path="/careers"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/ba-img-3.png"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
              label="Art"
              path="/careers"
            />
            <CardItem
              src="images/ba-img-4.png"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
              label="Vision"
              path="/careers"
            />
            <CardItem
              src="images/ba-img-5.png"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
              label="Design"
              path="/careers"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
