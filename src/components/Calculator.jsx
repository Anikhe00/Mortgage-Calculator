import InputField from "./InputField";
import Button from "./Button";

export default function Calculator() {
  return (
    <section className="flex w-full flex-col p-[2.5rem] items-start gap-[2.5rem] grow">
      <InputField>Mortgage Amount</InputField>
      <InputField unit="years">Mortgage Term</InputField>
      <InputField unit="%">Interest Rate</InputField>
      <Button>Calculate Repayments</Button>
    </section>
  );
}
