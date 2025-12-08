interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => (
  <footer className={`bg-[#002e45] text-white py-4 text-center text-sm ${className}`}>
    &copy; {new Date().getFullYear()} Wealthyvia. All rights reserved.
  </footer>
);

export default Footer;
