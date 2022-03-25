import React from "react";
import "../Styles/Card.css";
import FantasyCardItem from "../Pages/GenresCards/FantasyCard";
import ScienceCardItem from "./GenresCards/SciencefictionCard";
import HistoricalCardItem from "./GenresCards/HistoricalFiction";
import RomanceCardItem from "./GenresCards/RomanceCard";
import NonfictionCardItem from "./GenresCards/Non-Fiction";
import MysteryCardItem from "./GenresCards/Mystery";

function Cards() {
  return (
    <div className="cards">
      <h1>Types of Genres</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <FantasyCardItem
            text="Fantasy"
             label="Fantasy" 
             path="/fantasygenre" />

            <ScienceCardItem 
            text="Science Fiction"
            label="Science Fiction" 
            path="/sciencefiction" />
                        <RomanceCardItem 
            text="Romance"
            label="Romance" 
            path="/romance" />
          </ul>

          <ul className="cards__items">
            


            <HistoricalCardItem
            text="Historical Fiction"
              label="Historical Fiction"
              path="/historicalfiction"
            />
           <NonfictionCardItem 
            text="Non Fiction"
            label="Non Fiction" 
            path="/nonfiction" />

          <MysteryCardItem 
            text="Mystery"
            label="Mystery" 
            path="/mystery" />
          </ul>

       
        </div>
      </div>
    </div>
  );
}

export default Cards;
