export default function InputField({ label, unit, unitPosition, onChange }) {
  const unitElement = unit && (
    <div className="flex py-[0.75rem] px-[1rem] flex-col items-center justify-center gap-[0.5rem] bg-slate-100 text-[1.125rem] font-medium leading-[125%] text-slate-700 self-stretch group-focus-within:bg-lime group-focus-within:text-slate-900">
      {unit}
    </div>
  );

  return (
    <div className="flex w-[100%] flex-col items-start gap-[0.75rem]">
      <label className="text-slate-700 text-[1rem] font-normal leading-[150%]">
        {label}
      </label>

      <div className="group flex self-stretch items-start h-[3rem] rounded-[0.25rem] border border-slate-500 hover:border-slate-900 overflow-hidden focus-within:border-lime">
        {unitPosition === "before" && unitElement}

        <input
          type="text"
          className="self-stretch w-[100%] flex items-center gap-[1.5rem] px-[1rem] border-none text-slate-900 focus:outline-none caret-slate-500 text-[1.125rem] font-medium"
          onChange={onChange}
        />
        {unitPosition === "after" && unitElement}
      </div>
    </div>
  );
}
