import React from "react";
import "./CardData.css";

export const CardData = ({ card }) => {
  if (!card) {
    return null;
  }

  return (
    <div>
      <div className="card-data-container">
        <div className="card-image-container">
          <img src={card.image_uris.normal} alt="" />
        </div>
        <p>
          {" "}
          <span className="card-data-title">Card Name: </span>
          {card.name}
        </p>
        <p>
          {" "}
          <span className="card-data-title">Card Type: </span>
          {card.type_line}
        </p>
        <p>
          {" "}
          <span className="card-data-title">Mana Cost: </span>
          {card.mana_cost}
        </p>
        <p>
          {" "}
          <span className="card-data-title">Rarity: </span>
          {card.rarity}
        </p>
        <p>
          {" "}
          <span className="card-data-title">Power / Toughness: </span>
          {card.power} / {card.toughness}
        </p>
        <p>
          {" "}
          <span className="card-data-title">Oracle Text: </span>
          {card.oracle_text}
        </p>
        <p>
          {" "}
          <span className="card-data-title">Flavor Text: </span>
          <span className="flavor-text">{card.flavor_text}</span>
        </p>
        <p>
          {" "}
          <span className="card-data-title">Set: </span>
          {card.set_name}
        </p>
      </div>
    </div>
  );
};
