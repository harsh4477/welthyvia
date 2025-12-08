import * as React from "react";
import * as LucideIcons from "lucide-react";

type IconName = keyof typeof LucideIcons;

export interface GovernanceItem {
  iconName: IconName;
  title: string;
  description: string;
}

interface GovernanceGridProps {
  items: GovernanceItem[];
  className?: string;
}

const GovernanceGrid: React.FC<GovernanceGridProps> = ({ 
  items, 
  className = '' 
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 ${className}`}>
      {items.map((item, index) => {
        const IconComponent = LucideIcons[
          item.iconName as keyof typeof LucideIcons
        ] as React.ElementType;
        return (
          <div 
            key={index} 
            className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-indigo-600"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                {React.createElement(IconComponent, { 
                  className: "w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" 
                })}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GovernanceGrid;
