import ComparisonTable from "./components/ComparisonTable";
import Contact from "./components/Contact";
import ContactModal from "./components/ContactModal";
import FAQ from "./components/FAQ";
import FloatingDock from "./components/FloatingDock";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marketplace from "./components/Marketplace";
import Pricing from "./components/Pricing";
import ServiceFeeTiers from "./components/ServiceFeeTiers";
import Testimonials from "./components/Testimonials";
import VerticalNav from "./components/VerticalNav";

import { useEffect } from "react";
import DesignServices from "./components/DesignServices";
import SmoothScroll from "./components/SmoothScroll";

import ComparisonPinning from "./components/ComparisonPinning";

function App() {
     useEffect(() => {
        const isDesktop = window.innerWidth <= 1024; // breakpoint desktop
        const isHttps = window.location.protocol === "https:";
        const isNotMobileDomain =
            window.location.hostname !== "m.primemarketing.vn";

        if (isDesktop && isHttps && isNotMobileDomain) {
            window.location.replace("https://m.primemarketing.vn/");
        }
    }, []);
    
    return (
        <SmoothScroll>
            <div className="flex flex-col min-h-screen bg-black text-white selection:bg-primary selection:text-white">
                <div className="md:hidden">
                    <FloatingDock />
                </div>
                <VerticalNav />
                <div className="relative z-10 bg-black shadow-2xl rounded-b-[3rem] mb-[500px]">
                    <Hero />
                    <ComparisonPinning />
                    <ComparisonTable />
                    <ServiceFeeTiers />
                    <Marketplace />
                    <Pricing />
                    <DesignServices />
                    <Testimonials />
                    <FAQ />
                    <Contact />
                    <div className="h-20 bg-black rounded-b-[3rem]" />
                </div>
                <div className="fixed bottom-0 left-0 right-0 z-0 h-[500px]">
                  <Footer />
                </div>
                <ContactModal />
            </div>
        </SmoothScroll>
    );
}

export default App;
