import Heading from "@/components/common/HeadOne";

import Paragraph from "@/components/common/ParagraphTag";
import ContainerLayout from "@/layout/Container";

const TermsHero = () => {
  return (
    <section className="border-b border-border bg-background pt-36 pb-20">

      <ContainerLayout>

        <div className="mx-auto max-w-4xl text-center space-y-6">

          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2rem] text-primary">
            Legal Information
          </span>

          <Heading className="text-5xl lg:text-6xl">
            Terms of Service
          </Heading>

          <Paragraph className="mx-auto max-w-3xl leading-8 text-muted-foreground">
            These Terms of Service govern your access to and use of
            Local Stream Ghana's website, products and professional
            services. Please read them carefully before engaging
            with our company.
          </Paragraph>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">

            <span>
              Effective Date:
              <strong className="ml-2 text-foreground">
                03 August 2026
              </strong>
            </span>

            <span>
              Last Updated:
              <strong className="ml-2 text-foreground">
                03 August 2026
              </strong>
            </span>

          </div>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default TermsHero;