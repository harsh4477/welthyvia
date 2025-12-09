const HeroSection = () => {
  return (
    <div className="md:-mt-[150px] w-full flex items-center justify-center text-white py-5 md:py-20 px-4 md:px-10 z-0 h-[450px] md:h-[800px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center h-[800px]">
        <div className="absolute inset-0 bg-black/50 "></div>
        <img 
          src="/images/homepage.png" 
          alt="Dubai Skyline" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="z-10 md:max-w-2xl flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-5xl font-semibold mb-3 leading-tight capitalize">
          Crafting Legacy Together
        </h1>
        <p className="text-base md:text-lg mb-8 text-center">
          At Wealthyvia, we combine traditional investment wisdom with future-ready technology to deliver sustained, transformative growth.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
