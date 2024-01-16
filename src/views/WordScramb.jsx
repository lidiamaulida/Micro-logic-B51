import React, { useState, useEffect } from 'react';
import NavBar from '../component/NavBar';
import '../assets/styling/WordScramb.css'

const WordScramb = () => {
  const [word, setWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const fruits = ['apple', 'banana', 'orange', 'grape', 'watermelon', 'strawberry', 'kiwi', 'mango', 'Blueberry', 'cherry', 'Lemon', 'Pineapple', 'Peaches'];

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * fruits.length);
    return fruits[randomIndex];
  };

  const generateScrambledWord = () => {
    const randomWord = getRandomWord();
    const scrambled = randomWord.split('').sort(() => Math.random() - 0.5).join('');
    setWord(randomWord);
    setScrambledWord(scrambled);
    setUserInput('');
  };

  const checkAnswer = () => {
    if (userInput.toLowerCase() === word.toLowerCase()) {
      setCorrectAnswers(correctAnswers + 1);
      generateScrambledWord();
    } else {
      alert('Wrong answer! Try again.');
    }
  };

  useEffect(() => {
    generateScrambledWord();
  }, []);

  return (
    <div className="box"> 
         <NavBar/>
        <div className="boxContainer">
            <div className="container">
            <h1 className="h1">Word Scramble Game</h1>
            <p>Correct Answers: {correctAnswers}</p>
            <h3>Kata yang diacak:</h3>
            <p className="p2"> {scrambledWord}</p>
            <input
                type="text"
                className="form-control"
                placeholder="Your guess"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button className="btn" onClick={checkAnswer}>Check Answer</button>
            </div>
        </div>
    </div>
  );
};

export default WordScramb;
