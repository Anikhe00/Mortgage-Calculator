export default function RadioButton({ label, name, value, checked, onChange }) {
  return (
    <label className="flex items-center h-[3rem] w-[100%] rounded-[0.25rem] border border-slate-500 px-[1rem] gap-[1rem] group hover:border-lime">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div
        className="w-[1.25rem] h-[1.25rem] border-2 border-slate-700 rounded-full 
                  peer-checked:border-lime 
                  hover:border-slate-700 
                  transition-colors duration-200 
                  relative flex items-center justify-center"
      >
        <div
          className="w-[0.75rem] h-[0.75rem] bg-lime rounded-full 
                    opacity-0 peer-checked:opacity-100 
                    transition-opacity duration-200"
        ></div>
      </div>
      <span>{label}</span>
    </label>
  );
}
