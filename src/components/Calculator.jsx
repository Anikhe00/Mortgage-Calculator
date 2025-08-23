import InputField from "./InputField";
import RadioButton from "./RadioButton";
import SecButton from "./SecButton";
import Button from "./Button";

export default function Calculator({
  mortgageAmount,
  setMortgageAmount,
  mortgageTerm,
  setMortgageTerm,
  interestRate,
  setInterestRate,
  mortgageType,
  setMortgageType,
  onCalculate,
  typeError,
  formSubmitted,
  onClearAll,
}) {
  const showTypeError = formSubmitted && typeError;

  return (
    <form
      action=""
      className="w-full flex flex-col lg:p-[2.5rem] md:p-[2.5rem] px-[1.5rem] py-[2rem] items-start lg:gap-[2.5rem] gap-[1.5rem]"
      onSubmit={onCalculate}
    >
      <div className="w-[100%] flex lg:flex-row md:flex-row flex-col gap-[0.5rem] justify-start items-start lg:items-center md:items-center lg:justify-between md:justify-between">
        <h1 className="text-[1.5rem] text-slate-900 font-bold leading-[125%]">
          Mortgage Calculator
        </h1>
        <SecButton onClick={onClearAll} />
      </div>

      <div className="self-stretch flex flex-col items-start gap-[1.5rem]">
        <InputField
          label="Mortgage Amount"
          unit="￡"
          unitPosition="before"
          value={
            mortgageAmount
              ? Intl.NumberFormat("en-UK").format(
                  Number(
                    typeof mortgageAmount === "string"
                      ? mortgageAmount.replace(/,/g, "")
                      : mortgageAmount
                  )
                )
              : ""
          }
          onChange={(e) => {
            // Remove commas, allow only digits
            const raw = e.target.value.replace(/,/g, "");
            setMortgageAmount(raw);
          }}
          required
        />

        <div className="w-[100%] flex flex-col lg:flex-row md:flex-row items-start gap-[1.5rem]">
          <InputField
            label="Mortgage Term"
            unit="years"
            unitPosition="after"
            value={mortgageTerm}
            onChange={(e) => setMortgageTerm(e.target.value)}
            required
          />

          <InputField
            label="Interest Rate"
            unit="%"
            unitPosition="after"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </div>

        <div className="w-[100%] flex flex-col items-start gap-[0.75rem]">
          <label className="text-slate-700 text-[1rem] font-normal leading-[150%]">
            Mortgage Type
          </label>
          <RadioButton
            label="Repayment"
            name="mortgageType"
            value="repayment"
            checked={mortgageType === "repayment"}
            onChange={(e) => setMortgageType(e.target.value)}
          />
          <RadioButton
            label="Interest Only"
            name="mortgageType"
            value="interestOnly"
            checked={mortgageType === "interestOnly"}
            onChange={(e) => setMortgageType(e.target.value)}
          />

          {showTypeError && (
            <p className="text-red text-[0.875rem] font-normal leading-[150%]">
              This field is required
            </p>
          )}
        </div>
      </div>

      <Button type="submit">Calculate Repayments</Button>
    </form>
  );
}
