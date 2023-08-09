interface IButtonProps {
  onClick: () => void;
  label: string;
}

const Button = ({ onClick, label }: IButtonProps) => (
  <button onClick={onClick} className="mt-5 text-gray-200 hover:cursor-pointer border-2 rounded  bg-slate-500 px-1">
    {label}
  </button>
);

export default Button;
