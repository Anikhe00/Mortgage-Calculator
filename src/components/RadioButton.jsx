export default function RadioButton({ label, name, value, checked, onChange }) {
  return (
    <label
      className={`flex items-center h-[3rem] w-[100%] rounded-[0.25rem] px-[1rem] gap-[1rem] group cursor-pointer transition-colors duration-200 ${
        checked
          ? "bg-lime/15 border border-lime hover:bg-lime"
          : "border border-slate-500 hover:border-lime"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
        aria-label={`${label} type`}
      />
      <div
        className={`w-[1.25rem] h-[1.25rem] rounded-full transition-colors duration-200 relative flex items-center justify-center ${
          checked
            ? "border-2 border-lime"
            : "border-2 border-slate-700 hover:border-slate-700"
        }`}
      >
        <div
          className={`w-[0.75rem] h-[0.75rem] bg-lime rounded-full transition-opacity duration-200 ${
            checked ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
      <span className="text-slate-900 text-[1.125rem] font-semibold leading-[125%]">
        {label}
      </span>
    </label>
  );
}
