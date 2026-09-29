import Head from "@/components/common/HeadOne";
import Paragraph from "@/components/common/ParagraphTag";
import CountUp from "@/components/common/CountUp";

import ContainerLayout from "@/layout/Container";

const StatsBand = () => {
  return (
    <section className="border-y border-outline-variant/20 bg-surface py-16">
      <ContainerLayout>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="space-y-2 text-center">
            <Head className="font-display text-5xl font-bold text-primary-fixed-dim">
              <CountUp to={100} suffix="+" />
            </Head>

            <Paragraph className="tech-label text-on-surface-variant">
              Digital Projects
            </Paragraph>
          </div>

          <div className="space-y-2 text-center">
            <Head className="font-display text-5xl font-bold text-primary-fixed-dim">
              24/7
            </Head>

            <Paragraph className="tech-label text-on-surface-variant">
              Support Response
            </Paragraph>
          </div>

          <div className="space-y-2 text-center">
            <Head className="font-display text-5xl font-bold text-primary-fixed-dim">
              <CountUp to={15} suffix="+" />
            </Head>

            <Paragraph className="tech-label text-on-surface-variant">
              Media Platforms
            </Paragraph>
          </div>

          <div className="space-y-2 text-center">
            <Head className="font-display text-5xl font-bold text-primary-fixed-dim">
              <CountUp to={9} />
            </Head>

            <Paragraph className="tech-label text-on-surface-variant">
              Hubs & Studios
            </Paragraph>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default StatsBand;