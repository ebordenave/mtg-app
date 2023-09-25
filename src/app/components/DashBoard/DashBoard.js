"use client";

import React from "react";
import "./DashBoard.css";
import "../CardDisplay/CardDisplay";
import CardDisplay from "@/app/components/CardDisplay/CardDisplay";

const DashBoard = () => {
  return (
    <div className="dashboardContainer">
      <div className="box one">{<CardDisplay />}</div>
      <div className="box two">one</div>
      <div className="box three">three</div>
    </div>
  );
};

export default DashBoard;
