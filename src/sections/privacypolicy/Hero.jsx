
import Heading from "@/components/common/HeadingTag";
import Head from "@/components/common/HeadOne";

import Paragraph from "@/components/common/ParagraphTag";
import ContainerLayout from "@/layout/Container";



const PrivacyHero = () =>{


    return (

      <section className="border-b border-border bg-background py-20">
          <ContainerLayout>
            <div className=" mx-auto max-w-4xl space-y-6 text-center">
            <span className="inline-flex items-center rounded bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2rem] text-primary">
                Privacy & Security
            </span>

            <Heading className="text-5xl lg-text-6xl">
                Privacy Policy
            </Heading>
        <Paragraph className="mx-auto max-w-3xl leading-8 text-muted-foreground border rounded-xl p-8 backdrop-blur-md bg-accent/10">
            Your privacy matters to us. This Privacy Policy explains how
            Local Stream Ghana collects, uses, stores and protects your
            personal information when you use our website and services.
        </Paragraph>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Head >
                Effective Date 
                <strong className="ml-3 text-foreground border-l px-2 ">04 August 2026</strong>
            </Head>

            <Head>
                Lasted Updated
                <strong className="ml-3 text-foreground border-l px-3">10 Auguest 2026</strong>
            </Head>
        </div>

        </div>
        </ContainerLayout>
      </section>
    )
};
export default PrivacyHero