import React, { useState, useEffect } from "react";
import "../../Styles/Genre.css";
import "../../Styles/Genres.css";
import Button from "./BackButton";
import "../../Styles/Welcome.css";
import { Link } from "react-router-dom";
import DetectiveCardItem from "./Mystery/Detective";
import CozyCardItem from "./Mystery/Cozy";
import CoperCardItem from "./Mystery/Coper";
import PoliceCardItem from "./Mystery/Police";

function Mystery() {
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

  window.addEventListener("resize", showButton);

  return (
    <div>
      <div className="mystery-container">
        <h1>Mystery</h1>
      </div>
      <div className="cards">
        <h1>
          The mystery genre is a genre of fiction that follows a crime (like a
          murder or a disappearance) from the moment it is committed to the
          moment it is solved.
        </h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <DetectiveCardItem
                text="Detective novels. These are crime novels that center around a detective (professional, amateur, or retired) investigating a crime or solving a murder case. "
                label="Detective novels"
                path="/mystery"
              />
              <CozyCardItem
                text="Cozy Mistery. These are detective novels that contain no sex, violence, or profanity. In order to solve a case, the detective in a cozy mystery often uses their intellect as opposed to police procedures."
                label="Cozy Mistery"
                path="/mystery"
              />
            </ul>
            <ul className="cards__items">
              <PoliceCardItem
                text="Police procedural. These are mystery novels featuring a protagonist who is a member of the police force. Well-known police procedural novelists include Ed McBain, P. D. James, and Bartholomew Gill."
                label="Police procedural"
                path="/mystery"
              />

              <CoperCardItem
                text="Coper stories. These are mystery stories told from the point of view of the criminals rather than the detective trying to catch them."
                label="Coper stories"
                path="/mystery"
              />
            </ul>
          </div>
        </div>
      </div>
      <li>
        <Link
          to="/genres"
          className="nav-links-mobile"
          onClick={closeMobileMenu}
        >
          Sign Up
        </Link>
      </li>

      {button && <Button buttonStyle="btn--outline2">Back to Genres</Button>}
    </div>
  );
}

export default Mystery;
