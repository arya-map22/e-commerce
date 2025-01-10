export default function Button({ children, ...props }) {
  return (
    <button
      className="rounded-md border-2 border-solid border-blue p-1 text-sm hover:bg-blue hover:text-white active:bg-dark-blue"
      {...props}
    >
      {children}
    </button>
  );
}
