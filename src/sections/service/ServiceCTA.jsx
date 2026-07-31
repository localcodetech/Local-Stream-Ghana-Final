import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import { Button } from "@/components/ui/button";

import ContainerLayout from "@/layout/Container";

const ServiceCta = () => {
  return (
    <section className="bg-background pb-24">

      <ContainerLayout>

        <div className="glass-panel rounded-3xl px-8 py-16 text-center">

          <div className="mx-auto max-w-2xl space-y-6">

            <Head className="font-display text-headline-lg font-bold text-white lg:text-display-lg">
              Ready to Modernize Your{" "}
              <span className="block text-primary-fixed-dim">
                Broadcast Workflow?
              </span>
            </Head>

            <Paragraph className="mx-auto max-w-xl text-body-sm leading-6 text-on-surface-variant">
              Whether you're a startup radio station or a national TV network,
              our technical engineers are ready to build your future.
            </Paragraph>

            <div className="flex flex-wrap justify-center gap-4 pt-4">

              <Button
                size="lg"
                className="rounded-lg bg-primary-container font-bold text-on-primary-container glow-btn hover:bg-primary-container"
              >
                Request a Technical Audit
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-lg border-secondary bg-transparent font-bold text-secondary hover:bg-secondary/10 hover:text-secondary"
              >
                Download Service Brochure
              </Button>

            </div>

          </div>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default ServiceCta;