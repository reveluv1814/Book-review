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
        "text-white bg-primary border border-transparent hover:bg-primary/90 focus:ring-4 focus:ring-primary/30 shadow-sm font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none cursor-pointer disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-400 transition-all duration-200",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
