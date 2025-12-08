import React from 'react';
import Heading from '../../components/Heading/Heading';
import * as LucideIcons from 'lucide-react';

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
      title: '1. Internet of Things—a new world and a huge business opportunity',
      description: 'nternet of Things (IoT) simply means devices communicating with each other and systems using the internet. Not just mobile, computers and TVs but all kinds of devices including fridge, fan, car dashboard,  industrial machines, transportation and logistics, thermometer and dialysis devices—in short all devices that can be connected to the internet.',
      thumbnail: 'https://images.moneycontrol.com/static-mcnews/2021/06/software-2-770x433.jpg?impolicy=website&width=770&height=431',
      type: 'article',
      link: 'https://www.moneycontrol.com/news/trends/expert-columns/internet-of-things-a-new-world-and-a-huge-business-opportunity-7089921.html'
    },
    {
      title: '2. Multibagger in making? Heres why Moderna share price soared 7 times in 2020',
      description: 'I am basically from an engineering background but with a little knowledge about bioscience, I would try to explain key terminologies used in the pharma space that are being used in the treatment of COVID.',
      thumbnail: 'https://images.moneycontrol.com/static-mcnews/2020/05/Moderna-Coronavirus-vacine-770x433.jpg?impolicy=website&width=770&height=431',
      type: 'article',
      link: 'https://www.moneycontrol.com/news/business/markets/multibagger-in-making-heres-why-moderna-share-price-soared-7-times-in-2020-6245491.html'
    },
    {
      title: '3. How investment climate has changed after Harshad Mehta scam broke in 1992',
      description: 'Harshad Mehta was acting as a broker in Ready Forward Deals (RFD) and managed to get money from banks and used it for stock market purchases. He is said to have artificially manipulated stock prices using bank money. Certain shares skyrocketed in a short time. There were also effects of liberalisation, which had just taken off.',
      thumbnail: 'https://images.moneycontrol.com/static-mcnews/2020/03/Sensex1.Reuters-1-770x433.jpg?impolicy=website&width=770&height=431',
      type: 'article',
      link: 'https://www.moneycontrol.com/news/trends/expert-columns/how-investment-climate-has-changed-after-harshad-mehta-scam-broke-in-1992-5946581.html'
    },
    {
      title: '4.India – A 1 trillion manufacturing export market by 2030 ',
      description: 'Exports have seen tremendous growth over the last two years. India has reached $418 billion of manufacturing exports in the fiscal year 2022 (FY22) with rapid growth over the last 2 years.',
      thumbnail: 'https://images.livemint.com/img/2022/11/30/600x338/2020-08-31T031403Z_2_LYNXMPEG7U025_RTROPTP_3_CHINA-ECONOMY-PMI_1598881829649_1669800344350_1669800344350.JPG',
      type: 'article',
      link: 'https://www.livemint.com/economy/india-a-1-trillion-manufacturing-export-market-by-2030-11669800286004.html'
    },
    {
      title: '5. It is not 2008 like crisis in global markets but volatility could take Nifty50 towards 17K',
      description: '"It is likely to reach the 17000 or 16800 level. It is advisable to hold some cash to invest in stocks that are part of large megatrends and have strong independent investment theses with high conviction," says Pritam Deuskar, Founder of Wealthyvia.com.',
      thumbnail: 'https://img.etimg.com/thumb/msid-98629382,width-210,height-158,imgsize-9178,resizemode-75/pritam-.jpg',
      type: 'article',
      link: 'https://economictimes.indiatimes.com/markets/expert-view/it-is-not-2008-like-crisis-in-global-markets-but-volatility-could-take-nifty50-towards-17k-pritam-deuskar/articleshow/98629347.cms?from=mdr'
    },
  ];

  const [activeTab] = React.useState('all');

  const filteredMedia = activeTab === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === activeTab);

  const getMediaIcon = (type: string) => {
    switch(type) {
      case 'video': return 'Play';
      case 'article': return 'FileText';
      case 'press-release': return 'Newspaper';
      default: return 'File';
    }
  };

  return (
    <div className="px-4 lg:px-10 pt-24 pb-10 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Heading 
            title="Media Center" 
            className="mb-10"
          />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item, index) => {
            const Icon = LucideIcons[getMediaIcon(item.type) as keyof typeof LucideIcons] as React.ElementType;
            
            return (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
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
                    <a href={item.link} className="hover:underline">
                      {item.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-5">{item.description}</p>
                  <a 
                    href={item.link} 
                    className="text-[#0096cd] font-medium inline-flex items-center hover:underline"
                  >
                    {item.type === 'video' ? 'Watch Now' : 'Read More'}
                    <LucideIcons.ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="mt-12 text-center">
          <button className="px-6 py-3 border-2 border-[#0096cd] text-[#0096cd] font-medium rounded-md hover:bg-[#0096cd] hover:text-white transition-colors">
            Load More
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default MediaCenter;
