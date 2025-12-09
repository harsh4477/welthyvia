import Heading from "../../components/Heading/Heading";

const WhoWeAre = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-10 bg-white text-[#002e45] pt-24 pb-10  md:py-20 relative">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none h-full">
        <img
          src="/images/who-we-are-bg.jpg"
          alt="who-we-are-bg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center relative z-10">
        <Heading title="Who We Are" className="mb-6 lg:mb-16" />
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="md:min-w-[600px] h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-md">
            <img
              src="/images/about-us.png"
              alt="About Welthyvia"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-base text-gray-700 leading-relaxed">
              <b className="font-semibold">
                We are a SEBI-registered AIF Category III Fund (Registration No.
                IN/AIF3/25-26/1901) headquartered in Mumbai
              </b>
              , dedicated to delivering high-quality public market investment
              solutions to ultra-high-net-worth individuals (UHNIs), family
              offices, institutions, and fund of funds.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Our Investment Philosophy centers on the conviction that India's
              next wave of industry leaders is emerging today among mid-sized
              companies. As the Indian economy undergoes structural
              transformation driven by powerful megatrends, formalization,
              premiumization, digital acceleration, manufacturing resurgence,
              and rising domestic consumption, We target businesses positioned
              at the forefront of enduring market shifts.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Our Investment Approach is based on a rigorous research-driven
              approach, disciplined risk management, and deep market expertise,
              we seek to invest in mid-sized enterprises that exhibit scalable 
              <b className="font-semibold"> Business models, strong governance, and the potential to compound
              value over time</b>.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Guided by institutional-grade processes and a commitment to
              excellence, we aim to <b className="font-semibold">Create sustainable, long-term wealth</b> for our
              investors while contributing to the growth story of India's most
              promising companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
