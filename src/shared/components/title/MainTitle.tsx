const MainTitle = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div className={`relative flex flex-col items-center ${className || ""}`}>
      <h1 className="p-2 text-3xl font-semibold text-center text-primary">
        {children}
      </h1>
      <div className="w-[25%] h-[2.5px] mt-2 rounded-full bg-primary absolute bottom-[-8px] left-1/2 transform -translate-x-1/2" />
    </div>
  );
};

export default MainTitle;
