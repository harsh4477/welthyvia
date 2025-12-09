import React from 'react';
import Heading from '../../components/Heading/Heading';
import * as LucideIcons from 'lucide-react';

// Define the type for Lucide icons
type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface MediaItem {
  title: string;
  description: string;
  thumbnail: string;
  type: 'video' | 'article' | 'press-release';
  link: string;
}

const MediaCenter = () => {
  const mediaItems: MediaItem[] = [
    {
      title: 'Tata Elxsi, Vaibhav Global are top businesses to bet on for long term: Pritam Deuskar of Wealthyvia.com',
      description: 'Wealth is created by holding great growth companies for a long duration. The most common mistake is not buying or selling early. From a long-term perspective, I think Tata Elxsi and Vaibhav Global are great businesses to own, Pritam Deuskar, Founder of Wealthyvia.com, said in an interview with Moneycontrol’s Kshitij Anand.',
      thumbnail: 'https://images.moneycontrol.com/static-mcnews/2021/06/shutterstock_589011317-1-770x433.jpg?impolicy=website&width=770&height=431',
      type: 'article',
      link: 'https://www.moneycontrol.com/news/business/markets/tata-elxsi-vaibhav-global-are-top-businesses-to-bet-on-for-long-term-pritam-deuskar-of-wealthyvia-com-7065851.html'
    },
    {
      title: 'Internet of Things—a new world and a huge business opportunity',
      description: 'nternet of Things (IoT) simply means devices communicating with each other and systems using the internet. Not just mobile, computers and TVs but all kinds of devices including fridge, fan, car dashboard,  industrial machines, transportation and logistics, thermometer and dialysis devices—in short all devices that can be connected to the internet.',
      thumbnail: 'https://images.moneycontrol.com/static-mcnews/2021/06/software-2-770x433.jpg?impolicy=website&width=770&height=431',
      type: 'article',
      link: 'https://www.moneycontrol.com/news/trends/expert-columns/internet-of-things-a-new-world-and-a-huge-business-opportunity-7089921.html'
    },
    {
      title: 'Good Time To Pick OMCs?',
      description: 'OMC stocks have seen good upmove in the last week or so due to correction in crude oil prices, but these stocks are still trading way below their alltime highs. Tanay Loya finds out if it is the right time to add OMCs to your portfolio. ',
      thumbnail: 'https://site.dsij.in/Portals/0/EasyDNNNews/3396/img-spr.jpg',
      type: 'article',
      link: 'https://insights.dsij.in/gu/dsijarticledetail/member/good-time-to-pick-omcs-3396'
    },
    {
      title: 'Multibagger in making? Heres why Moderna share price soared 7 times in 2020',
      description: 'I am basically from an engineering background but with a little knowledge about bioscience, I would try to explain key terminologies used in the pharma space that are being used in the treatment of COVID.',
      thumbnail: 'https://images.moneycontrol.com/static-mcnews/2020/05/Moderna-Coronavirus-vacine-770x433.jpg?impolicy=website&width=770&height=431',
      type: 'article',
      link: 'https://www.moneycontrol.com/news/business/markets/multibagger-in-making-heres-why-moderna-share-price-soared-7-times-in-2020-6245491.html'
    },
    
    {
      title: 'India – A 1 trillion manufacturing export market by 2030 ',
      description: 'Exports have seen tremendous growth over the last two years. India has reached $418 billion of manufacturing exports in the fiscal year 2022 (FY22) with rapid growth over the last 2 years.',
      thumbnail: 'https://images.livemint.com/img/2022/11/30/600x338/2020-08-31T031403Z_2_LYNXMPEG7U025_RTROPTP_3_CHINA-ECONOMY-PMI_1598881829649_1669800344350_1669800344350.JPG',
      type: 'article',
      link: 'https://www.livemint.com/economy/india-a-1-trillion-manufacturing-export-market-by-2030-11669800286004.html'
    },
    {
      title: 'It is not 2008 like crisis in global markets but volatility could take Nifty50 towards 17K',
      description: '"It is likely to reach the 17000 or 16800 level. It is advisable to hold some cash to invest in stocks that are part of large megatrends and have strong independent investment theses with high conviction," says Pritam Deuskar, Founder of Wealthyvia.com.',
      thumbnail: 'https://img.etimg.com/thumb/msid-98629382,width-210,height-158,imgsize-9178,resizemode-75/pritam-.jpg',
      type: 'article',
      link: 'https://economictimes.indiatimes.com/markets/expert-view/it-is-not-2008-like-crisis-in-global-markets-but-volatility-could-take-nifty50-towards-17k-pritam-deuskar/articleshow/98629347.cms?from=mdr'
    },
    {
      title: 'Pritam Deuskar- 7 habits of highly successful investor',
      description: 'Do you want to learn how to be a successful investor? Or do you want to learn the tried-and-true habits of successful investors? Don’t worry, Pritam Deuskar is here to assist you. Investing, he claims, is not about getting rich or playing the market. It’s a necessary step toward financial wellness. That includes being able to meet your own needs as well as the needs of those who rely on you, as well as setting and achieving goals that go beyond the obvious. It is the investors who work at the long term of the market. They typically buy stocks that are underpriced and undervalued, and they are willing to wait years for the story to play out.',
      thumbnail: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ozQb0Wbsc40KWxFKdfOErw.png',
      type: 'article',
      link: 'https://medium.com/@deuskarpritam799/pritam-deuskar-7-habits-of-highly-successful-investor-faf1a6a28cca'
    },
    {
      title: 'Can The Fertiliser Industry Reap A Rich Harvest?',
      description: 'The recent energetic performance of the fertiliser stocks has raised doubts as well as anticipation, tempting some investors to foray into this territory. Anthony Fernandes takes a retrospective look at this beleaguered ',
      thumbnail: 'https://site.dsij.in/Portals/0/EasyDNNNews/11262/img-spr1.jpg',
      type: 'article',
      link: 'https://insights.dsij.in/gu/dsijarticledetail/can-the-fertiliser-industry-reap-a-rich-harvest-11262'
    },
    
    
  ];

  const [activeTab] = React.useState('all');
  const [visibleItems, setVisibleItems] = React.useState(6);
  const itemsPerPage = 6;

  const filteredMedia = React.useMemo(() => 
    activeTab === 'all' 
      ? mediaItems 
      : mediaItems.filter(item => item.type === activeTab)
  , [activeTab]);
    
  const hasMoreItems = visibleItems < filteredMedia.length;
  
  const handleViewMore = React.useCallback(() => {
    setVisibleItems(prev => Math.min(prev + itemsPerPage, filteredMedia.length));
  }, [filteredMedia.length, itemsPerPage]);

  const getMediaIcon = (type: string): keyof typeof LucideIcons => {
    switch(type) {
      case 'video': return 'Play';
      case 'article': return 'FileText';
      case 'press-release': return 'Newspaper';
      default: return 'File';
    }
  };
  
  const MediaCard = ({ item }: { item: MediaItem }) => {
    const iconName = getMediaIcon(item.type);
    const Icon = LucideIcons[iconName] as LucideIcon;
    
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        {item.thumbnail && (
          <div className="relative">
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
              <Icon className="w-5 h-5 text-[#0096cd]" />
            </div>
            <img 
              src={item.thumbnail} 
              alt={item.title}
              className="w-full h-48 object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-[#002e45] hover:text-[#0096cd] transition-colors">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {item.title}
            </a>
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-5">{item.description}</p>
          <a 
            href={item.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0096cd] font-medium inline-flex items-center hover:underline"
          >
            {item.type === 'video' ? 'Watch Now' : 'Read More'}
            <LucideIcons.ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 lg:px-10 pt-24 pb-10 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Heading 
            title="Media Center" 
            className="mb-10"
          />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredMedia.slice(0, visibleItems).map((item, index) => (
            <MediaCard key={index} item={item} />
          ))}
        </div>

        {hasMoreItems && (
          <div className="mt-12 text-center">
            <button 
              onClick={handleViewMore}
              className="px-6 py-3 border-2 border-[#0096cd] text-[#0096cd] font-medium rounded-md hover:bg-[#0096cd] hover:text-white transition-colors"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaCenter;
