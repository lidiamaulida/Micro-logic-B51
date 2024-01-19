import React, { useState } from "react";
import "../assets/styling/SalaryCalculating.css"
import NavBar from "../component/NavBar";

const SalaryCalculating = () => {
  const [basicSalary, setBasicSalary] = useState(0);
  const [allowance, setAllowance] = useState(0);
  const [deduction, setDeduction] = useState(0);
  const [grossSalary, setGrossSalary] = useState(0);
  const [netSalary, setNetSalary] = useState(0);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const calculateSalary = () => {
    // Menghitung gaji kotor dan gaji bersih
    const gross = basicSalary + allowance;
    const net = gross - deduction;

    setGrossSalary(gross);
    setNetSalary(net);
  };

  return (
    <>
    <div className="box">
    <NavBar/>
    <div className="slary-container">
      <h1>Salary Calculator</h1>
      <div className="salary-input">
      <div className="input-container">
        <div>
          <label htmlFor="basicSalary">Gaji Pokok:</label>
          <input
            type="number"
            className="form-control"
            id="basicSalary"
            value={basicSalary}
            onChange={(e) => setBasicSalary(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="allowance">Tunjangan:</label>
          <input
            type="number"
            className="form-control"
            id="allowance"
            value={allowance}
            onChange={(e) => setAllowance(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="deduction">Kewajiban Pokok:</label>
          <input
            type="number"
            className="form-control"
            id="deduction"
            value={deduction}
            onChange={(e) => setDeduction(Number(e.target.value))}
          />
          <div>
            <button onClick={calculateSalary}>Calculate</button>
          </div>
        </div>
      </div>
      <div className="result-container">
        <h3>Result:</h3>
        <p>Gaji Pokok: {formatCurrency(basicSalary)}</p>
        <p>Gaji Kotor: {formatCurrency(grossSalary)}</p>
        <p>Gaji Bersih: {formatCurrency(netSalary)}</p>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default SalaryCalculating;

