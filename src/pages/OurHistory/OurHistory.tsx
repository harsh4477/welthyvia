import Heading from '../../components/Heading/Heading';
import HistoryTimeline from '../../components/HistoryTimeline/HistoryTimeline';

const OurHistory = () => {
  // const historyItems = [
  //   {
  //     year: "2023",
  //     title: "SEBI AIF Category III Registration",
  //     description: "Successfully obtained SEBI AIF Category III registration, marking a significant milestone in our journey as a regulated investment manager.",
  //     logo: "/images/logo.png"
  //   },
  //   {
  //     year: "2022",
  //     title: "Institutional Focus",
  //     description: "Expanded our client base to include institutional investors and family offices, establishing ourselves as a trusted partner in wealth management.",
  //     logo: "/images/logo.png"
  //   },
  //   {
  //     year: "2021",
  //     title: "Platform Launch",
  //     description: "Launched our proprietary investment platform, enabling sophisticated investment strategies and better client portfolio management.",
  //     logo: "/images/logo.png"
  //   },
  //   {
  //     year: "2020",
  //     title: "Founding Year",
  //     description: "Welthyvia was founded with a vision to create a differentiated investment platform focused on long-term value creation.",
  //     logo: "/images/logo.png"
  //   }
  // ];

  return (
    <div className=" pt-24 pb-10 md:py-20 px-4 sm:px-6 lg:px-8 relative h-[calc(100dvh-52px)] md:h-auto">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none h-full">
        <img
          src="/images/who-we-are-bg.jpg"
          alt="who-we-are-bg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-6xl mx-auto">
       <Heading 
            title="Our History" 
            className="mb-10"
          />
        
        <HistoryTimeline/>
      </div>
    </div>
  );
};

export default OurHistory;
