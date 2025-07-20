function GradientCardWrapper({ children, className, ...props }) {
  return (
    <div
      className={`bg-[#191934] text-white rounded-2xl p-6 flex flex-col  shadow-md relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Optional Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(172,160,228,0.3),_transparent)] pointer-events-none" />
      {children}
    </div>
  );
}

export default GradientCardWrapper;
