const Heading = ({ children, className = "" }) => {
  return (
    <h1
      className={`leading-tight font-display text-2xl text-white capitalize font-bold md:text-4xl lg:text-6xl ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;