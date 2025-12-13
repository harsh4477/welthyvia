import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HistoryTimeline = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainer.current) return;
    const cardWidth = window.innerWidth < 768 ? 280 : 320; // Narrower cards on mobile
    const scrollAmount = window.innerWidth < 768 ? cardWidth * 0.9 : cardWidth;
    scrollContainer.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  const timelineData = [
    {
      year: "2011",
      title: "Analytics Breakthrough",
      description:
        "Pritam Deuskar engineered a breakthrough proprietary tool that tracks and analyses data across 5,000+ listed companies.",
    },
    {
      year: "2015",
      title: "Youngest PMS Manager",
      description:
        "Pritam became one of the youngest PMS fund managers in India.",
    },
    {
      year: "2016",
      title: "Nationwide Expansion",
      description:
        "Krushali joined the PMS, expanding distribution across India and strengthening client outreach.",
    },
    {
      year: "2017",
      title: "2nd Best Fund Manager in India",
      description:
        "Pritam was recognized as the 2nd Best Performing Fund Manager in India",
    },
    {
      year: "2020",
      title: "Lowest Drawdown Recognition During COVID",
      description:
        "During the COVID market turmoil, Pritam received recognition for achieving one of the lowest drawdowns among PMS strategies.",
    },
    {
      year: "2021",
      title: "Top 3 PMS Performer for 9 Months",
      description:
        "Their PMS ranked in the Top 3 performers for nine consecutive months.",
    },
    {
      year: "2022",
      title: "Best Performer Award",
      description:
        "Their PMS received the Best Performer Award at the PMS & AIF Bazaar Forum in India.",
    },
    {
      year: "2023",
      title: "Wealthyvia Establishment",
      description:
        "Wealthyvia Ventures LLP was established to scale globally, onboarding reputed institutional clients, family offices, and UHNI investors from India and overseas.",
    },
    {
      year: "2024",
      title: "Monaco Forum Panelist Invite",
      description:
        "Wealthyvia was invited to join the panel at a prestigious Monaco Forum, marking its growing global presence.",
    },
    {
      year: "2025",
      title: "AIF Cat III License",
      description:
        "Wealthyvia recieved the SEBI-registered AIF Category III license, enabling access for multinational investors and expanding its alternative investment capabilities.",
    },
  ];

  return (
    <div className="w-full relative p-4 md:p-6 relative before:content-[''] before:absolute before:top-6 md:before:top-9 before:left-0 before:w-full before:h-0.5 before:bg-gray-200">
      {/* Left Navigation Button - Hidden on mobile, shown on md and up */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-4 z-10 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 cursor-pointer"
        aria-label="Previous items"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-900" />
      </button>

      {/* Timeline Container */}
      <div
        ref={scrollContainer}
        className="flex items-start gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pt-14 pb-2.5"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          scrollSnapType: "x mandatory",
        }}
      >
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-[calc(100vw-3rem)] sm:w-[320px] md:w-[360px] bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center relative border border-gray-200"
          >
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white px-3 py-0.5 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap ">
              {item.year}
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rotate-45 z-0 border-t border-l border-gray-200"></div>
            <div className="p-6 w-full mt-2">
              {/* <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-xs p-2">
                {item.logo}
              </div> */}
              <div className="mt-1 sm:mt-2 w-full">
                <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Navigation Button - Hidden on mobile, shown on md and up */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-4 z-10 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 cursor-pointer"
        aria-label="Next items"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-blue-900" />
      </button>

      {/* Mobile Navigation Dots */}
      {/* <div className="flex justify-center mt-8 mb-4 space-x-3 md:hidden">
        {timelineData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (scrollContainer.current) {
                const cardWidth = 280; // Same as card width on mobile
                scrollContainer.current.scrollTo({
                  left: index * (cardWidth + 16), // 16px for gap
                  behavior: "smooth",
                });
              }
            }}
            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-600 transition-colors"
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default HistoryTimeline;
