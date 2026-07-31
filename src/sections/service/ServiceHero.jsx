import Heading from "@/components/common/HeadingTag";
import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";

import ContainerLayout from "@/layout/Container";

const ServiceHero = () => {
  return (
    <section className="bg-background pb-16 pt-32">

      <ContainerLayout>

        <div className="grid items-start gap-12 lg:grid-cols-3">

          {/* Left side */}

          <div className="space-y-6 lg:col-span-2">

            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary-fixed-dim live-pulse" />

              <Paragraph className="tech-label text-primary-fixed-dim">
                Service Infrastructure
              </Paragraph>
            </div>

            <Heading className="max-w-2xl text-headline-lg lg:text-display-lg">
              Elite Broadcasting &{" "}
              <span className="block text-primary-fixed-dim">
                Technical Infrastructure
              </span>
            </Heading>

            <Paragraph className="max-w-xl text-body-sm leading-6 text-on-surface-variant">
              Empowering Ghana's media landscape with mission-critical broadcast
              engineering, cloud-native streaming, and enterprise software
              solutions designed for the digital-first era.
            </Paragraph>

          </div>

          {/* Stats box */}

          <div className="glass-panel flex gap-8 rounded-2xl p-6 lg:justify-end">

            <div className="space-y-1">
              <Paragraph className="tech-label text-on-surface-variant">
                Uptime
              </Paragraph>

              <Head className="font-display text-2xl font-bold text-white">
                99.98%
              </Head>
            </div>

            <div className="w-px bg-outline-variant" />

            <div className="space-y-1">
              <Paragraph className="tech-label text-on-surface-variant">
                Latency
              </Paragraph>

              <Head className="font-display text-2xl font-bold text-white">
                &lt;2.4s
              </Head>
            </div>

          </div>

        </div>

      </ContainerLayout>

    </section>
  );
};

export default ServiceHero;