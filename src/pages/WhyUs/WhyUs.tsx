import Heading from "../../components/Heading/Heading";
import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: "Consistent Alpha",
    description: "Delivering outperformance across market cycles through disciplined research and conviction-led investing."
  },
  {
    title: "Proprietary Screening Tools",
    description: "We understand that every client is unique. Our solutions are tailored to your specific financial goals and risk tolerance."
  },
  {
    title: "Hands-On Due Diligence",
    description: "Deep fundamental checks, including management calls, channel checks, and site visits."
  },
  {
    title: "Proven Multibagger Strategy",
    description: "A track record built on identifying early-stage winners with scalable, high-quality growth."
  },
  {
    title: "Disciplined Exit Framework",
    description: "Structured sell rules focused on protecting capital while locking in asymmetric returns."
  },
  {
    title: "Ease of Investing & Liquidity:",
    description: "Simple onboarding and efficient liquidity management designed for HNI and family office needs."
  }
];

const WhyUs = () => {
  return (
    <div className="px-4 lg:px-10 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Heading title="Why Choose Us" className="items-start" />
        <p className="text-lg text-gray-600 text-left mb-12">
          Discover the Welthyvia difference - where expertise meets innovation to help you achieve your financial goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
