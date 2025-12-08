import Heading from "../../components/Heading/Heading";

const Strategy = () => {
  const investmentStrategies = [
    {
      title: "Focused Portfolio",
      description: "Concentrated investments in high-conviction, mid-sized Indian companies with strong growth potential.",
      icon: "📊"
    },
    {
      title: "Long-term Growth",
      description: "Patient capital approach focusing on companies with sustainable competitive advantages and scalable business models.",
      icon: "📈"
    },
    {
      title: "Sector Leadership",
      description: "Targeting market leaders in high-growth sectors with strong moats and competitive positioning.",
      icon: "🏆"
    },
    {
      title: "Risk Management",
      description: "Rigorous due diligence and continuous monitoring to manage downside risks effectively.",
      icon: "🛡️"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Heading title="Strategic Investment Framework" className="mb-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
              <img 
                src="images/strategy.png" 
                alt="Investment Strategy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Wealthyvia Small GIANTS Fund</h3>
                {/* <p className="text-blue-100">SEBI Reg: INAIF325-261901</p> */}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p className="leading-relaxed mb-6">
                The Wealthyvia Small GIANTS Fund is a Category III Alternative Investment Fund (AIF) that pursues superior, 
                consistent long-term returns by investing in high-conviction, mid-sized Indian companies transforming into 
                tomorrow's giants within explosive megatrends.
              </p>
              <p className="leading-relaxed">
                Our strategy focuses on delivering consistent high returns through disciplined, open-ended long-only equity 
                strategies. We combine Warren Buffett's moat-centric discipline, Peter Lynch's growth-at-reasonable-price 
                methodology, and Stanley Druckenmiller's macro-trend foresight to identify scalable leaders in high-growth sectors.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Heading title="Our Investment Pillars" className="mb-6" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentStrategies.map((strategy, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className="text-4xl mb-4">{strategy.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{strategy.title}</h3>
                <p className="text-gray-600">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
