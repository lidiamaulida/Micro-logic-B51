import React, { useState } from "react";
import "../assets/styling/CurrencyConvert.css"
import NavBar from '../component/NavBar';

const CurrencyConvert = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [resetMode, setResetMode] = useState(false);
  const [dummyData] = useState({
    USD: 100,
    EUR: 80,
    GBP: 70,
    IDR: 1400000,
  });

  const handleReset = () => {
    setAmount("");
    setFromCurrency("USD");
    setToCurrency("USD");
    setConvertedAmount("");
    setResetMode(false);
  };

  const getConversionRate = (from, to) => {
    const conversionRates = {
      USD: { EUR: 0.85, GBP: 0.74, IDR: 14200 },
      EUR: { USD: 1.18, GBP: 0.88, IDR: 17100 },
      GBP: { USD: 1.35, EUR: 1.13, IDR: 19400 },
      IDR: { USD: 0.0000704, EUR: 0.0000585, GBP: 0.0000515 },
    };

    return conversionRates[from][to];
  };

  const handleConvert = () => {
    if (
      !fromCurrency ||
      !toCurrency ||
      isNaN(amount) ||
      amount <= 0 ||
      !dummyData.hasOwnProperty(fromCurrency)
    ) {
      alert("Invalid input. Please check your input values.");
      return;
    }

    const conversionRate = getConversionRate(fromCurrency, toCurrency);
    const result = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: toCurrency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount * conversionRate);

    setConvertedAmount(result);
    setResetMode(true);
  };

  return (
    <>
    <div className="box">
    <NavBar/>
    <div className="container-currency">
      <h1>Currency Converter</h1>
      <div className="select-currency">
        <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
        >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="IDR">IDR</option>
        </select>
        <p className="to">TO:</p>
        <select
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
        >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="IDR">IDR</option>
        </select>
      </div>
      <br />
      <div className="button-currency">
        <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <button onClick={handleConvert}>Convert</button>
        {resetMode && (
            <button
            className="reset"
            onClick={handleReset}
            >
            Reset
        </button>
            )}
      </div>
      <label htmlFor="convertedAmount">Try output :</label>
      <div className="result">
        {resetMode && (
            <p>{convertedAmount}</p>
        )}
        </div>
    </div>
    </div>
    </>
  );
};

export default CurrencyConvert;
