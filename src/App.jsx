import Button from "./components/Button";
import Calculator from "./components/Calculator";
import Results from "./components/Results";

export default function App() {
  return (
    <main className="w-full h-dvh flex flex-col gap-[2.5rem] items-center justify-center bg-slate-100">
      <section className="flex flex-row max-w-[63rem] items-start overflow-hidden rounded-[1.5rem] bg-white shadow">
        <Calculator />
        <Results />
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
