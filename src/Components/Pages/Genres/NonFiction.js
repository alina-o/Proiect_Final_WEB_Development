import React from "react";
import '../../Styles/Genre.css';
import '../../Styles/Genres.css';
import Button from "./BackButton";
import history from "../../History";
import HistoryCardItem from "./NonFiction/Hystory";
import AcademicCardItem from "./NonFiction/Academic";
import AutobiographiesCardItem from "./NonFiction/Autobiographies";
import SelfCardItem from "./NonFiction/Self";
import PhilosophyCardItem from "./NonFiction/Philosophy";
import HumorCardItem from "./NonFiction/Humor";


function Nonfiction() {
  return (
    <div>
      <div className="nonfiction-container">
        <h1>Non-Fiction</h1>
      </div>
      <div className="cards">
        <h1>
        Nonfiction is a broad genre of writing that encompasses all books that aren’t rooted in a fictional narrative.
        Nonfiction writing can be based in history and biography, it can be instructional, it can offer commentary and humor, and it can ponder philosophical questions.
        If a book is not rooted in a made-up story, then it is nonfiction.
        </h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <HistoryCardItem
            
                text="History. Historical nonfiction consists of true accounts of historical eras and events. Some histories dwell purely in objective facts, and other histories are refracted through the lens of the author’s personal beliefs. In either case, history books must present true stories in order to qualify as nonfiction. Famous writers of history include David Halberstam and Doris Kearns Goodwin."
                label="History"
                path="/nonfiction"
              />
              <AutobiographiesCardItem
                
                text="Biographies, autobiographies, and memoirs. This subset of nonfiction focuses on the life story of a particular subject. Biographies are written in the third person about someone other than the author. Autobiographies and memoirs are written by the subject themselves. While autobiographies and memoirs are, by necessity, written by someone who is currently alive at the time of the writing, biographies may profile subjects both living and dead."
                label="Biographies, autobiographies, and memoirs"
                path="/nonfiction"
              />
              <SelfCardItem
                
                text="Self-help and instruction. Self-help books are some of the best-selling books in the world of nonfiction. Many of these books concern business success, buoying confidence, staying organized, relationship advice, dieting, and financial management."
                label="Self-help and instruction."
                path="/nonfiction"
              />

 
            </ul>
            <ul className="cards__items">
              <AcademicCardItem
                text="Academic texts are designed to instruct readers on a particular topic. Most Americans first encounter academic books in the form of assigned school textbooks that form the basis for a yearlong class. Academic texts are also used by adults wishing to learn a particular trade, such as car repair or music arranging."
                label="Academic texts"
                path="/nonfiction"
              />
              <PhilosophyCardItem
                text="Philosophy and insight. These books are a close cousin of academic texts, and many are published by university-affiliated publishing houses. This genre runs the gamut from traditional philosophy (Plato, Aristotle, Descartes) to scientific theories (Newton, Watson & Crick) to analysis of scientific or cultural phenomena."
                label="Philosophy and insight"
                path="/nonfiction"
              />
              <HumorCardItem
                text="Humor and commentary. These subgenres are forms of creative nonfiction, where analysis and reflection on real-world events are distilled through the prism of an author’s point of view. Sometimes that point of view can be humorous, sometimes it’s political, and sometimes it’s purely meditative. What prevents this subcategory from being fiction is that it is rooted in objective events, both present and historical."
                label="Humor and commentary"
                path="/nonfiction"
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

export default Nonfiction;
