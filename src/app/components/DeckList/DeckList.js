"use client";

import React from "react";

const DeckList = ({ cards }) => {
  return (
    <div>
      {cards.length > 0 ? (
        <ul>
          {cards.map((deckCard, index) => (
            <li key={index}>{deckCard.name}</li>
          ))}
        </ul>
      ) : (
        <p>Your deck is empty.</p>
      )}
    </div>
  );
};
export default DeckList;
