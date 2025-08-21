import { useState } from "react";
import Calculator from "./components/Calculator";
import Results from "./components/Results";

export default function App() {
  // State for form inputs
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");

  function calculateMortgage(
    mortgageAmount,
    mortgageTerm,
    interestRate,
    mortgageType
  ) {
    const principal = parseFloat(mortgageAmount);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(mortgageTerm) * 12;

    let monthlyRepayment, totalRepayment;

    if (mortgageType === "interestOnly") {
      monthlyRepayment = (principal * (parseFloat(interestRate) / 100)) / 12;
      totalRepayment = principal + monthlyRepayment * n;
    } else {
      monthlyRepayment =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, n))) /
        (Math.pow(1 + monthlyRate, n) - 1);

      totalRepayment = monthlyRepayment * n;
    }

    return {
      monthlyRepayment: monthlyRepayment.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
    };
  }

  function handleCalculate(e) {
    e.preventDefault();

    const result = calculateMortgage(
      mortgageAmount,
      mortgageTerm,
      interestRate,
      mortgageType
    );

    console.log(result);
  }

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
        />

        {/* Result component */}
        <Results monthlyRepayment="£1,797.74" totalRepayment="£539,322.94" />
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
