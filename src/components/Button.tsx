import clsx from "clsx";

const Button = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(
        "text-white bg-sky-500 border border-transparent hover:bg-sky-600 focus:ring-4 focus:ring-sky-300 shadow-sm font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none cursor-pointer disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-400",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
