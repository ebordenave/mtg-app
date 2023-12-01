"use client";

export class Deck {
  constructor() {
    this.cards = [];
    this.deckName = "";
  }

  addCard(card) {
    this.cards.push(card);
  }

  removeCard(card) {
    const indexToRemove = this.cards.indexOf(card);

    if (indexToRemove !== -1) {
      this.cards.splice(indexToRemove, 1);
    }
  }
}
