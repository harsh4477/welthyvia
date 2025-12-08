import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { governanceItems } from "./data/governanceItems";
import HeroSection from "./components/HeroSection/HeroSection";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
import Founders from "./pages/Founders/Founders";
import Governance from "./pages/Governance/Governance";
import Strategy from "./pages/Strategy/Strategy";
import WhyUs from "./pages/WhyUs/WhyUs";
import Resources from "./pages/Resources/Resources";
import MediaCenter from "./pages/MediaCenter/MediaCenter";
import ContactUs from "./pages/ContactUs/ContactUs";
import OurHistory from "./pages/OurHistory/OurHistory";
import CounterSection from "./components/CounterSection/CounterSection";
import Loading from "./components/Loading/Loading";
import Heading from "./components/Heading/Heading";
import GovernanceGrid from "./components/GovernanceGrid/GovernanceGrid";
import FAQSection from "./components/FAQSection/FAQSection";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      setShowLoader(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
      // Start fade out animation
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 300); // Match this with your fadeOut animation duration
      return () => clearTimeout(timer);
    };

    // Set loading to true when route changes
    handleStart();

    // Set loading to false when route change is complete
    const timer = setTimeout(() => {
      handleComplete();
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Header />
      {showLoader && (
        <Loading
          className={!isLoading ? "animate-fadeOut" : "animate-fadeIn"}
        />
      )}
      <main
        className={`min-h-[calc(100vh-100px)] ${
          isLoading
            ? "opacity-70"
            : "opacity-100 transition-opacity duration-300"
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative">
                <HeroSection />
                <CounterSection />
                <WhoWeAre />
                <div className="relative bg-gradient-to-br from-[#002e45] to-[#004d74] text-white py-20">
                  <Heading title="Our Governance" className="mb-6 md:mb-16 text-white" />
                  <GovernanceGrid items={governanceItems} />
                </div>
                <Strategy />
                <WhyUs />
                <div className="relative py-20 px-4 sm:px-6 lg:px-8">
                  <Heading title="Help & support (FAQ)" className="mb-6 md:mb-16" />
                  <FAQSection className=""/>
                </div>
              </div>
            }
          />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/media-center" element={<MediaCenter />} />
          <Route path="/our-history" element={<OurHistory />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
