import React from "react";
import "../../Styles/Card.css";
import '../../Styles/Genre.css';
import '../../Styles/Genres.css';
import Button from "./BackButton";
import history from "../../History";
import HighCardItem from "./FantasyGenres/HighFantasy";
import LowCardItem from "./FantasyGenres/LowFantasy";
import MagicCardItem from "./FantasyGenres/MagicRealism";
import SwordCardItem from "./FantasyGenres/SwordFantasy";
import DarkCardItem from "./FantasyGenres/DarkFantasy";
import FablesCardItem from "./FantasyGenres/Fables";


function FantasyCards() {
  return (
      
    <div className="cards">
      <h1>Fantasy is a genre of literature that features magical and supernatural elements that do not exist in the real world. 
          Although some writers juxtapose a real-world setting with fantastical elements, 
          many create entirely imaginary universes with their own physical laws and logic and 
          populations of imaginary races and creatures. Speculative in nature, fantasy is not tied 
          to reality or scientific fact.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
          <HighCardItem
              text= "High or epic fantasy.  Set in a magical environment that has its own rules and physical laws, this subgenres plots and themes have a grand scale and typically center on a single, well-developed hero or a band of heroes, such as Frodo Baggins and his cohorts in J. R. R. Tolkiens The Lord of the Rings (1954)"
              label="High or epic fantasy"
              path="/fantasygenre"
            />
            <FablesCardItem
              text= " Fables. Using personified animals and the supernatural, fables impart moral lessons, like the stories in Aesop’s Fables and Arabian Nights."
              label="Fables"
              path="/fantasygenre"
            />
            <LowCardItem
             
              text="Low Fantasy. Set in the real world, low fantasy includes unexpected magical elements that shock characters, like The Quarter Storm by Veronica G. Henry."
              label="Low Fantasy"
              path="/fantasygenre"
            />
          </ul>
          <ul className="cards__items">
            <MagicCardItem
              text="Magic Realism. While similar to low fantasy, magical realism characters accept fantastical elements like levitation and telekinesis as a normal part of their otherwise realistic world, as in Gabriel García Márquez’s classic One Hundred Years of Solitude (1967)."
              label="Magic Realism"
              path="/fantasygenre"
            />
            <SwordCardItem
              text="Sword and Sorcery. A subset of high fantasy, it focuses on sword-wielding heroes, such as the titular barbarian in Robert E. Howard’s Conan pulp fiction stories, as well as magic or witchcraft."
              label="Sword and Sorcery"
              path="/fantasygenre"
            />
            <DarkCardItem
              text="Dark Fantasy. Combining elements of fantasy and horror, its aim is to unnerve and frighten readers, like the gargantuan, otherworldly monsters in H. P. Lovecraft’s universe."
              label="Dark Fantasy"
              path="/fantasygenre"
            />
          </ul>
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

export default FantasyCards;
