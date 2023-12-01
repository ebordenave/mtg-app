import React from "react";
import DeckBuilder from "@/app/components/DeckBuilder/DeckBuilder";

export default function Home() {
  return (
    <main>
      <div className="main-container">
        <div>
          <DeckBuilder />
        </div>
      </div>
    </main>
  );
}
