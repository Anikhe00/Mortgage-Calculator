export default function RadioButton({ label }) {
  return (
    <button className="flex items-center h-[3rem] w-[100%] rounded-[0.25rem] border border-slate-500 px-[1rem] gap-[1rem]">
      <input type="radio" className="w-[1.5rem] h-[1.5rem] outline-lime " />
      <label htmlFor="">{label}</label>
    </button>
  );
}
