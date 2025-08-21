import Calculator from "./components/Calculator";
import Results from "./components/Results";

export default function App() {
  return (
    <main className="w-full h-auto lg:h-dvh flex flex-col md:p-[2.5rem] gap-[2.5rem] items-center justify-center pb-[1.5rem] bg-slate-100">
      <section className="flex lg:flex-row flex-col lg:max-w-[63rem] w-[100%] h-auto items-start overflow-hidden md:rounded-[1.5rem] bg-white shadow">
        <Calculator />
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
