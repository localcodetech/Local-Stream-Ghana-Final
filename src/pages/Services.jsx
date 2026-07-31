import ContainerLayout from "@/layout/Container";
import ServiceCta from "@/sections/service/ServiceCTA";
import ServiceGrid from "@/sections/service/ServiceGrid";
import ServiceGridTwo from "@/sections/service/ServiceGridTwo";
import ServiceHero from "@/sections/service/ServiceHero";


const ServicesPage =()=>{
    return(<section className="bg-background">
    
    <ContainerLayout>
        <ServiceHero/>
        <ServiceGrid />
        <ServiceGridTwo />
        <ServiceCta />
    </ContainerLayout>
    </section>)
};

export default ServicesPage;