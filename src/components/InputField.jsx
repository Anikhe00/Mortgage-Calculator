import { useEffect, useState } from "react";

export default function InputField({
  label,
  unit,
  unitPosition,
  onChange,
  value,
  required,
}) {
  // Initialize state for touch for each input field
  const [touched, setTouched] = useState(false);

  // Reset touched state when value becomes empty
  useEffect(() => {
    if (!value) {
      setTouched(false);
    }
  }, [value]);

  // Define what error means
  const showError = required && touched && !value;

  // Create unit element to be reused in the input component
  const unitElement = unit && (
    <div
      className={`flex py-[0.75rem] px-[1rem] flex-col items-center justify-center gap-[0.5rem text-[1.125rem] font-medium leading-[125%] self-stretch group-focus-within:bg-lime group-focus-within:text-slate-900 ${
        showError ? "bg-red text-white" : " bg-slate-100 text-slate-700"
      }`}
    >
      {unit}
    </div>
  );

  return (
    <div className="flex w-[100%] flex-col items-start gap-[0.75rem]">
      <label className="text-slate-700 text-[1rem] font-normal leading-[150%]">
        {label}
      </label>

      <div
        className={`group flex self-stretch items-start h-[3rem] rounded-[0.25rem] overflow-hidden focus-within:border-lime ${
          showError
            ? "border border-red"
            : "border border-slate-500 hover:border-slate-900"
        }`}
      >
        {unitPosition === "before" && unitElement}

        <input
          value={value}
          type="text"
          className="self-stretch w-[100%] flex items-center gap-[1.5rem] px-[1rem] border-none text-slate-900 focus:outline-none caret-slate-500 text-[1.125rem] font-medium"
          onChange={onChange}
          onBlur={() => setTouched(true)}
        />
        {unitPosition === "after" && unitElement}
      </div>

      {showError && (
        <p className="text-red text-[0.875rem] font-normal leading-[150%]">
          This field is required
        </p>
      )}
    </div>
  );
}
