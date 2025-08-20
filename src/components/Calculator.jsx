import InputField from "./InputField";
import RadioButton from "./RadioButton";
import SecButton from "./SecButton";
import Button from "./Button";

export default function Calculator() {
  return (
    <form
      action=""
      className="w-full flex flex-col p-[2.5rem] items-start gap-[2.5rem]"
    >
      <div className="w-[100%] flex flex-row items-center justify-between">
        <h1 className="text-[1.5rem] text-slate-900 font-bold leading-[125%]">
          Mortgage Calculator
        </h1>
        <SecButton />
      </div>

      <div className="self-stretch ">
        <InputField label="Mortgage Amount" unit="￡" />
        <div className="w-[100%] flex flex-row">
          <InputField label="Mortgage Amount" unit="￡" />

          <InputField label="Mortgage Amount" unit="￡" />
        </div>

        <div>
          <p>Mortgage Type</p>
          <RadioButton label="Repayment" />
          <RadioButton label="Interest Only" />
        </div>
      </div>
    </form>
  );
}
