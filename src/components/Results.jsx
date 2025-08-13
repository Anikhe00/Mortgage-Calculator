import Illustration from "../assets/illustration-empty.svg";

export default function Results() {
  return (
    <section className="flex w-full p-[2.5rem] flex-col items-center gap-[2.5rem] justify-center grow self-stretch rounded-bl-[5rem] bg-slate-900">
      <div className="flex flex-col justify-center items-center gap-[1rem] grow self-stretch">
        <img src={Illustration} alt="" />
        <h2 className="text-[1.5rem] text-center font-semibold leading-[125%] text-white">
          Results shown here
        </h2>
        <p className="self-stretch text-slate-300 text-[1rem] font-medium leading-[150%] text-center">
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    </section>
  );
}
