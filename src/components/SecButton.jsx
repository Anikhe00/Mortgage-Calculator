export default function SecButton({ onClick }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center h-[1.5rem] text-slate-700 text-[1rem] font-medium leading-[150%] underline decoration-slate-700 hover:text-slate-900 hover:decoration-slate-900 cursor-pointer"
      onClick={onClick}
    >
      Clear All
    </button>
  );
}
