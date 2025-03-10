const MainTitle = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div
      className={`p-2 text-center text-3xl font-bold text-gray-500 relative ${
        className || ""
      }`}
    >
      {children}
      <div className="w-[25%] h-1 mt-5 rounded-full bg-[#1B5DC2]" />
    </div>
  );
};

export default MainTitle;
