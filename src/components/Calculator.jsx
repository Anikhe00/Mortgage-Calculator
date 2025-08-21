import InputField from "./InputField";
import RadioButton from "./RadioButton";
import SecButton from "./SecButton";
import Button from "./Button";

export default function Calculator() {
  return (
    <form
      action=""
      className="w-full flex flex-col lg:p-[2.5rem] md:p-[2.5rem] px-[1.5rem] py-[2rem] items-start lg:gap-[2.5rem] gap-[1.5rem]"
    >
      <div className="w-[100%] flex lg:flex-row md:flex-row flex-col gap-[0.5rem] justify-start items-start lg:items-center md:items-center lg:justify-between md:justify-between">
        <h1 className="text-[1.5rem] text-slate-900 font-bold leading-[125%]">
          Mortgage Calculator
        </h1>
        <SecButton />
      </div>

      <div className="self-stretch flex flex-col items-start gap-[1.5rem]">
        <InputField label="Mortgage Amount" unit="￡" unitPosition="before" />
        <div className="w-[100%] flex flex-col lg:flex-row md:flex-row items-start gap-[1.5rem]">
          <InputField label="Mortgage Term" unit="years" unitPosition="after" />

          <InputField label="Interest Rate" unit="%" unitPosition="after" />
        </div>

        <div className="w-[100%] flex flex-col items-start gap-[0.75rem]">
          <label className="text-slate-700 text-[1rem] font-normal leading-[150%]">
            Mortgage Type
          </label>
          <RadioButton label="Repayment" />
          <RadioButton label="Interest Only" />
        </div>
      </div>

      <Button>Calculate Repayments</Button>
    </form>
  );
}
