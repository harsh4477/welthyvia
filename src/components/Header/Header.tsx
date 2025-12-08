import { useState, useEffect, useRef } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About us",
      href: "#",
      subItems: [
        { name: "Who we are", href: "/who-we-are" },
        { name: "Founders", href: "/founders" },
        { name: "Our History", href: "/our-history" },
        { name: "Our Governance", href: "/governance" },
      ],
    },
    { name: "Strategy", href: "/strategy" },
    { name: "Why us", href: "/why-us" },
    { name: "Resources", href: "/resources" },
    { name: "Media centre", href: "/media-center" },
  ];

  // Close submenu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        setIsSubmenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`lg:sticky fixed top-0 left-0 w-full transition-all duration-300 z-20 ${
        isHomePage && !isScrolled && !isMenuOpen
          ? "bg-transparent text-white"
          : "bg-white text-[#002e45] shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-10 py-3 lg:py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            <img
              src="images/logo.png"
              alt=""
              className="w-[160px] lg:w-[250px]"
            />
          </Link>

          <div>
            <nav className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.subItems && setIsSubmenuOpen(true)}
                onMouseLeave={() => item.subItems && setIsSubmenuOpen(false)}
              >
                <NavLink
                  to={item.href}
                  end={!item.subItems}
                  className={({ isActive }) => {
                    const isItemActive = item.href === '#' 
                      ? location.pathname === '/who-we-are' || 
                        location.pathname === '/founders' || 
                        location.pathname === '/our-history' ||
                        location.pathname === '/governance'
                      : isActive;
                    
                    const isScrolledOrNotHome = isScrolled || !isHomePage;
                    return `px-4 py-2 font-medium capitalize cursor-pointer transition-all duration-300 relative flex items-center ${
                      isItemActive
                        ? isScrolledOrNotHome
                          ? "text-[#002e45] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-8 after:bg-[#002e45] after:transition-all after:duration-300"
                          : "text-white after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-8 after:bg-white after:transition-all after:duration-300"
                        : isScrolledOrNotHome
                          ? "text-[#002e45]/60 hover:text-[#002e45] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:bg-[#002e45] after:transition-all after:duration-300 after:w-0 hover:after:w-8"
                          : "text-white/80 hover:text-white after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:w-0 hover:after:w-8"
                    }`;
                  }}
                  onClick={() => item.subItems && setIsSubmenuOpen(!isSubmenuOpen)}
                >
                  {item.name}
                  {/* {item.subItems && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        isSubmenuOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  )} */}
                </NavLink>

                {item.subItems && (
                  <div
                    ref={submenuRef}
                    className={`absolute left-0 mt-1 w-56 bg-[#002e45] bg-opacity-90 backdrop-blur-sm rounded-md shadow-lg z-50 transition-all duration-200 ${
                      isSubmenuOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                    onMouseEnter={() => setIsSubmenuOpen(true)}
                    onMouseLeave={() => setIsSubmenuOpen(false)}
                  >
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.href}
                          className={({ isActive }) => 
                            `block px-4 py-2 text-sm text-white hover:bg-[#0096cd] transition-all duration-200 ${
                              isActive ? 'bg-[#0096cd]' : ''
                            }`
                          }
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsSubmenuOpen(false);
                          }}
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `px-4 py-2 rounded font-medium capitalize cursor-pointer border transition-all duration-300 ease-in-out ${
                  isHomePage && !isScrolled
                    ? isActive 
                      ? 'bg-white/20 text-white border-white/30' 
                      : 'bg-white text-[#002e45] hover:border-white hover:bg-transparent hover:text-white border-transparent'
                    : isActive
                      ? 'bg-[#002e45]/10 text-[#002e45] border-[#002e45]/30'
                      : 'bg-[#002e45] text-white hover:bg-[#002e45] hover:bg-opacity-90 border-transparent'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-200 ease-in-out ${
            isMenuOpen ? "max-h-screen mt-4 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <div
                  className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors cursor-pointer"
                  onClick={() =>
                    item.subItems
                      ? setIsSubmenuOpen(!isSubmenuOpen)
                      : setIsMenuOpen(false)
                  }
                >
                  <Link to={item.href} className="block w-full">
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isSubmenuOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.subItems && isSubmenuOpen && (
                  <div className="ml-4 mt-1 space-y-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block py-2 px-4 text-sm text-white hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                `w-full text-center bg-white text-[#002e45] px-4 py-2 rounded font-medium capitalize transition-colors ${
                  isActive ? 'ring-2 ring-white/50' : ''
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
