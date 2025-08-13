export default function InputField({ unit, children }) {
  return (
    <div className="flex flex-col gap-[0.75rem] items-start self-stretch">
      <label className="text-slate-700 text-[1rem] font-medium leading-[100%]">
        {children}
      </label>
      <div className="flex flex-row items-start self-stretch rounded-[0.25rem] border border-slate-500 h-[3rem]">
        <input
          className="flex px-[1rem] items-center gap-[i.5rem] grow self-stretch text-slate-900 text-[1.125rem] font-semibold leading-[125%] border-none focus:outline-none"
          type="text"
        />
        <div className="flex flex-col, justify-center items-center gap-[0.5rem] self-stretch bg-slate-100 px-[1rem] py-[0.75rem] text-slate-700 text-[1.125rem] font-semibold leading-[125%]">
          {unit}
        </div>
      </div>
    </div>
  );
}
