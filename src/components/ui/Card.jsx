export function Card({ children }) {
  return (
    <div className="bg-black bg-opacity-30 p-6 rounded-xl z-50 relative">
      {children}
    </div>
  );
}
