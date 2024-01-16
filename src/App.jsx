import React from 'react';
import Home from './views/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountDuration from './views/CountDuration';
import CurrencyConvert from './views/CurrencyConvert';
import MobileLegend from './views/MobileLegend';
import TicTcToe from './views/TicTacToe';
import MatchingCard from './views/MatchingCard';
import SalaryCalculating from './views/SalaryCalculating';
import WordScramb from './views/WordScramb';

function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/count-duration" element={<CountDuration />}/>
      <Route path="/currency-convert" element={<CurrencyConvert />}/>
      <Route path="/mobile-legend" element={<MobileLegend />}/>
      <Route path="/tic-tac-toe" element={<TicTcToe />}/>
      <Route path="/matching-card" element={<MatchingCard />}/>
      <Route path="/salary-calculating" element={<SalaryCalculating />}/>
      <Route path="/word-scramb" element={<WordScramb />}/>
    </Routes>
  </Router>
  )
}

export default App
