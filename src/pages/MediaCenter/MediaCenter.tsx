import React from 'react';
import Heading from '../../components/Heading/Heading';
import * as LucideIcons from 'lucide-react';

const MediaCenter = () => {
  const mediaItems = [
    {
      type: 'video',
      title: 'Market Outlook 2024',
      description: 'Our investment team discusses the market outlook for the coming year.',
      date: 'January 15, 2024',
      thumbnail: '/images/media-1.jpg',
      duration: '12:45',
      views: '1.2K',
      link: '#'
    },
    {
      type: 'article',
      title: 'The Future of Sustainable Investing',
      description: 'Exploring the growing importance of ESG factors in investment decisions.',
      date: 'December 5, 2023',
      thumbnail: '/images/media-2.jpg',
      readTime: '5 min read',
      link: '#'
    },
    {
      type: 'press-release',
      title: 'Company Announces New Fund Launch',
      description: 'We are excited to announce the launch of our new investment fund.',
      date: 'November 20, 2023',
      link: '#'
    },
    {
      type: 'video',
      title: 'Interview with Our CEO',
      description: 'Exclusive interview discussing our investment philosophy and future plans.',
      date: 'October 10, 2023',
      thumbnail: '/images/media-3.jpg',
      duration: '8:30',
      views: '2.4K',
      link: '#'
    },
    {
      type: 'article',
      title: 'Understanding Market Volatility',
      description: 'How to navigate through periods of market uncertainty.',
      date: 'September 15, 2023',
      thumbnail: '/images/media-4.jpg',
      readTime: '4 min read',
      link: '#'
    },
    {
      type: 'press-release',
      title: 'Quarterly Performance Update',
      description: 'Q3 2023 performance highlights and portfolio updates.',
      date: 'September 1, 2023',
      link: '#'
    }
  ];

  const [activeTab, setActiveTab] = React.useState('all');

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
    <div className="px-4 lg:px-10 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <Heading 
            title="Media Center" 
            className="mb-4 md:mb-0"
          />
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {['all', 'video', 'article', 'press-release'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-[#0096cd] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item, index) => {
            const Icon = LucideIcons[getMediaIcon(item.type) as keyof typeof LucideIcons] as React.ElementType;
            
            return (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                {item.thumbnail && (
                  <div className="relative">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <div className="bg-white bg-opacity-80 rounded-full p-3">
                          <LucideIcons.Play className="w-6 h-6 text-[#0096cd]" />
                        </div>
                      </div>
                    )}
                    {item.type === 'video' && (
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {item.duration}
                      </div>
                    )}
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Icon className="w-4 h-4 mr-1 text-[#0096cd]" />
                    <span className="capitalize">
                      {item.type.split('-').join(' ')}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{item.date}</span>
                    {item.readTime && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{item.readTime}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#002e45] hover:text-[#0096cd] transition-colors">
                    <a href={item.link} className="hover:underline">
                      {item.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
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

        <div className="mt-12 text-center">
          <button className="px-6 py-3 border-2 border-[#0096cd] text-[#0096cd] font-medium rounded-md hover:bg-[#0096cd] hover:text-white transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaCenter;
