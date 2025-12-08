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
        <h1 className="text-2xl md:text-5xl font-semibold mb-3 leading-tight">
          Crafting legacy together
        </h1>
        <p className="text-base md:text-lg mb-8 text-center">
          At Wealthyvia, we blend tradition with innovation, bridging proven investing with future-focused technology to build transformative, long-term growth.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
