import { useState, useEffect } from "react";
// import Heading from "../../components/Heading/Heading";
import {
  BarChart2,
  Shield,
  Target,
  TrendingUp,
  Zap,
  Clock,
} from "lucide-react";
import Heading from "../../components/Heading/Heading";

const features = [
  {
    title: "Consistent Alpha",
    description:
      "Delivering outperformance across market cycles through disciplined research and conviction-led investing.",
    icon: <TrendingUp className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Proprietary Screening",
    description:
      "Advanced analytics and screening tools to identify high-potential investment opportunities.",
    icon: <BarChart2 className="h-8 w-8" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "In-Depth Analysis",
    description:
      "Comprehensive due diligence including management evaluations and on-ground research.",
    icon: <Shield className="h-8 w-8" />,
    color: "from-amber-500 to-yellow-400",
  },
  {
    title: "Multibagger Strategy",
    description:
      "Proven approach to identifying and capitalizing on high-growth investment opportunities.",
    icon: <Zap className="h-8 w-8" />,
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Risk Management",
    description:
      "Structured framework to protect capital while maximizing returns.",
    icon: <Target className="h-8 w-8" />,
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "Seamless Experience",
    description:
      "Streamlined investing process with focus on liquidity and client convenience.",
    icon: <Clock className="h-8 w-8" />,
    color: "from-indigo-500 to-blue-400",
  },
];

const WhyUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#002e45] to-[#004d74] pt-24 pb-10 md:py-20">
      {/* Hero Section */}
      <div className="relative  text-white pb-10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-cover mix-blend-overlay"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
             <Heading title="Why Choose Wealthyvia" className="mb-6 md:mb-16 text-white" />

            {/* <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Why Choose <span className="text-[#0096cd]">Wealthyvia</span>
            </h1> */}
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              We combine deep market expertise with innovative strategies to
              deliver consistent, risk-adjusted returns for our clients.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 transform ${
                  activeIndex === index
                    ? "border-l-4 border-[#0096cd] -translate-y-2 shadow-xl"
                    : "border-l-4 border-transparent hover:border-[#0096cd] hover:-translate-y-2 hover:shadow-xl"
                } overflow-hidden group`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div
                  className={`absolute -right-6 -top-6 w-32 h-32 rounded-full bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-6`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  {/* <div className="flex items-center text-[#0096cd] font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
