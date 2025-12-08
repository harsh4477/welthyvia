import "./App.css";
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
      {showLoader && <Loading className={!isLoading ? 'animate-fadeOut' : 'animate-fadeIn'} />}
      <main className={`min-h-[calc(100vh-100px)] ${isLoading ? 'opacity-70' : 'opacity-100 transition-opacity duration-300'}`}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative">
                <HeroSection />
                <CounterSection />
                <WhoWeAre />
                <WhyUs />
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
