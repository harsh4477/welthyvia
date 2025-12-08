import Heading from "../../components/Heading/Heading";

const OurHistory = () => {
  return (
    <div className="px-4 lg:px-10 bg-white text-[#002e45] py-20 relative">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none h-full">
        <img
          src="/images/who-we-are-bg.jpg"
          alt="our-history-bg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <Heading title="Our History" className="mb-16 text-center" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg h-full">
            <img
              src="/images/about-us.png"
              alt="Our Journey"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#002e45]">Our Journey</h3>
              <p className="text-[#002e45]/90 leading-relaxed">
                Since our inception, Welthyvia has been on a remarkable journey of growth and innovation in the financial sector. Our story is one of vision, determination, and commitment to excellence in investment management.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#002e45]">Milestones</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-[#002e45] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">1</span>
                  <p className="text-[#002e45]/90">Founded with a vision to revolutionize investment strategies in the public markets.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#002e45] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">2</span>
                  <p className="text-[#002e45]/90">Successfully registered as a SEBI AIF Category III Fund, marking a significant regulatory milestone.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#002e45] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">3</span>
                  <p className="text-[#002e45]/90">Expanded our services to cater to UHNIs, family offices, and institutional investors across the globe.</p>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#002e45]">Our Vision</h3>
              <p className="text-[#002e45]/90 leading-relaxed">
                We continue to build on our legacy, driven by innovation and a commitment to delivering exceptional value to our clients. Our journey is defined by our ability to adapt to market changes while maintaining our core principles of integrity and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
