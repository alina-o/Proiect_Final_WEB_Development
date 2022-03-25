import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import '../src/App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Pages/Login&Register/Login';
import Register from './Components/Pages/Login&Register/Register';
import Welcome from './Components/Pages/Welcome';
import Footer from './Components/Footer/Footer';
import Genres from './Components/Pages/Genres';
import FantasyGenre from './Components/Pages/Genres/FantasyGenre';
import ScienceFiction from './Components/Pages/Genres/ScienceFiction';
import Romance from './Components/Pages/Genres/Romance';
import HistoricalFiction from './Components/Pages/Genres/HistoricalFiction';
import Nonfiction from './Components/Pages/Genres/NonFiction';
import ScrollToTop from './Components/Pages/ScrollToTop';
import Mystery from './Components/Pages/Genres/Mystery';

function App() {
  const currentUser = false;
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path='/' exact element={<Welcome />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/genres' element={<Genres/>} />
          <Route path='/login' element={currentUser ? <Welcome /> : <Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/fantasygenre' element={<FantasyGenre/>} />
          <Route path='/sciencefiction' element={<ScienceFiction/>} />
          <Route path='/romance' element={<Romance/>} />
          <Route path='/historicalfiction' element={<HistoricalFiction/>} />
          <Route path='/nonfiction' element={<Nonfiction/>} />
          <Route path='/mystery' element={<Mystery/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;