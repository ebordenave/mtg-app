import SearchBar from "@/app/components/SearchBar/SearchBar";
import React from "react";
import DashBoard from "@/app/components/DashBoard/DashBoard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="wrapper"
        style={{ margin: "10px", border: "1px solid black", padding: "30px" }}
      >
        <SearchBar />
        <DashBoard />
      </div>
    </main>
  );
}
