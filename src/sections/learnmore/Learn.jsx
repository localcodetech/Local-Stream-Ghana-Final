import HeroCard from "@/components/cards/HeroCard";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";
import ContainerLayout from "@/layout/Container";


const LearnMoreHero = ()=>{
    return(
        <>
        <ContainerLayout>
        <div className="flex flex-1 flex-col  ">
        <Head>
        Learn More About Our Journey
        </Head>
        
        <Head>From Media to Technology Infrastructure</Head>
        
        <Paragraph className="whitespace-pre-wrap"> 
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