import CalculatorIcon from "../assets/icon-calculator.svg";

export default function Button({ type, children }) {
  return (
    <button
      type={type}
      className="flex w-full flex-row justify-center items-center px-[2.5rem] bg-lime hover:bg-lime-50 cursor-pointer h-[3.5rem] text-slate-900 rounded-[62rem] gap-[0.5rem] font-semibold text-[1.125rem] leading-[125%]"
    >
      <img src={CalculatorIcon} alt="Calculator" /> {children}
    </button>
  );
}
