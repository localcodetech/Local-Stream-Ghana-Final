import Heading from "@/components/common/HeadOne";

import Paragraph from "@/components/common/ParagraphTag";
import HeroCard from "@/components/cards/HeroCard";
import { termsofServiceList } from "@/data/termsofservices";

const TermsContent = () => {
  return (
    <section className="py-20">

      <div className="mx-auto max-w-5xl space-y-8">

    {termsofServiceList.map((item, index)=>{
      return <HeroCard className="space-y-4" key={item.description}>
        <Heading className="" >
          {index +1 }{". "}{item.title}
        </Heading>
        <Paragraph className="leading-10 text-muted-foreground tracking-wide">
          {item.description}
          
           
          
          
        </Paragraph>

      </HeroCard>
    })}   

      </div>

    </section>
  );
};

export default TermsContent;