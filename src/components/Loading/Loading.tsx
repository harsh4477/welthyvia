interface LoadingProps {
  className?: string;
}

const Loading = ({ className = '' }: LoadingProps) => {
  return (
    <div className={`fixed inset-0 bg-black/20 backdrop-blur z-50 flex items-center justify-center ${className}`}>
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-t-[#002e45] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-1 border-4 border-b-[#0096cd] border-r-transparent border-t-transparent border-l-transparent rounded-full animate-spin animation-delay-200"></div>
      </div>
    </div>
  );
};

export default Loading;
