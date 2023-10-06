"use client";

import React, { useState } from "react";
import "./Search.css";
import { CardData } from "@/app/components/CardData/CardData";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [card, setCard] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    setTimeout(async () => {
      const response = await fetch(
        `https://api.scryfall.com/cards/named?fuzzy=${searchQuery}`,
      );

      const data = await response.json();

      if (data.status === 404) {
        setCard(null);
        setErrorMessage(data.details);
      } else {
        setCard(data);
      }
      console.log(data);
    }, 75);
  };

  return (
    <div className="search-container">
      <div className="input-button-container">
        <input
          type="text"
          placeholder="Search Card"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button>Add to Deck</button>
        <button>Remove from Deck</button>
      </div>
      <div>{card ? <CardData card={card} /> : <p>{errorMessage}</p>}</div>
    </div>
  );
};
