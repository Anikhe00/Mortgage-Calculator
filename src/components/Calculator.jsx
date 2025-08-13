import InputField from "./InputField";
import Button from "./Button";

export default function Calculator() {
  return (
    <form className="flex w-full flex-col p-[2.5rem] items-start gap-[2.5rem]">
      <div className="flex-1 flex flex-row justify-between items-center">
        <h2>Mortgage Calculator</h2>
        <button>Clear All</button>
      </div>

      <div className="">
        <InputField unit="￡">Mortgage Amount</InputField>

        <div className="gap-[1.5rem]">
          <InputField unit="years">Mortgage Term</InputField>
          <InputField unit="%">Interest Rate</InputField>
        </div>

        <div></div>
      </div>

      <Button>Calculate Repayments</Button>
    </form>
  );
}
