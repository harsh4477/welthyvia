import Heading from "../../components/Heading/Heading";

const Strategy = () => {
  return (
    <div className="px-4 lg:px-10 py-20 bg-white">
      <Heading title="Strategy" className="mb-16" />
      <div className="flex gap-8 items-center">
        <div className="min-w-[600px] h-[500px] rounded-xl overflow-hidden shadow-md"> 
          <img src="images/strategy.png" className="w-full h-full object-cover" />
        </div>
        <p className="text-sm md:text-base text-gray-500">
          Wealthyvia Small GIANTS Fund is a Category III AIF (SEBI Reg:
          INAIF325-261901), pursues superior, consistent long-term returns by
          investing in high-conviction, mid-sized Indian companies transforming
          into tomorrow's giants within explosive megatrends. it is aimed at
          delivering consistent high returns through disciplined, open-ended
          long-only equity strategies. Drawing from Buffett's moat-centric
          discipline, Lynch's growth-at-reasonable-price mastery, and
          Druckenmiller's macro-trend foresight, we focus on scalable leaders in
          sectors' wide expansion in niche technology domains with preferred
          duopolies or oligopolies.
        </p>
      </div>
    </div>
  );
};

export default Strategy;
