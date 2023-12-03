"use client";
import React, { useState } from "react";
import Button from "@/app/components/Button/Button";
import { Deck } from "@/app/components/Deck/Deck";
import SearchInput from "@/app/components/SeachInput/SearchInput";
import DeckList from "@/app/components/DeckList/DeckList";
import Modal from "@/app/components/Modal/Modal";
import Form from "@/app/components/InputForm/Form";

const DeckBuilder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [card, setCard] = useState(null);
  const [userDeck, setUserDeck] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = () => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const url = `https://api.scryfall.com/cards/named?fuzzy=${searchQuery}`;

  const createDeck = (deckName) => {
    return new Deck(deckName);
  };

  const handleCreateDeck = () => {
    const newDeck = createDeck("MyDeck");
    setUserDeck(newDeck);
  };

  const handleAddToDeck = () => {
    if (userDeck && card) {
      const updatedDeck = new Deck(userDeck.deckName);
      updatedDeck.cards = [...userDeck.cards, card];

      setUserDeck(updatedDeck);
      setCard(null);
      console.log("Deck Contents", updatedDeck.cards);
    }
  };

  const handleCardSearch = async () => {
    setTimeout(async () => {
      const response = await fetch(url);

      const data = await response.json();

      if (data.status === 404) {
        setCard(null);
        console.log("card not found");
      } else {
        setCard(data);
      }
      console.log(data);
    }, 75);
  };

  return (
    <div className="search-container">
      <div className="input-button-container">
        <SearchInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button onClick={handleCardSearch}>Search Button</Button>
        <Button onClick={handleOpenModal}>Create Deck</Button>
        {showModal && (
          <Modal title="Create Deck" onClose={handleCloseModal}>
            <Form onSubmit={handleSubmit} />
          </Modal>
        )}
        <Button onClick={handleAddToDeck} disabled={!card}>
          Add to Deck
        </Button>
      </div>
      {userDeck && <DeckList cards={userDeck.cards} />}
    </div>
  );
};

export default DeckBuilder;
