import HeroCard from "@/components/cards/HeroCard";

import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";
import { privacyContent } from "@/data/privacy";
import ContainerLayout from "@/layout/Container";


const PrivacyContent  = () => {

    return (
        <div className="py-20 border-b border-accent">
          <ContainerLayout>
            <section className=" max-w-5xl mx-auto space-y-8   lg:px-30 border-primary/5 shadow-accent ">
                  {privacyContent.map((item,index)=>{
                return <HeroCard key={item.head} className=" ">
                    <Head className="text-2xl md:text-4xl text-primary text-center">
                       {index + 1 + ".  " }  {item.head}
                    </Head>

                    <Paragraph  className="leading-8 tracking-wide  text-white font-medium ">
                        {item.detail}
                    </Paragraph>

                </HeroCard>
            })}
            </section>
          </ContainerLayout>
        </div>
    )
};

export default PrivacyContent;