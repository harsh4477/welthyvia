import React from 'react';

interface HeadingProps {
  title: string;
  className?: string;
  underlineColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Heading: React.FC<HeadingProps> = ({
  title,
  className = '',
  underlineColor = '#0096cd',
  size = 'lg',
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-2xl md:text-4xl',
    xl: 'text-3xl md:text-4xl lg:text-5xl',
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-fit mb-3">
        <h2 className={`${sizeClasses[size]} font-semibold mb-2 text-center text-[#002e45]`}>
          {title}
        </h2>
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-12 h-1 mx-auto"
          style={{ backgroundColor: underlineColor }}
        />
      </div>
    </div>
  );
};

export default Heading;
