"use client";

import React, { useState } from "react";
import "./Search.css";
import Button from "@/app/components/Button/Button";
import { Deck } from "@/app/components/Deck/Deck";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [card, setCard] = useState(null);
  const [myDeck, setDeck] = useState(null);

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

  const handleCreateDeck = () => {
    const newDeck = createDeck("MyDeck");
    setDeck(newDeck);
  };

  const handleAddToDeck = () => {
    if (myDeck && card) {
      // Create a new deck instance with existing cards and the new card
      const updatedDeck = new Deck(myDeck.deckName);
      updatedDeck.cards = [...myDeck.cards, card];

      // Update the state with the new deck
      setDeck(updatedDeck);
      setCard(null);

      console.log("Deck Contents", updatedDeck.cards);
    }
  };

  const createDeck = (deckName) => {
    return new Deck(deckName);
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
        <Button onClick={handleSearch}>Search</Button>
        <Button onClick={handleCreateDeck}>Create Deck</Button>
        <Button onClick={handleAddToDeck} disabled={!card}>
          Add to Deck
        </Button>
        <Button>Remove from Deck</Button>
      </div>
      {myDeck && (
        <div>
          {myDeck.cards.length > 0 ? (
            <ul>
              {myDeck.cards.map((deckCard, index) => (
                <li key={index}>{deckCard.name}</li>
              ))}
            </ul>
          ) : (
            <p>Your deck is empty.</p>
          )}
        </div>
      )}
    </div>
  );
};
