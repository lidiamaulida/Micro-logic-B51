import React, { useState, useEffect } from "react";
import "../assets/styling/CountDuration.css";
import NavBar from '../component/NavBar';

const CountDuration = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [inputDate, setInputDate] = useState("");
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let id;
    const calculateTime = () => {
      if (isCounting) {
        const changingDate = new Date(inputDate);
        const currentDate = new Date();
        const totalSeconds = Math.floor((changingDate - currentDate) / 1000);

        if (inputDate === "") {
          setDays(0);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
          return;
        }
  
        if (totalSeconds >= 0) {
          setDays(Math.floor(totalSeconds / 3600 / 24));
          setHours(Math.floor((totalSeconds / 3600) % 24));
          setMinutes(Math.floor((totalSeconds / 60) % 60));
          setSeconds(Math.floor(totalSeconds % 60));
        } else {
          alert("Waktu telah habis.");
          setDays(0);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
          setIsCounting(false);
        }
      }
    };

    calculateTime();
  
    if (isCounting) {
      id = setInterval(calculateTime, 1000);
    }
  
    return () => clearInterval(id);
  }, [inputDate, isCounting]);
  

  const onChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const onStartClick = () => {
    if (inputDate === "") {
      alert("Silakan atur tanggal terlebih dahulu.");
    } else {
      setIsCounting(!isCounting);
    }
  };

  const onResetClick = () => {
    setIsCounting(false);
    setInputDate("");
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <>
      <div className="box">
        <NavBar />
        <div className="countdown-container">
          <h1>Countdown Time</h1>
          <p className="paragraf">Enter the Target Date and Time:</p>
          <div className="countdown-input-button">
            <input
              type="datetime-local"
              className="countdown-input"
              value={inputDate}
              onChange={onChangeHandler}
            />
            <div className="box-button">
                <button className="countdown-button" onClick={onStartClick}>
                    {isCounting ? "Pause" : "Start"}
                </button>
                {isCounting && (
                <button className="countdown-button" onClick={onResetClick}>
                    Reset
                </button>
                 )}
           </div>
          </div>
          <div className="countdown-values">
            <div className="countdown-value">
              <p className="big-text">{days}</p>
              <span>days</span>
            </div>
            <div className="countdown-value">
              <p className="big-text">{hours}</p>
              <span>hours</span>
            </div>
            <div className="countdown-value">
              <p className="big-text">{minutes}</p>
              <span>mins</span>
            </div>
            <div className="countdown-value">
              <p className="big-text">{seconds}</p>
              <span>seconds</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDuration;
