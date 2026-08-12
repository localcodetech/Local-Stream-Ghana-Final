import HeroCard from "@/components/cards/HeroCard";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";
import ContainerLayout from "@/layout/Container";


const LearnMoreHero = ()=>{
    return(
        <>
        <ContainerLayout>
        <div className="space-y-4 flex flex-col items-center justify-center border-b py-4 border-white/10 ">
        <Head className="bg-primary-foreground/0  inline-flex  px-8 py-2 text-center leading-8 rounded shadow md:text-4xl text-2xl tracking-[0.2rem] uppercase hover:shadow-xl hover:shadow-white/1 duration-200 transition ">
        Learn More About Our Journey
        </Head>
        
        <Head className="tracking-wider text-primary">From Media to Technology Infrastructure</Head>
        
        <Paragraph className="whitespace-pre-wrap leading-8"> 
        Local Stream Ghana was built around a simple idea:  <strong>Africa's digital future requires reliable infrastructure.</strong>
      
       {"\n"} 
       {"\n"}
        Our journey began from the world of broadcasting and digital media, where we experienced firsthand the challenges organizations face when delivering television, radio, video and digital content to their audiences.
       
        {"\n"}
        {"\n"}
        As technology evolved, so did the demands of broadcasters, businesses and organizations. Traditional broadcasting increasingly needed to work alongside streaming platforms, cloud infrastructure, software applications and connected digital services.
       
        {"\n"}
        {"\n"}
        This created an opportunity for us to build something broader.
       
        {"\n"}
        {"\n"}
        Local Stream Ghana evolved into a media technology company focused on building the infrastructure behind modern digital communication.
        </Paragraph>
        
        
        
        </div>
        </ContainerLayout>
        </>
    )
};
export default  LearnMoreHero;