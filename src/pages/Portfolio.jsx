
import PortfolioContact from "@/sections/portfolio/PortfolioContact";
import PortfolioHero from "@/sections/portfolio/PortfolioHero";
import PortfolioProjects from "@/sections/portfolio/PortfolioProjects";
import PortfolioRadio from "@/sections/portfolio/PortfolioRadio";
import PortfolioSkills from "@/sections/portfolio/PortfolioSkills";
import PortfolioTv from "@/sections/portfolio/PortfolioTv";

const PortfolioPage = ()=>{
    return(<>
    <PortfolioHero />
   <PortfolioSkills/>
   <PortfolioRadio />
   <PortfolioTv />
   <PortfolioProjects />
   <PortfolioContact />
   

    </>)
};
export default  PortfolioPage;