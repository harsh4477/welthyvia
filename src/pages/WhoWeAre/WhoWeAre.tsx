import Heading from "../../components/Heading/Heading";

const WhoWeAre = () => {
  return (
    <div className="px-4 lg:px-10 bg-white text-[#002e45] py-20 relative">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none h-full">
        <img
          src="/images/who-we-are-bg.jpg"
          alt="who-we-are-bg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center relative z-10">
        <Heading title="Who We Are" className="mb-16" />
        <div className="flex gap-8">
          <div className="min-w-[600px] h-[500px] rounded-xl overflow-hidden shadow-md">
            <img
              src="images/about-us.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm lg:text-base text-[#002e45] mb-5">
              We are a SEBI-registered AIF Category III Fund (Registration No.
              IN/AIF3/25-26/1901) headquartered in Mumbai, dedicated to
              delivering high-quality public market investment solutions to
              ultra-high-net-worth individuals (UHNIs), family offices,
              institutions, and fund of funds.
            </p>
            <p className="text-sm lg:text-base text-[#002e45] mb-5">
              Our investment philosophy centers on the conviction that India’s
              next wave of industry leaders is emerging today among mid-sized
              companies. As the Indian economy undergoes structural
              transformation driven by powerful megatrends, formalization,
              premiumization, digital acceleration, manufacturing resurgence,
              and rising domestic consumption, we focus on identifying
              businesses best positioned to benefit from these long-term shifts.
            </p>
            <p className="text-sm lg:text-base text-[#002e45] mb-5">
              With a rigorous research-driven approach, disciplined risk
              management, and deep market expertise, we seek to invest in
              mid-sized enterprises that exhibit scalable business models,
              strong governance, and the potential to compound value over time.
            </p>
            <p className="text-sm lg:text-base text-[#002e45]">
              Guided by institutional-grade processes and a commitment to
              excellence, we aim to create sustainable, long-term wealth for our
              investors while contributing to the growth story of India’s most
              promising companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
