import React, {useState,useEffect} from "react";
import '../../Styles/Genre.css';
import '../../Styles/Genres.css';
import Button  from './BackButton';
import "../../Styles/Welcome.css";
import { Link } from "react-router-dom";
import ParallelCardItem from "./ScienceFiction/Parallel";
import DystopianCardItem from "./ScienceFiction/Dystopian";
import MagicCardItem from "./ScienceFiction/Magic";
import HardCardItem from "./ScienceFiction/Hard";
import SpaceCardItem from "./ScienceFiction/Space";
import ApocalypticCardItem from "./ScienceFiction/Apocalyptic";

function ScienceFiction() {
  const [setClick] = useState(false);
  const [button, setButton] = useState(true);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

return (
  
    <div>
      <div className="science-container">
        <h1>Science Fiction</h1>
      </div>
      <div className="cards">
        <h1>
          Science fiction is a genre of fiction in which the stories often tell
          about science and technology of the future. It is important to note
          that science fiction has a relationship with the principles of
          science—these stories involve partially truepartially fictitious laws
          or theories of science. It should not be completely unbelievable,
          because it then ventures into the genre fantasy
        </h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <ParallelCardItem
                img
                src={""}
                alt=""
                text=" Parallel Worlds. If you aren t aware of the concept surrounding parallel worlds, there are an infinite number of alternate worlds with identical people living very different lives. To get to an alternate world, the characters of this story will travel by a wormhole also known as ‘Einstein-Rosen bridge ."
                label="Parallel Worlds"
                path="/sciencefiction"
              />
              <DystopianCardItem
                src="Images/low-fantasy.jpg"
                text="Dystopian fiction has a primary focus on political repression. A dystopian society is the complete opposite of a utopian society and society s freedoms are restricted. One of the greatest examples of dystopian fiction is George Orwell s classic 1984."
                label="Dystopian Fiction"
                path="/sciencefiction"
              />
                <ApocalypticCardItem
                src="Images/low-fantasy.jpg"
                text="Apocalyptic Science Fiction. Following a cataclysmic event, an apocalyptic science fiction story is soon to follow. After the decline of the human race or the end of the Earth itself, you will watch your heroes to whatever they can to survive."
                label=" Apocalyptic Science Fiction"
                path="/sciencefiction"
              />

            </ul>
            <ul className="cards__items">
              <MagicCardItem
                text="Magic Realism. While similar to low fantasy, magical realism characters accept fantastical elements like levitation and telekinesis as a normal part of their otherwise realistic world, as in Gabriel García Márquez s classic One Hundred Years of Solitude (1967)."
                label="Magic Realism"
                path="/sciencefiction"
              />
              <HardCardItem
                text="Hard Science Fiction. Technolgy takes center-stage in a hard science fiction story. In these stories, scientific concepts are explained in great detailed which helps to provide scientific realism. Sometimes the scientific aspect can get in the way of character development and plot."
                label="Hard Science Fiction"
                path="/sciencefiction"
              />
              <SpaceCardItem
                text="Space Opera. One of the more confusing subgenres is space opera. A space opera will usually be a long-running series and have continuing story arc throughout. The set of this story will take place in space and will have a number of characters who reoccur throughout the series. Many space operas have themes surrounding war, politics, space exploration, rebellion, etc."
                label="Space Opera"
                path="/sciencefiction"
              />
            </ul>
          </div>
        </div>
      </div>
      <li>
              <Link
                to='/genres'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          
      {button && <Button buttonStyle='btn--outline2'>Back to Genres</Button>}
    </div>
    
  );
}


export default ScienceFiction;
