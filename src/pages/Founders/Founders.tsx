import Heading from '../../components/Heading/Heading';

const Founders = () => {
  const founders = [
    {
      name: "Pritam Deuskar",
      role: "Founder and CIO, Wealthyvia Ventures",
      experience:
        "12+ years of experience in institutional research and business analysis",
      bio: "Pritam has extensive proficiency in identifying early-stage small and mid-cap multibagger opportunities has been developed through years of rigorous market study, bottom-up research, and deep sector-level analysis. This capability is evidenced by the achievement of a sustained CAGR exceeding 32% from 2015 to 2024, delivered through a disciplined, conviction-driven investment methodology that emphasizes fundamental strength, governance quality, and long-term scalability. Professional experience includes advising prominent institutions such as Reliance, Ernst & Young, and Bonanza on strategic investment decisions, research frameworks, and market positioning. Analytical perspectives and market commentary have been featured in leading financial media outlets including Dalal Street Investment Journal, CNBC, and Moneycontrol, underscoring industry recognition for research depth and market foresight. Supported by a postgraduate specialization in Portfolio Management and SEBI NISM certification he demonstrates the right skill set to generate alpha.",
      image:
        "https://lirp.cdn-website.com/eda4ad32/dms3rep/multi/opt/41717CF9-288E-4F9C-BF86-9E35DA494F87-1920w.jpg",
      linkedinLink:
        "https://www.linkedin.com/in/pritam-deuskar-346b42245/?isSelfProfile=false",
    },
    {
      name: "Krushali Jagiwala",
      role: "Co-Founder and CEO, Wealthyvia Ventures",
      experience:
        "8+ years of fundraising experience from UHNIs, FPIs/FIIs, and Family Offices in India and abroad",
      bio: "Professional experience includes raising and managing more than USD 30 million across private and public Indian companies, with a strong track record of sourcing and channelizing capital from European, UAE, and Singapore investor markets. Expertise spans the full spectrum of alternative investment product design, structuring, and strategic marketing, with a focus on creating institutional-quality offerings tailored to sophisticated investor needs. The academic foundation includes an MBA in Finance from Veer Narmad South Gujarat University (VNSGU), Surat, providing comprehensive grounding in capital markets, financial analysis, and investment management. This combined experience reflects a deep understanding of global investor behaviour, product innovation, and the execution capabilities required to build and scale high-quality investment platforms.",
      image:
        "https://lirp.cdn-website.com/eda4ad32/dms3rep/multi/opt/41717CF9-288E-4F9C-BF86-9E35DA494F87-1920w.jpg",
      linkedinLink: "https://www.linkedin.com/in/krushali-jagiwala-13b404b4/",
    },
  ];

  return (
    <div className="px-4 lg:px-10 bg-white text-[#002e45] py-20 relative">
      <div className="fixed inset-0 z-0 opacity-5">
        <img
          src="/images/who-we-are-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        <Heading title="Our Founders" />

        <div className="grid grid-cols-1 gap-12">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300"
            >
              <div className="lg:min-w-80 overflow-hidden relative">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-[#002e45] p-1">
                  <h3 className="text-xl font-bold mb-1 text-white text-center">
                    {founder.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[#0096cd] font-medium mb-1 text-lg">
                  {founder.role}
                </p>
                <p className="text-gray-500 mb-4 text-xs">
                  {founder.experience}
                </p>
                <p className="text-gray-800 leading-relaxed text-sm">
                  {founder.bio}
                </p>

                <div className="mt-6 flex space-x-4">
                  <a
                    href={founder.linkedinLink}
                    className="hover:text-gray-400 text-[#002e45] transition-colors"
                    aria-label={`Connect with ${founder.name} on LinkedIn`}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founders;
