import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import ContainerLayout from "@/layout/Container";

const ContactHero = () => {
  return (
    <section className="bg-background pb-16 pt-32 text-center">

      <ContainerLayout>

        <div className="mx-auto max-w-2xl space-y-6">

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-container/20 px-4 py-2 tech-label text-primary-fixed-dim">
            <span className="size-2 rounded-full bg-primary-fixed-dim live-pulse" />
            Connect With Our Team
          </span>

          <Head className="font-display text-headline-lg font-bold text-white lg:text-display-lg">
            Let's Build the Future of
            <span className="block">
              <span className="text-primary-fixed-dim">Broadcasting</span>{" "}
              Together
            </span>
          </Head>

          <Paragraph className="mx-auto max-w-xl text-body-sm leading-6 text-on-surface-variant">
            Ready to elevate your production? From live streaming infrastructure
            to cloud distribution, our expert team in Accra and Kumasi is ready
            to support your next project.
          </Paragraph>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default ContactHero;