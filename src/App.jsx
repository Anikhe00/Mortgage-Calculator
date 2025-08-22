import { useState } from "react";
import Calculator from "./components/Calculator";
import Results from "./components/Results";

export default function App() {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");

  // Set error for mortgage type
  const [typeError, setTypeError] = useState(false);

  // State to track if user tries to submit form
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Result state
  const [result, setResult] = useState(null);

  // Handle the mortgage calculation
  function calculateMortgage(
    mortgageAmount,
    mortgageTerm,
    interestRate,
    mortgageType
  ) {
    // Converts the input "string" to Float and declare the variable needed
    const principal = parseFloat(mortgageAmount);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(mortgageTerm) * 12;

    // Declare the variables we need for the result
    let monthlyRepayment, totalRepayment;

    // Check the users mortgage type and calculate the monthly and total payment
    if (mortgageType === "interestOnly") {
      monthlyRepayment = (principal * (parseFloat(interestRate) / 100)) / 12;
      totalRepayment = principal + monthlyRepayment * n;
    } else {
      monthlyRepayment =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, n))) /
        (Math.pow(1 + monthlyRate, n) - 1);

      totalRepayment = monthlyRepayment * n;
    }

    // return an object containing the result
    return {
      monthlyRepayment: monthlyRepayment.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
    };
  }

  // Handles the form submit
  function handleCalculate(e) {
    e.preventDefault();
    setFormSubmitted(true);

    //validate all fields
    if (!mortgageAmount || !mortgageTerm || !interestRate || !mortgageType) {
      setTypeError(true);
      return;
    }
    setTypeError(false);

    // Declare a variable "result" that calculate the mortgage and stores the object returned
    const calcResult = calculateMortgage(
      mortgageAmount,
      mortgageTerm,
      interestRate,
      mortgageType
    );

    // Use the calcResult from above to set the result state
    setResult(calcResult);
  }

  // Handles clear all
  function handleClearAll() {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("");
    setResult(null);
    setTypeError(false);
    setFormSubmitted(false);
  }

  // The main app section
  return (
    <main className="w-full h-auto lg:h-dvh flex flex-col md:p-[2.5rem] gap-[2.5rem] items-center justify-center pb-[1.5rem] bg-slate-100">
      <section className="flex lg:flex-row flex-col lg:max-w-[63rem] w-[100%] h-auto items-start overflow-hidden md:rounded-[1.5rem] bg-white shadow">
        {/* Calculator component */}
        <Calculator
          mortgageAmount={mortgageAmount}
          setMortgageAmount={setMortgageAmount}
          mortgageTerm={mortgageTerm}
          setMortgageTerm={setMortgageTerm}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          mortgageType={mortgageType}
          setMortgageType={setMortgageType}
          onCalculate={handleCalculate}
          typeError={typeError}
          onClearAll={handleClearAll}
          formSubmitted={formSubmitted}
        />

        {/* Result component */}
        <Results result={result} />
      </section>

      <p className="text-slate-700">
        Made with ❣️ & 💡 by{" "}
        <a
          className="text-slate-700 underline italic"
          href="https://github.com/Anikhe00"
          target="_blank"
        >
          Shakirat Akanji
        </a>
      </p>
    </main>
  );
}
