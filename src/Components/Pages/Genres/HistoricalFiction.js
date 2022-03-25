import React from "react";
import '../../Styles/Genre.css';
import '../../Styles/Genres.css';
import Button from "./BackButton";
import history from "../../History";
import TraditionalCardItem from "./HistoricalFiction/Traditional";
import SeriesRCardItem from "./HistoricalFiction/Series";
import WesternCardItem from "./HistoricalFiction/Western";
import HistoricalRFCardItem from "./HistoricalFiction/HistoricalRomantic";
import MysteriesCardItem from "./HistoricalFiction/Mysteries";
import TimeTCardItem from "./HistoricalFiction/TimeTravel";

function HistoricalFiction() {
  return (
    <div>
      <div className="historical-container">
        <h1>Historical Fiction</h1>
      </div>
      <div className="cards">
        <h1>
        Historical fiction is a literary genre where the story takes place in the past. 
        Historical novels capture the details of the time period as accurately as possible for authenticity, including social norms, manners, customs, and traditions.
         Many novels in this genre tell fictional stories that involve actual historical figures or historical events.
        </h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <TraditionalCardItem
                text="Traditional Historical Fiction. The traditional form is what is generally thought of as historical fiction. It typically has a historically accurate plot. Seminal examples among modern writers include Colleen McCullough’s “Masters of Rome” series, and Sharon Kay Penman’s books set in the Middle Ages of Great Britain and France."
                label="Traditional Historical Fiction"
                path="/historical"
              />
              <SeriesRCardItem
                
                text="Multi-Period Epics, Series, and Sagas. James Michener’s “Chesapeake” covered the history of a location from its Native American past to modern times. Norah Loft’s “The Suffolk Trilogy” covered the history of one house from the 14th century to the 1950s. The “North and South” trilogy by John Jakes is a saga of how the Civil War tests the ties of two families, a Northern family from Pennsylvania and a Southern one from South Carolina."
                label="Multi-Period Epics, Series, and Sagas"
                path="/historical"
              />
              <WesternCardItem
                text="Historical Western Fiction. These comprise stories about the American West. How they cover the subject matter has evolved since they were first written in the 1800s, shifting from an unsympathetic view of Native Americans to a more sympathetic perspective in recent time."
                label="Historical Western Fiction"
                path="/historical"
              /> 
            </ul>
            <ul className="cards__items">
              <HistoricalRFCardItem
                text="Historical Romantic Fiction. An example of historical romantic fiction is Anya Seton’s “Katherine” about a real-life love story between the Plantagenet John of Gaunt, Duke of Lancaster and Katherine Swynford, Geoffrey Chaucer’s sister-in-law."
                label="Historical Romantic Fiction"
                path="/historical"
              />
              <MysteriesCardItem
                text="Mysteries, Thrillers, and Adventure Novels. An example of historical mysteries is Ellis Peters’ series about crime-solving Brother Cadfael, a twelfth-century monk and herbalist. Peters’ “Cadfael Chronicles” is credited with popularizing this subgenre.
                Historical thrillers include “Enigma” by Robert Harris, “The Coffee Trader” by David Liss, and “The Alienist” by Caleb Carr. Bernard Cornwell’s series about Richard Sharpe is an example of historical adventure."
                label="Mysteries, Thrillers, and Adventure Novels"
                path="/historical"
              />
              <TimeTCardItem
                text="Time-Travel, Alternate Histories, Fantasy, Literary and Christian Novels. The Shining Girls” by Lauren Beukes is a historical time-travel thriller, and Connie Willis’” Doomsday” is another example of time-travel historical novel. “The Years of Rice and Salt” by Kim Stanley Robinson is an example of an alternate history novel."
                label="Time-Travel, Alternate Histories, Fantasy, Literary and Christian Novels"
                path="/historical"
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

export default HistoricalFiction;
