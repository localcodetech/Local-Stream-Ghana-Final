
import { appName } from "@/data/appConstants";
import CallToAction from "@/sections/home/callToAction";
import HeroSection from "@/sections/home/HeroSection";
import HomeContact from "@/sections/home/HomeContact";
import PortfolioPreview from "@/sections/home/PortfolioPreview";
import ServicePreview from "@/sections/home/ServicePreview";
import StatsBand from "@/sections/home/StatsBand";


const HomePage =() =>{


    return (
        <main >
<HeroSection />
<ServicePreview />
<StatsBand />
<PortfolioPreview />
<CallToAction />
<HomeContact />
        </main>
    )
};
export default HomePage