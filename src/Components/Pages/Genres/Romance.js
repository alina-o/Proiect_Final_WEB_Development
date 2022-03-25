import React from "react";
import '../../Styles/Genre.css';
import '../../Styles/Genres.css';
import Button from "./BackButton";
import history from "../../History";
import FantasyRCardItem from "./Romance/FantasyRomance";
import ContemporaryCardItem from "./Romance/Contemporary";
import YoungCardItem from "./Romance/YoungAdult";
import HistoricalCardItem from "./Romance/HistoricalRomance";
import SpeculativeCardItem from "./Romance/Speculative";
import SuspenceCardItem from "./Romance/Suspence";

function Romance() {
  return (
    <div>
      <div className="romance-container">
        <h1>Romance</h1>
      </div>
      <div className="cards">
        <h1>
        The romance genre is a popular category of books that consistently churns out bestsellers. The aim of the genre is simple, showcasing a love story where two people overcome adversity to obtain their happily ever after. According to the Romance Writers of America, 
        women count for 82% percent of the genre’s readership.
        </h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <ContemporaryCardItem
                text="Contemporary romance. One of the largest subgenres of romance, contemporary romance is often set in the time it’s written, encompassing the time after World War II all the way to the present. Contemporary romances reflect the current conventions of a more recent time period, giving the genre a more modern approach."
                label="Contemporary romance"
                path="/romance"
              />
         <FantasyRCardItem
  
                text="Fantasy romance is any work of fiction with fantastical, magical, or non-human elements (not set in space, and not with a technology focus, as this would be classified as sci-fi), where there’s a significant romantic element."
                label="Fantasy romance"
                path="/romance"
              />
              <HistoricalCardItem
                src="Images/low-fantasy.jpg"
                text="Historical romance novels are set before 1945 and rely on the accurate portrayal of the period. Everything that occurs or exists in a historical romance is affected by the limitations of that era, and attention to details is an integral part of the writing process as well."
                label="Historical romance"
                path="/romance"
              />
            </ul>
            <ul className="cards__items">
              <YoungCardItem
                text="Young adult romance novels showcase the lives of young people and often contain dramatic romantic themes. Characters should properly reflect their age —just because someone is “wise beyond their years” does not mean they do not have to deal with the emotional obstacles of growing up—and have an organic, believable attraction (not just be stuck together because they are common tropes). "
                label="Young Adult"
                path="/romance"
              />
              <SpeculativeCardItem
                text="Speculative romance. This subgenre includes a number of subcategories, such as paranormal romance, which can involve a variety of futuristic or fantasy elements. Some common themes in this genre of story includes time travel romance or gothic romance stories involving ghosts, vampires, or werewolves. These particular stories may involve supernatural or magical occurrences that go beyond the realm of scientific explanation."
                label="Speculative romance"
                path="/romance"
              />
              <SuspenceCardItem
                text="Romantic suspense novels combine mystery and thriller elements with the main relationship of the plot. Two love interests must solve a crime or uncover a secret together, with one character serving as the victim, and the other as the protector. "
                label="Romantic Suspence"
                path="/romance"
              />
            </ul>
          </div>
        </div>
      </div>
      <div className='hero-btns'>
      
      <Button className='btns2'
    buttonStyle='btn--primary'
    buttonSize='btn--large'
     onClick={() => history.push('/genres')}>Back to Genres</Button>
    
  </div>
    </div>
  );
}

export default Romance;
