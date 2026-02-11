import ContactModal from "./components/ContactModal";
import FAQ from "./components/FAQ";
import FloatingDock from "./components/FloatingDock";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marketplace from "./components/Marketplace";
import ServiceFeeTiers from "./components/ServiceFeeTiers";
import Testimonials from "./components/Testimonials";
import VerticalNav from "./components/VerticalNav";

import { useEffect } from "react";
import DesignServices from "./components/DesignServices";
import SmoothScroll from "./components/SmoothScroll";

import ComparisonPinning from "./components/ComparisonPinning";

import Partners from "./components/Partners";

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
                <div className="relative z-10 bg-black shadow-2xl rounded-b-[3rem]">
                    <Hero />
                    <ComparisonPinning />
                    <Marketplace />
                    <ServiceFeeTiers />
                    <DesignServices />
                    <Partners />
                    <Testimonials />
                    <FAQ />
                    <ContactModal />
                </div>
                <Footer />
            </div>
        </SmoothScroll>
    );
}

export default App;
