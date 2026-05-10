export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-full transition ${className}`}
    >
      {children}
    </button>
  );
}