export default function InputField({ unit, children }) {
  return (
    <div className="flex-1/2 flex-col gap-[0.75rem] items-start">
      <label className="text-slate-700 text-[1rem] font-medium leading-[100%]">
        {children}
      </label>
      <div className="flex flex-row items-start rounded-[0.25rem] border border-slate-500 h-[3rem] overflow-hidden">
        <input
          className="flex flex-1/2 px-[1rem] items-center gap-[1.5rem] text-slate-900 text-[1.125rem] font-semibold leading-[125%] border-none focus:outline-none"
          type="text"
        />
        <div className="flex flex-col, justify-center items-center gap-[0.5rem] bg-slate-100 px-[1rem] py-[0.75rem] text-slate-700 text-[1.125rem] font-semibold leading-[125%]">
          {unit}
        </div>
      </div>
    </div>
  );
}
