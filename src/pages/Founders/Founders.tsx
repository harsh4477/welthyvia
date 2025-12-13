import Heading from "../../components/Heading/Heading";

const Founders = () => {
  const founders = [
    {
      name: "Krushali Jagiwala",
      role: "CEO and Co-Founder, Wealthyvia Ventures",
      experience:
        "8+ years of fundraising experience from UHNIs, FPIs/FIIs, and Family Offices in India and abroad",
      bio: [
        "8+ years of fundraising experience from UHNIs, FPIs/FIIs, and Family Offices",
        "Raised over USD 30 million for Indian companies",
        "Expertise in alternative investment product design and structuring",
        "Strong track record in European, UAE, and Singapore investor markets",
        "MBA in Finance from Veer Narmad South Gujarat University",
        "Specializes in capital markets, financial analysis, and investment management",
        "Focus on creating institutional-quality investment offerings"
      ],
      image: "images/Krushali Jagiwala.jpg",
      linkedinLink: "https://www.linkedin.com/in/krushali-jagiwala-13b404b4/",
    },
    {
      name: "Pritam Deuskar",
      role: "CIO and Founder, Wealthyvia Ventures",
      experience:
        "12+ years of experience in institutional research and business analysis",
      bio: [
        "Extensive proficiency in identifying early-stage small and mid-cap multibagger opportunities",
        "12+ years of experience in institutional research and business analysis",
        "Achieved a sustained CAGR exceeding 32% from 2015 to 2024",
        "Expertise in fundamental analysis, governance quality, and long-term scalability",
        "Professional experience with Ernst & Young",
        "Featured in Dalal Street Investment Journal, CNBC, and Moneycontrol",
        "Postgraduate specialization in Portfolio Management and SEBI NISM certified"
      ],
      image: "images/Pritam Deuskar.jpg",
      linkedinLink:
        "https://www.linkedin.com/in/pritam-deuskar-346b42245/?isSelfProfile=false",
    },
  ];

  return (
    <div className="px-4 lg:px-10 bg-white text-[#002e45] pt-24 pb-10 md:py-20 relative">
      <div className="fixed inset-0 z-0 opacity-5">
        <img
          src="/images/who-we-are-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        <Heading title="Our Founders" className="mb-6 md:mb-16" />

        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300"
            >
              <div className="h-[500px] min-w-80 overflow-hidden relative group">
                <div className="relative w-full h-full">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${founder.name === 'Pritam Deuskar' ? 'object-[0px_-70px]' : 'object-[0px_0px]'}`}
                  />
                </div>
                <a
                  href={founder.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#0077b5] hover:text-white"
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
                <div className="absolute bottom-0 left-0 w-full bg-[#002e45] p-2">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 text-white text-center">
                    {founder.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[#0096cd] font-medium mb-1 text-xl">
                  {founder.role}
                </p>
                <p className="text-gray-500 mb-4 text-sm">
                  {founder.experience}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  {founder.bio.map((point, i) => (
                    <li key={i} className="leading-relaxed">{point}</li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founders;
